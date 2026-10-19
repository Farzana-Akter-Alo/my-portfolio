export const personalInfo = {
  name: "Farzana ",
  shortName: "Alo",
  designation: "Aspiring Full Stack Developer",
  location: "Bangladesh",
  email: "mstfarzana161@gmail.com",
  phone: "+8801619473543",
  whatsapp: "8801619473543",
  github: "https://github.com/Farzana-Akter-Alo",
  linkedin:
    "https://www.linkedin.com/in/farzana-akter-alo?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  resume: "/resume.pdf",
  photo: "/profile.jpg",

  intro:
    "I build responsive, user-friendly web experiences and enjoy learning modern web technologies.",

  about:
    "I am an aspiring developer who enjoys turning ideas into useful digital products. I am learning frontend and backend development by practicing consistently and building projects.",

  journey:
    "My programming journey began with learning the fundamentals of the web. I have been exploring JavaScript, React, Next.js, APIs, and databases to understand how complete web applications work.",

  interests: [
    "Web Development",
    "Problem Solving",
    "Learning New Technologies",
    "Building Useful Projects",
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 65 },
      { name: "React", level: 60 },
      { name: "Next.js", level: 55 },
      { name: "Tailwind CSS", level: 70 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 45 },
      { name: "REST APIs", level: 45 },
      { name: "MongoDB", level: 40 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 60 },
      { name: "GitHub", level: 65 },
      { name: "VS Code", level: 80 },
    ],
  },
];

export const education = [
  {
    degree: "Diploma in Engineering - Computer Science and Technology (CST)",
    institution: "Borak Polytechnic Institute",
    period: "2023 - 2026",
    details:
      "Currently pursuing a Diploma in Engineering in Computer Science and Technology (CST), focusing on computer fundamentals, programming, and software development.",
  },
];

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

// Add real work, internship, or freelance experience here.
export const experience: ExperienceItem[] = [];

export const projects = [
  {
    slug: "task-management-app",
    name: "Task Management App",
    category: "Full Stack",
    image: "/projects/project-1.jpg",
    description:
      "A task management application for organizing tasks and tracking progress.",
    details:
      "The goal of this project is to help users organize tasks, manage priorities, and track their work through a simple interface.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    liveUrl: "",
    githubUrl: "https://github.com/your-username/task-management-app",
    challenges: [
      "Designing an intuitive and responsive interface.",
      "Organizing task data and application state.",
    ],
    improvements: [
      "Add authentication and user-specific tasks.",
      "Add deadlines, filters, and notifications.",
      "Improve automated testing and accessibility.",
    ],
  },
  {
    slug: "authentication-app",
    name: "Authentication App",
    category: "Full Stack",
    image: "/projects/project-2.jpg",
    description:
      "A sample application demonstrating user registration and login flows.",
    details:
      "This project explores form validation, authentication workflows, session handling, and protected user experiences.",
    technologies: ["Next.js", "TypeScript", "Better Auth", "MongoDB"],
    liveUrl: "",
    githubUrl: "https://github.com/your-username/authentication-app",
    challenges: [
      "Handling form errors and loading states.",
      "Understanding sessions and protected routes.",
    ],
    improvements: [
      "Add email verification.",
      "Add password reset functionality.",
      "Improve error handling and automated tests.",
    ],
  },
  {
    slug: "personal-dashboard",
    name: "Personal Dashboard",
    category: "Frontend",
    image: "/projects/project-3.jpg",
    description:
      "A responsive dashboard for presenting useful information in one place.",
    details:
      "This project focuses on reusable components, responsive layouts, and clear presentation of information.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/your-username/personal-dashboard",
    challenges: [
      "Maintaining a consistent layout across screen sizes.",
      "Organizing reusable interface components.",
    ],
    improvements: [
      "Connect a real data source.",
      "Add charts and filters.",
      "Add a dark theme.",
    ],
  },
];
