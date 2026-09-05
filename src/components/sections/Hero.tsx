import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { buildWhatsAppLink } from "../../lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="animate-fade-up">
          <p className="mb-5 text-sm font-medium tracking-wide text-ink-soft">
            17 years' teaching experience · MA Mathematics · CTET qualified
          </p>

          <h1 className="text-balance font-display text-[2.4rem] font-medium leading-[1.1] text-ink sm:text-[3.1rem]">
            Personal mathematics lessons built around your child
          </h1>

          <p className="mt-6 max-w-xl text-balance text-[1.1rem] leading-relaxed text-ink-soft">
            Interactive one-to-one online tutoring, homework support, and exam preparation for
            students in the UK, US, Canada, and Australia.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#booking" variant="primary" size="lg">
              Book a free 30-minute session
            </ButtonLink>
            <ButtonLink
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </ButtonLink>
          </div>

          <p className="mt-5 text-sm text-ink-soft/80">No obligation — just a conversation about your child's learning.</p>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "80ms" }}>
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2Zm0 18.1a8.1 8.1 0 0 1-4.15-1.14l-.3-.18-3 .79.8-2.92-.2-.3A8.09 8.09 0 1 1 20.1 12a8.1 8.1 0 0 1-8.08 8.1Zm4.44-6.06c-.24-.12-1.44-.71-1.66-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.97-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md lg:mx-0">
      <div className="relative overflow-hidden rounded-card border border-paper-line bg-paper-alt px-8 py-12 sm:px-10 sm:py-14">
        <svg className="absolute inset-0 h-full w-full opacity-[0.35]" aria-hidden="true">
          <defs>
            <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M28 0H0V28" fill="none" stroke="var(--color-ink)" strokeOpacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <svg
          className="absolute -right-6 -top-6 h-40 w-40 text-ink/[0.06]"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="49" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="1" />
        </svg>

        <div className="relative">
          <svg viewBox="0 0 220 120" className="w-full text-ink" aria-hidden="true">
            <path
              d="M6 108C40 108 46 20 92 20C138 20 144 108 214 108"
              stroke="var(--color-accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <line x1="6" y1="108" x2="214" y2="108" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
            <line x1="6" y1="10" x2="6" y2="108" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
            <circle cx="92" cy="20" r="4" fill="var(--color-ink)" />
          </svg>

          <p className="mt-6 font-display text-lg leading-snug text-ink/80">
            Interactive online lessons, worked through one problem at a time.
          </p>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 w-[15.5rem] rounded-2xl border border-paper-line bg-paper px-5 py-4 shadow-[0_10px_30px_-12px_rgba(20,27,51,0.25)] sm:-left-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-dark">Taught internationally</p>
        <p className="mt-1.5 text-sm leading-snug text-ink-soft">UK · US · Canada · Australia</p>
      </div>
    </div>
  );
}
