import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { buildWhatsAppLink } from "../../lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-1.5 rounded-pill bg-accent-soft px-3 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] text-accent-dark">
            17 Years Teaching · MA Mathematics · CTET Qualified
          </span>

          <h1 className="mt-5 text-balance font-display text-[2.15rem] font-bold leading-[1.14] text-ink sm:text-[2.9rem]">
            Personal Maths Lessons, Built Around Your Child
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
    <div className="relative mx-auto max-w-md lg:mx-0 lg:max-w-xl">
      <div className="relative overflow-hidden rounded-card border border-paper-line bg-paper px-6 py-7 shadow-[0_20px_50px_-25px_rgba(20,22,31,0.25)] sm:px-8 sm:py-8">
        <div className="flex items-baseline gap-2 font-display">
          <span className="text-[1.65rem] font-bold leading-tight text-accent sm:text-[1.85rem]">
            2× faster understanding
          </span>
        </div>
        <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-soft">
          Time to understand and solve a new problem — before lessons, and since.
        </p>

        <svg viewBox="0 0 240 116" className="mt-6 w-full" aria-hidden="true">
          <rect x="95" y="20" width="125" height="66" fill="var(--color-violet)" opacity="0.08" />
          <line x1="16" y1="86" x2="224" y2="86" stroke="var(--color-paper-line)" strokeWidth="1" />
          <polyline
            points="20,86 70,76 120,36 170,26 220,26"
            fill="none"
            stroke="var(--color-violet)"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="86" r="3.5" fill="var(--color-ink-soft)" />
          <circle cx="220" cy="26" r="5" fill="var(--color-accent)" />
          <text
            x="170"
            y="49"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="8.5"
            fill="var(--color-violet)"
            fontWeight="600"
          >
            steady since
          </text>
          <g fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-ink-soft)">
            <text x="12" y="102">Sep</text>
            <text x="62" y="102">Oct</text>
            <text x="112" y="102">Nov</text>
            <text x="162" y="102">Dec</text>
            <text x="209" y="102">Jan</text>
          </g>
        </svg>
      </div>

      <div className="absolute -bottom-6 -left-4 w-[15.5rem] rounded-2xl border border-paper-line bg-paper px-5 py-4 shadow-[0_10px_30px_-12px_rgba(20,22,31,0.2)] sm:-left-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-dark">Taught internationally</p>
        <p className="mt-1.5 text-sm leading-snug text-ink-soft">UK · US · Canada · Australia</p>
      </div>
    </div>
  );
}
