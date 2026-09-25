import { useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { siteConfig } from "../../config/site";

export function DemoLesson() {
  const [playing, setPlaying] = useState(false);
  const { demoVideoEmbedId } = siteConfig;

  return (
    <section id="demo" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="See a lesson"
          title="A short look at how lessons work"
          description="An example of the interactive, one-to-one teaching style used in every session."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative aspect-video overflow-hidden rounded-card border border-paper-line bg-ink">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${demoVideoEmbedId}?autoplay=1&rel=0`}
                title="Demo mathematics lesson"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 flex h-full w-full items-center justify-center"
                aria-label="Play demo lesson video"
              >
                <img
                  src={`https://img.youtube.com/vi/${demoVideoEmbedId}/hqdefault.jpg`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                />
                <span className="absolute inset-0 bg-ink/35 transition-colors group-hover:bg-ink/25" aria-hidden="true" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform group-hover:scale-105 sm:h-20 sm:w-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7Z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
