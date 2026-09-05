import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-balance font-display text-[1.9rem] font-medium leading-[1.15] text-ink sm:text-[2.3rem]">
          Book your free 30-minute session
        </h2>
        <p className="max-w-md text-balance text-[1.02rem] leading-relaxed text-ink-soft">
          A relaxed first conversation — no obligation, just a chance to see whether the lessons
          are the right fit.
        </p>
        <ButtonLink href="#booking" variant="primary" size="lg">
          Book a free 30-minute session
        </ButtonLink>
      </Container>
    </section>
  );
}
