import React, { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

/**
 * TagInput (a.k.a chips/token input)
 * - Type text and press Enter or "," to create a tag
 * - Click the × icon to remove a tag
 * - Backspace on empty input removes the last tag
 * - Paste with commas/newlines to add multiple tags
 * - Smooth add/remove animations via framer-motion
 *
 * Tailwind only (no extra CSS). Drop this component anywhere.
 */
function TagInput({
  value = [],
  onChange = () => {},
  placeholder = "Ajouter et appuyer Entrée…",
  separators = ["Enter", ","],
  maxTags = 0, // 0 = unlimited
  allowDuplicates = false,
  validate = () => true || false, // (tag: string) => boolean | string (error message)
  className = "",
}) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const tags = value ?? [];

  const normalized = useCallback(
    (raw: string) => raw.trim().replace(/\s+/g, " "),
    []
  );

  const addTag = useCallback(
    (raw: string) => {
      const t = normalized(raw);
      if (!t) return;

      if (maxTags && tags.length >= maxTags) {
        setError(`Limite ${maxTags} atteinte`);
        return;
      }

      if (
        !allowDuplicates &&
        tags.some((x: string) => x.toLowerCase() === t.toLowerCase())
      ) {
        setError("Déjà ajouté");
        return;
      }

      if (validate) {
        const res = validate(t);
        if (res === false) {
          setError("Invalide");
          return;
        }
        if (typeof res === "string" && res) {
          setError(res);
          return;
        }
      }

      setError("");
      onChange?.([...tags, t]);
    },
    [allowDuplicates, maxTags, normalized, onChange, tags, validate]
  );

  const addFromInput = useCallback(() => {
    if (!input.trim()) return;
    addTag(input);
    setInput("");
  }, [addTag, input]);

  const removeAt = useCallback(
    (idx) => {
      const next = tags.slice();
      next.splice(idx, 1);
      onChange?.(next);
      setError("");
    },
    [onChange, tags]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (separators.includes(e.key)) {
        e.preventDefault();
        addFromInput();
        return;
      }
      if (e.key === "Backspace" && !input && tags.length) {
        e.preventDefault();
        removeAt(tags.length - 1);
      }
    },
    [addFromInput, input, removeAt, separators, tags.length]
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      const text = e.clipboardData.getData("text");
      if (!text) return;
      const parts = text
        .split(/\n|,|;|\t/) // split by common separators
        .map((x) => normalized(x))
        .filter(Boolean);
      if (parts.length <= 1) return; // let default paste when single
      e.preventDefault();
      for (const p of parts) {
        addTag(p);
      }
    },
    [addTag, normalized]
  );

  const containerClasses = useMemo(
    () =>
      [
        "min-h-10 w-full rounded-lg border border-gray-400 bg-white/80 dark:bg-zinc-900/60",
        "px-3 py-2 flex flex-wrap gap-2 items-center shadow-sm focus:gra",
        className,
      ].join(" "),
    [className]
  );

  return (
    <div className="w-full">
      <div
        className={containerClasses}
        onClick={() => inputRef.current?.focus()}
      >
        <AnimatePresence initial={false}>
          {tags.map((t, i) => (
            <motion.span
              key={t + i}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="group inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] bg-black text-white shadow hover:bg-black"
            >
              <span className=" truncate" title={t}>
                {t}
              </span>
              <button
                type="button"
                aria-label={`Retirer ${t}`}
                onClick={(e) => {
                  e.stopPropagation();
                  removeAt(i);
                }}
                className="rounded-full p-0.5 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <X size={16} />
              </button>
            </motion.span>
          ))}
        </AnimatePresence>

        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onBlur={addFromInput}
          placeholder={placeholder}
          className="flex-1 min-w-[10ch] bg-transparent outline-none text-sm placeholder:text-gray-400"
          aria-label="Saisir un tag"
        />
      </div>
      <div className="mt-1 flex items-center justify-between text-[11px]">
        <span className="text-red-500 h-4">{error}</span>
        {maxTags ? (
          <span className="text-gray-500">
            {tags.length}/{maxTags}
          </span>
        ) : null}
      </div>
    </div>
  );
}

// Example: Drop-in usage
export default function Demo({
  placeholder,
  critere,
  setCritere,
}: {
  placeholder?: string;
  critere: string[];
  setCritere: (crit: string[]) => void;
}) {
  // optional: simple validator example (min length)
  const validate = useCallback(
    (t: string) => (t.length < 2 ? "Au moins 2 caractères" : true),
    []
  );

  return (
    <div className="mt-2">
      <TagInput
        value={critere}
        onChange={setCritere}
        placeholder={placeholder}
        maxTags={12}
        className=""
        validate={validate}
      />
    </div>
  );
}

function Tips() {
  return (
    <ul className="mt-6 space-y-2 text-[12px] text-gray-600 dark:text-gray-300 list-disc pl-5">
      <li>
        Appuie sur <kbd className="px-1 border rounded">Entrée</kbd> ou tape une
        virgule pour créer un tag.
      </li>
      <li>
        <kbd className="px-1 border rounded">Backspace</kbd> supprime le dernier
        tag si l’input est vide.
      </li>
      <li>
        Colle plusieurs éléments (séparés par virgules, points-virgules ou
        retours à la ligne) pour les ajouter d’un coup.
      </li>
      <li>
        Personnalise l’animation dans les props <code>initial</code>/
        <code>animate</code>/<code>exit</code> de <code>motion.span</code>.
      </li>
    </ul>
  );
}
