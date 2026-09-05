import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/SectionHeading";
import { ButtonLink } from "../ui/Button";
import { BookingForm } from "../booking/BookingForm";
import { siteConfig } from "../../config/site";
import { buildWhatsAppLink } from "../../lib/whatsapp";

const isExternalBookingConfigured = siteConfig.bookingUrl.trim().length > 0;

export function BookingSection() {
  return (
    <section id="booking" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden="true">
        <defs>
          <pattern id="booking-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="#FAF8F3" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#booking-grid)" />
      </svg>

      <Container className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="on-dark text-paper">
          <Eyebrow tone="dark">Free 30-minute session</Eyebrow>
          <h2 className="mt-4 text-balance font-display text-[2rem] font-medium leading-[1.15] sm:text-[2.5rem]">
            Start with a free 30-minute session
          </h2>
          <p className="mt-5 max-w-md text-balance text-[1.05rem] leading-relaxed text-paper/75">
            Meet the tutor, discuss the student's learning needs, and see whether the lessons are
            the right fit.
          </p>

          <ul className="mt-8 space-y-3 text-[0.95rem] text-paper/75">
            <li className="flex items-start gap-2.5">
              <Check /> No obligation to continue afterwards
            </li>
            <li className="flex items-start gap-2.5">
              <Check /> A chance to discuss curriculum and goals directly
            </li>
            <li className="flex items-start gap-2.5">
              <Check /> Held online, one-to-one
            </li>
          </ul>

          <div className="mt-9 border-t border-paper/15 pt-7">
            <p className="text-sm text-paper/60">Prefer to message first?</p>
            <ButtonLink
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              className="mt-3 border-paper/25 text-paper hover:bg-paper/10"
            >
              Chat on WhatsApp
            </ButtonLink>
          </div>
        </div>

        <div>
          {isExternalBookingConfigured ? (
            <div className="rounded-card border border-paper/15 bg-paper p-8 text-center sm:p-10">
              <p className="text-[1.05rem] leading-relaxed text-ink-soft">
                Choose a time that works for you and Kanika will confirm your free session.
              </p>
              <ButtonLink
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="mt-6"
              >
                Open the booking calendar
              </ButtonLink>
            </div>
          ) : (
            <BookingForm />
          )}
        </div>
      </Container>
    </section>
  );
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-1 shrink-0 text-accent-light">
      <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
