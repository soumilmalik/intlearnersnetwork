import { Container } from "../ui/Container";

const items = [
  { label: "17 Years of Teaching Experience", tone: "coral" },
  { label: "One-to-One Lessons", tone: "teal" },
  { label: "International Curricula", tone: "violet" },
  { label: "Homework and Exam Support", tone: "yellow" },
] as const;

const toneClasses: Record<(typeof items)[number]["tone"], string> = {
  coral: "bg-accent-soft text-accent-dark",
  teal: "bg-teal-soft text-teal",
  violet: "bg-violet-soft text-violet",
  yellow: "bg-yellow-soft text-[#8a5a12]",
};

export function TrustStrip() {
  return (
    <section aria-label="At a glance" className="border-y border-paper-line bg-paper-alt/60">
      <Container>
        <ul className="grid grid-cols-2 gap-3 py-8 sm:grid-cols-4 sm:gap-4 sm:py-9">
          {items.map((item) => (
            <li key={item.label} className="flex justify-center">
              <span
                className={`inline-flex items-center rounded-pill px-3.5 py-2 text-center text-[0.85rem] font-semibold leading-snug sm:text-[0.9rem] ${toneClasses[item.tone]}`}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
