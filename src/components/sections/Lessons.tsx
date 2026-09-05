import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { lessonPillars } from "../../config/content";

export function Lessons() {
  return (
    <section id="lessons" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Lessons tailored to each student"
          title="Support that adapts to how your child learns"
          description="Every session is planned around one student, not a fixed curriculum pace — so lessons stay useful whether the goal is catching up, keeping steady, or moving ahead."
        />

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {lessonPillars.map((pillar) => (
            <div key={pillar.title} className="border-t border-paper-line pt-5">
              <h3 className="font-display text-lg font-medium text-ink">{pillar.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
