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
    title: "Personalised one-to-one tutoring",
    description:
      "Every session is planned around one student — their syllabus, their pace, and the topics they find hardest.",
  },
  {
    title: "Homework guidance that builds understanding",
    description:
      "Support that walks through the reasoning behind each problem, so the student learns to solve similar questions independently.",
  },
  {
    title: "Curriculum-aligned learning",
    description:
      "Lessons follow the terminology, methods, and structure of the student's own school syllabus and exam board.",
  },
  {
    title: "Exam preparation and problem-solving strategies",
    description:
      "Focused practice on the question styles and reasoning skills that matter for a student's specific assessment.",
  },
  {
    title: "Interactive online sessions",
    description:
      "Lessons are conversational and visual, with the student working through problems alongside the tutor rather than watching a lecture.",
  },
  {
    title: "Paced to the student's confidence",
    description:
      "The pace adjusts to how quickly a student is ready to move — revisiting a topic for as long as it takes to feel secure.",
  },
] as const;

export type ExperienceRole = {
  institution: string;
  role: string;
  detail?: string;
  period: string;
  ongoing?: boolean;
};

export const schoolExperience: ExperienceRole[] = [
  {
    institution: "St. Mark's Senior Secondary School, Janakpuri, Delhi",
    role: "TGT Mathematics — Classes 8 and 9",
    period: "Jul 2010 – Mar 2011",
  },
  {
    institution: "Sachdeva Public School, Rohini, Delhi",
    role: "TGT Mathematics — Classes 6–9",
    detail: "Subject Coordinator, Grades 7 and 8",
    period: "Apr 2011 – Mar 2013",
  },
  {
    institution: "Presidium School, Ashok Vihar, Delhi",
    role: "TGT Mathematics — Classes 6–8",
    detail: "Subject Coordinator, Grade 6",
    period: "Mar 2013 – Dec 2015",
  },
  {
    institution: "Presidium School, Indirapuram, Ghaziabad",
    role: "TGT Mathematics — Classes 7, 9 and 10",
    detail: "Subject Coordinator, Grade 10",
    period: "Jul 2016 – Mar 2019",
  },
];

export const onlineExperience: ExperienceRole[] = [
  {
    institution: "WhiteHat Jr",
    role: "Teacher of Mathematics and Coding",
    period: "Jul 2020 – Sep 2022",
  },
  {
    institution: "Edvi",
    role: "Academic Coordinator and Mathematics Tutor",
    period: "Jul 2022 – Apr 2023",
  },
];

/**
 * Roles described in source material as ongoing/"till date" without a
 * confirmed end date. Presented as experience rather than current
 * employment per client instruction — do not add "current" language here.
 */
export const tutoringPlatforms: string[] = [
  "Brillianceway (GCSE Mathematics)",
  "Knowledge Hub",
  "Kiya Learning",
  "Lesson Board",
  "Dharma Learning",
];

export const howItWorksSteps = [
  {
    title: "Book a free 30-minute session",
    description: "Choose a time that works for your family using the booking section below.",
  },
  {
    title: "Discuss goals and challenges",
    description:
      "Talk through the student's curriculum, current level, and the areas that need the most attention.",
  },
  {
    title: "Begin a personalised learning plan",
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
