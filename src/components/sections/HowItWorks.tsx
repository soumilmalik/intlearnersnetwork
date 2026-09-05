import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ButtonLink } from "../ui/Button";
import { howItWorksSteps } from "../../config/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-paper-line bg-paper-alt/40 py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title="Three simple steps to get started"
        />

        <ol className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {howItWorksSteps.map((step, index) => (
            <li key={step.title} className="text-center sm:text-left">
              <span className="font-display text-3xl font-medium text-accent-dark">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-medium text-ink">{step.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <ButtonLink href="#booking" variant="primary" size="lg">
            Book a free 30-minute session
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
