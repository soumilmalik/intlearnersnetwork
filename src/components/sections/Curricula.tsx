import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { curricula, examPrep } from "../../config/content";

export function Curricula() {
  return (
    <section id="curricula" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Curricula and Exam Support"
          title="Comfortable Across the Syllabus Your School Follows"
          description="Lessons are matched to the terminology, structure, and expectations of your child's own curriculum or exam board."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-card border border-paper-line bg-paper p-7 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-soft">School Curricula</h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {curricula.map((item) => (
                <li
                  key={item}
                  className="rounded-pill bg-teal-soft px-4 py-1.5 text-sm font-semibold text-teal"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-paper-line bg-paper p-7 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-soft">Competitive Exams</h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {examPrep.map((item) => (
                <li
                  key={item}
                  className="rounded-pill bg-violet-soft px-4 py-1.5 text-sm font-semibold text-violet"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
          Lessons also draw on Vedic Mathematics techniques where they help a student calculate
          more confidently and understand number relationships more intuitively.
        </p>
      </Container>
    </section>
  );
}
