import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function Textarea({ label, id, className = "", ...textareaProps }: TextareaProps) {
  return (
    <label className="block text-sm font-medium text-slate-700" htmlFor={id}>
      {label}
      <textarea
        id={id}
        className={`mt-2 min-h-28 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100 ${className}`}
        {...textareaProps}
      />
    </label>
  );
}
