import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { TrustStrip } from "./components/sections/TrustStrip";
import { Lessons } from "./components/sections/Lessons";
import { Curricula } from "./components/sections/Curricula";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { HowItWorks } from "./components/sections/HowItWorks";
import { DemoLesson } from "./components/sections/DemoLesson";
import { BookingSection } from "./components/sections/BookingSection";
import { FAQ } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/sections/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <TrustStrip />
        <Lessons />
        <Curricula />
        <About />
        <Experience />
        <HowItWorks />
        <DemoLesson />
        <BookingSection />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
