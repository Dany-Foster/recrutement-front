import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import pdfjsWorker from "pdfjs-dist/legacy/build/pdf.worker.min.mjs?url";
import { useCallback, useRef, useState } from "react";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export type DropzoneProps = {
  onFiles: (files: File) => void;
  accept?: string;
  multiple?: boolean;
  className?: string;
  label?: string;
  fichier: File | null;
};

export default function Dropzone({
  onFiles,
  accept,
  className,
  label,
  fichier,
}: DropzoneProps) {
  const [active, setActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // const prettyFiles = useMemo(() => {
  //   if (fichier !== null) {
  //     return `${fichier.name} (${Math.round(fichier.size / 1024)} KB)`;
  //   }
  // }, [fichier]);

  // 🔸 Convertit la première page du PDF en image
  const generatePdfPreview = useCallback(async (file: File) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await page.render({ canvasContext: context, viewport }).promise;
    return canvas.toDataURL("image/png");
  }, []);

  const handleFiles = useCallback(
    async (files: File | null) => {
      if (!files) return;
      onFiles(files);
      setActive(false);

      if (files.type === "application/pdf") {
        const imgData = await generatePdfPreview(files);
        setPreviewUrl(imgData);
      } else if (files.type.startsWith("image/")) {
        const url = URL.createObjectURL(files);
        setPreviewUrl(url);
      } else {
        setPreviewUrl(null);
      }
    },
    [onFiles, generatePdfPreview]
  );

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
        handleFiles(e.dataTransfer.files[0]);
      }}
      className={
        "rounded-2xl border-2 border-dashed p-6 text-center cursor-pointer transition " +
        (active
          ? "border-black bg-gray-500 dark:bg-gray-700"
          : "border-zinc-300 dark:border-zinc-700") +
        (className ? ` ${className}` : "")
      }
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
    >
      {!previewUrl ? (
        <div className="flex flex-col gap-2">
          <p className="font-medium text-[18px]">
            {label ?? "Glissez-déposez un CV ou cliquez pour télécharger"}
          </p>
          <p className="text-[16px] text-zinc-500 mt-1">
            {accept ? `Types acceptés: ${accept}` : ""}
          </p>
        </div>
      ) : (
        <div className="">
          <img
            src={previewUrl}
            alt="aperçu du CV"
            className="max-h-[500px] mx-auto rounded-md shadow border"
          />
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files ? e.target.files[0] : null)}
      />
    </div>
  );
}
