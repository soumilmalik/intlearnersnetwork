import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/SectionHeading";
import { qualifications } from "../../config/content";

export function About() {
  return (
    <section id="about" className="border-t border-paper-line bg-paper-alt/40 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <Eyebrow>About the Tutor</Eyebrow>
          <h2 className="mt-4 text-balance font-display text-[1.9rem] font-bold leading-[1.15] text-ink sm:text-[2.3rem]">
            Kanika Sehgal Arora
          </h2>
          <p className="mt-3 text-[1.05rem] text-ink-soft">Mathematics tutor, International Learners' Network</p>

          <dl className="mt-8 flex flex-wrap gap-2.5 border-t border-paper-line pt-8">
            {qualifications.map((q) => (
              <div key={q}>
                <dt className="sr-only">Qualification</dt>
                <dd className="rounded-pill bg-paper-alt px-3.5 py-1.5 text-[0.9rem] font-semibold text-ink">{q}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
          <p>
            With 17 years of classroom and online teaching experience, Kanika combines strong
            subject knowledge with patient, interactive instruction. Every lesson is adapted to
            the student's curriculum, current understanding, and learning pace.
          </p>
          <p>
            Her teaching background spans secondary school mathematics classrooms in Delhi and
            Ghaziabad — including subject coordination responsibilities — as well as several years
            teaching online to students in the UK, US, Canada, and Australia. She also creates
            mathematics educational content alongside her tutoring work.
          </p>
          <p>
            Whether the goal is steady homework support, stronger exam technique, or simply more
            confidence with numbers, lessons stay focused on genuine understanding rather than
            memorised shortcuts.
          </p>
        </div>
      </Container>
    </section>
  );
}
