import type { ReactNode } from "react";

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  const colorClass = tone === "dark" ? "text-accent-light" : "text-accent-dark";
  const lineClass = tone === "dark" ? "bg-accent-light/60" : "bg-accent-dark/60";
  return (
    <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] ${colorClass}`}>
      <span aria-hidden="true" className={`h-px w-6 ${lineClass}`} />
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
      <h2 id={id} className="text-balance font-display text-[1.75rem] font-medium leading-[1.15] text-ink sm:text-[2.25rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-[1.05rem] leading-relaxed text-ink-soft">{description}</p>
      )}
    </div>
  );
}
