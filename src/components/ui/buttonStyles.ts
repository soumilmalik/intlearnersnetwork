export type ButtonVariant = "primary" | "secondary" | "whatsapp" | "ghost";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-[0_1px_0_rgba(0,0,0,0.05)] hover:bg-accent-hover active:bg-accent-hover",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/40 hover:bg-ink/5",
  whatsapp:
    "bg-whatsapp-soft text-whatsapp border border-whatsapp/20 hover:bg-whatsapp/15 hover:border-whatsapp/40",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
};

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md", className = "") {
  return [base, sizes[size], variants[variant], className].filter(Boolean).join(" ");
}
