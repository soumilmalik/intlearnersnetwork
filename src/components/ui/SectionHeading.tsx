import type { ReactNode } from "react";

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  const classes =
    tone === "dark" ? "bg-white/10 text-accent-light" : "bg-accent-soft text-accent-dark";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-pill px-3 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] ${classes}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`mb-4 ${align === "center" ? "flex justify-center" : ""}`}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 id={id} className="text-balance font-display text-[1.6rem] font-bold leading-[1.18] text-ink sm:text-[2.1rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-[1.05rem] leading-relaxed text-ink-soft">{description}</p>
      )}
    </div>
  );
}
