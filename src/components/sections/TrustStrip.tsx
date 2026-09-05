import { Container } from "../ui/Container";

const items = [
  { label: "17 years of teaching experience" },
  { label: "One-to-one lessons" },
  { label: "International curricula" },
  { label: "Homework and exam support" },
];

export function TrustStrip() {
  return (
    <section aria-label="At a glance" className="border-y border-paper-line bg-paper-alt/60">
      <Container>
        <ul className="grid grid-cols-2 gap-y-6 py-8 text-center sm:grid-cols-4 sm:gap-x-6 sm:py-9">
          {items.map((item) => (
            <li key={item.label} className="px-2 text-[0.92rem] font-medium text-ink-soft sm:text-[0.95rem]">
              {item.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
