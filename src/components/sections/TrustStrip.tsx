import { Container } from "../ui/Container";

const items = [
  "17+ Years of Teaching Experience",
  "One-to-One Lessons",
  "International Curricula",
  "Homework and Exam Support",
] as const;

export function TrustStrip() {
  return (
    <section aria-label="At a glance" className="border-y border-paper-line bg-paper-alt/60">
      <Container>
        <ul className="grid grid-cols-2 gap-3 py-8 sm:grid-cols-4 sm:gap-4 sm:py-9">
          {items.map((label) => (
            <li key={label} className="flex justify-center">
              <span className="inline-flex items-center rounded-pill border border-paper-line bg-paper px-3.5 py-2 text-center text-[0.85rem] font-semibold leading-snug text-ink sm:text-[0.9rem]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
