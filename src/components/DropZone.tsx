import { useCallback, useMemo, useRef, useState } from "react";

// Simple Dropzone for files (drag files or click)
export type DropzoneProps = {
onFiles: (files: File[]) => void;
accept?: string; // eg. "image/*"
multiple?: boolean;
className?: string;
label?: string;
fichier: File[];
};

export default function Dropzone({ onFiles, accept, multiple = true, className, label, fichier }: DropzoneProps) {
    const [active, setActive] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const prettyFiles = useMemo(() => fichier.map((f) => `${f.name} (${Math.round(f.size / 1024)} KB)`), [fichier]);

    const handleFiles = useCallback(
        (files: FileList | null) => {
            if (!files) return;
            
            onFiles(Array.from(files));
            setActive(false);
        },[onFiles]);

    
    
    return (
    <div
        onDragEnter={(e) => {
            e.preventDefault();
            setActive(true);
        }}
        onDragOver={(e) => {
            e.preventDefault();
            setActive(true);
        }}
        onDragLeave={(e) => {
            e.preventDefault();
            setActive(false);
        }}
        onDrop={(e) => {
            e.preventDefault();
            handleFiles(e.dataTransfer.files);
        }}
        className={
            "rounded-2xl border-2 border-dashed p-6 text-center cursor-pointer transition " +
            (active ? "border-black bg-gray-500 dark:bg-gray-700" : "border-zinc-300 dark:border-zinc-700") +
            (className ? ` ${className}` : "")
        }
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}>

        <p className="font-medium">{label ?? "Glissez-déposez des fichiers ou cliquez"}</p>
        <p className="text-xs text-zinc-500 mt-1">{accept ? `Types acceptés: ${accept}` : ""}</p>
        {prettyFiles.length > 0 && (
            <div className="mt-2 text-left">
                <p className="font-medium">Fichiers sélectionnés:</p>
                <ul>
                    {prettyFiles.map((f) => (
                        <li key={f}>{f}</li>
                    ))}
                </ul>
            </div>
        )}
        <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
        />
    </div>
    );
}