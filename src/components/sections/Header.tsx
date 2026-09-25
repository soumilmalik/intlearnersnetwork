import { useEffect, useState } from "react";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Lessons", href: "#lessons" },
  { label: "Experience", href: "#experience" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-paper-line/80 bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-[0.95rem] font-bold text-ink sm:text-[1.05rem]"
        >
          <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-paper">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 12V4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M4 12H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="9" cy="7" r="1.4" fill="var(--color-accent)" />
            </svg>
          </span>
          International Learners' Network
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="#booking" variant="primary" size="md">
            Book a free session
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-paper-line bg-paper md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-[0.95rem] font-medium text-ink-soft hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink
              href="#booking"
              variant="primary"
              size="md"
              className="mt-2 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Book a free session
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
