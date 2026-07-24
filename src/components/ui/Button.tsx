interface ButtonProps {
  text: string;
  className?: string;
}

export default function Button({ text, className = "" }: ButtonProps) {
  return (
    <button
      className={`rounded-lg bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700 transition ${className}`}
    >
      {text}
    </button>
  );
}