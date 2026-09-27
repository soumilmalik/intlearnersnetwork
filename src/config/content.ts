export const curricula = [
  "IB",
  "IGCSE",
  "GCSE",
  "AQA",
  "CBSE",
  "Common Core",
] as const;

export const examPrep = [
  "SAT",
  "PSAT",
  "STAAR Assessment",
  "Georgia Milestones",
  "NAPLAN",
  "Opportunity Class Placement",
  "Mathematics Olympiads",
] as const;

export const qualifications = [
  "BA (Hons) Mathematics",
  "B.Ed.",
  "MA Mathematics",
  "CTET qualified",
] as const;

export const lessonPillars = [
  {
    title: "Personalised One-to-One Tutoring",
    description:
      "Every session is planned around one student — their syllabus, their pace, and the topics they find hardest.",
  },
  {
    title: "Homework Guidance That Builds Understanding",
    description:
      "Support that walks through the reasoning behind each problem, so the student learns to solve similar questions independently.",
  },
  {
    title: "Curriculum-Aligned Learning",
    description:
      "Lessons follow the terminology, methods, and structure of the student's own school syllabus and exam board.",
  },
  {
    title: "Exam Preparation and Problem-Solving Strategies",
    description:
      "Focused practice on the question styles and reasoning skills that matter for a student's specific assessment.",
  },
  {
    title: "Interactive Online Sessions",
    description:
      "Lessons are conversational and visual, with the student working through problems alongside the tutor rather than watching a lecture.",
  },
  {
    title: "Paced to the Student's Confidence",
    description:
      "The pace adjusts to how quickly a student is ready to move — revisiting a topic for as long as it takes to feel secure.",
  },
] as const;

export const trackRecord = [
  { value: "17+", label: "Years of teaching experience" },
  { value: "1,000+", label: "Students mentored" },
] as const;

export const howItWorksSteps = [
  {
    title: "Book a Free 30-Minute Session",
    description: "Choose a time that works for your family using the booking section below.",
  },
  {
    title: "Discuss Goals and Challenges",
    description:
      "Talk through the student's curriculum, current level, and the areas that need the most attention.",
  },
  {
    title: "Begin a Personalised Learning Plan",
    description:
      "Start regular one-to-one lessons built around the student's syllabus, pace, and confidence.",
  },
] as const;

export const faqs = [
  {
    question: "Who are the lessons for?",
    answer:
      "School students who want focused, one-to-one support with mathematics — whether that's building confidence with core topics, keeping up with a fast-moving syllabus, or preparing for a specific exam.",
  },
  {
    question: "Which curricula do you support?",
    answer:
      "Lessons are adapted to IB, IGCSE, GCSE, AQA, CBSE, and Common Core Education Standards, along with preparation for SAT, PSAT, STAAR, Georgia Milestones, NAPLAN, Opportunity Class Placement, and Mathematics Olympiads.",
  },
  {
    question: "Do you help with homework?",
    answer:
      "Yes. Homework sessions focus on helping the student understand the method and reasoning behind each question, so they can work through similar problems on their own — not on completing the work for them.",
  },
  {
    question: "How are online lessons conducted?",
    answer:
      "Lessons are interactive and one-to-one, held over video call with shared visual working so the student and tutor can work through problems together in real time.",
  },
  {
    question: "What happens during the free session?",
    answer:
      "It's a relaxed introduction — a chance to meet the tutor, talk through the student's current curriculum and areas of difficulty, and see whether the lessons feel like the right fit before committing to anything further.",
  },
  {
    question: "Which time zones do you accommodate?",
    answer:
      "Kanika teaches students across the UK, US, Canada, and Australia. [CONFIRMED AVAILABILITY AND TIME ZONES to be added] — share your preferred time in the booking form and this will be confirmed during the free session.",
  },
] as const;
