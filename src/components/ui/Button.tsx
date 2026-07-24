import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
}

const buttonStyles = {
  primary: "bg-[#1479e8] text-white hover:bg-[#0d66c7]",
  secondary: "bg-slate-900 text-white hover:bg-slate-800",
  outline:
    "border border-[#1479e8] bg-transparent text-[#1479e8] hover:bg-blue-50",
};

export default function Button({
  text,
  href,
  variant = "primary",
  className = "",
  type = "button",
  ...buttonProps
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold transition-colors ${buttonStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      {...buttonProps}
    >
      {text}
    </button>
  );
}
