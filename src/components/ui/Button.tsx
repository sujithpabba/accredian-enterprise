import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "secondary" | "outline";
}

const buttonStyles = {
  primary: "bg-[#1479e8] text-white hover:bg-[#0d66c7]",
  secondary: "bg-slate-900 text-white hover:bg-slate-800",
  outline: "border border-[#1479e8] bg-transparent text-[#1479e8] hover:bg-blue-50",
};

export default function Button({
  text,
  variant = "primary",
  className = "",
  type = "button",
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold transition-colors ${buttonStyles[variant]} ${className}`}
      {...buttonProps}
    >
      {text}
    </button>
  );
}
