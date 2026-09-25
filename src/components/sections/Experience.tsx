import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { onlineExperience, schoolExperience, tutoringPlatforms, type ExperienceRole } from "../../config/content";

function TimelineItem({ item }: { item: ExperienceRole }) {
  return (
    <li className="relative border-l border-paper-line pb-9 pl-7 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-paper bg-accent"
      />
      <p className="font-mono text-xs font-medium uppercase tracking-wide text-ink-soft">{item.period}</p>
      <h4 className="mt-1.5 font-display text-[1.1rem] font-semibold text-ink">{item.institution}</h4>
      <p className="mt-1 text-[0.95rem] text-ink-soft">{item.role}</p>
      {item.detail && <p className="mt-0.5 text-[0.95rem] text-ink-soft">{item.detail}</p>}
    </li>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Seventeen years across classrooms and online lessons"
          description="A selection of school and online tutoring roles, spanning subject coordination, multiple year groups, and international online teaching."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="mb-7 font-mono text-xs font-semibold uppercase tracking-wide text-ink-soft">
              School mathematics teaching, Delhi &amp; Ghaziabad
            </h3>
            <ol className="space-y-0">
              {schoolExperience.map((item) => (
                <TimelineItem key={item.institution} item={item} />
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-7 font-mono text-xs font-semibold uppercase tracking-wide text-ink-soft">
              Online teaching and tutoring
            </h3>
            <ol className="space-y-0">
              {onlineExperience.map((item) => (
                <TimelineItem key={item.institution} item={item} />
              ))}
            </ol>

            <div className="mt-9 rounded-card border border-paper-line bg-paper-alt p-6">
              <p className="text-[0.95rem] font-semibold text-ink">
                Teaching experience also includes work with
              </p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                {tutoringPlatforms.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
