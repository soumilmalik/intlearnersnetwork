import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { faqs } from "../../config/content";

export function FAQ() {
  return (
    <section id="faq" className="border-t border-paper-line py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Common questions from parents" />

        <div className="mt-10 divide-y divide-paper-line border-y border-paper-line">
          {faqs.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[1.05rem] font-medium text-ink marker:content-none">
                {item.question}
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-paper-line text-ink-soft transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
