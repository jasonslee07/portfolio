export const RESUME_PATH = `${import.meta.env.BASE_URL}Jason_Lee_resume.pdf`

export const profile = {
  name: "Jason Lee",
  initials: "JL",
  role: "Software Engineer",
  location: "College Park, MD",
  email: "jasonlee131045@gmail.com",
  phone: "(240) 302-0842",
  links: {
    github: "https://github.com/jasonslee07",
    githubLabel: "github.com/jasonslee07",
    linkedin: "https://www.linkedin.com/in/lee-s-jason",
    linkedinLabel: "linkedin.com/in/lee-s-jason",
  },

  // can add this back if I want. Located in Hero.tsx
  // availability: "Open to Fall 2026, Spring 2027, and Summer 2027 software engineering internships",
}

export const hero = {
  eyebrow: "CS + Math @ UMD",
  headline: "Hi, my name is Jason!",
  subhead: 
  "I'm a computer science student at the University of Maryland, and I like using my passion for coding to make the world a better place :D",
}

export type Experience = {
  company: string
  role: string
  location: string
  period: string
  current?: boolean
  stack: string[]
  points: string[]
}

export const experience: Experience[] = [
  {
    company: "American Operator",
    role: "Software Engineer Intern",
    location: "Austin, TX",
    period: "Jun 2026 — Present",
    current: true,
    stack: ["React", "Neon Postgres", "Vercel", "BigQuery", "Inngest"],
    points: [
      "Deployed a full-stack TypeScript KPI dashboard (React, Postgres) with role-based access control and dynamic, per-company KPIs",
      "Shipped Inngest pipelines syncing BigQuery metrics to a live dashboard and weekly KPI emails to leadership, replacing manual reporting",
      "Automated accounts payable with an AI pipeline that reads invoice PDFs, matches costs to jobs, and files 70+ Knowify bills every month"
    ],
  },
  {
    company: "Easy Dynamics",
    role: "Software Engineer Intern",
    location: "McLean, VA",
    period: "Jan 2026",
    stack: ["OAuth 2.0 (3LO)", "Azure Blob", "Copilot Studio", "Power Automate", "Jira Service Management"],
    points: [
      "Designed and built an IT service desk agent in Copilot Studio, trained on SharePoint libraries, to resolve common employee IT questions",
      "Created Power Automate flows and OAuth 2.0 (3LO) custom connectors to implement automated ticket creation to Jira’s API",
      "Developed an Azure Blob to store Jira tickets, used PowerShell scripting to automate uploading ticket JSON contents and attachments",
      "Achieved a 27% automated resolution rate and reduced average response time from 24 hours to under 10 seconds"
    ],
  },
  {
    company: "First-Year Innovation & Research Experience",
    role: "Quantum ML Undergraduate Researcher",
    location: "College Park, MD",
    period: "Aug 2025 — Present",
    current: true,
    stack: ["Python", "Google Colab", "Wasserstein QGAN", "FRQI Encoding", "MNIST"],
    points: [
      "Researched quantum Wasserstein GANs for high-resolution image generation, evaluating FRQI image encoding across MNIST data",
      "Diagnosed a CPU-bound bottleneck in the quantum GAN pipeline (JAX) and cut image-generation time from 30 to 2 hours via GPU"
    ],
  },
  {
    company: "Panda Programmer",
    role: "Computer Science Instructor",
    location: "Gaithersburg, MD",
    period: "May 2024 — Aug 2024",
    stack: ["Teaching", "Python", "JavaScript", "HTML", "CSS"],
    points: [
      "Mentored 50+ K-8 students in Scratch, Python, JavaScript, HTML, CSS, and robotics through hands-on programming projects",
      "Presented lessons on data structures, control flow, event-driven processing, serial and parallel execution, and animation"

    ],
  },
  // {
  //   company: "Hack4Impact",
  //   role: "Software Engineer",
  //   location: "College Park, MD",
  //   period: "Starting Aug 2026",
  //   stack: [],
  //   points: [],
  // },
  {
    company: "Google",
    role: "Student Ambassador",
    location: "College Park, MD",
    period: "Starting Aug 2026",
    stack: [],
    points: [],
  },
  {
    company: "UMD Department of Computer Science",
    role: "Course Facilitator for \"The Coding Interview\"",
    location: "College Park, MD",
    period: "Starting Aug 2026",
    stack: [],
    points: [],
  },
]

export type Project = {
  name: string
  domain: string
  blurb: string
  stack: string[]
  caseStudy: {
    problem: string
    approach: string
    result: string
  }
  href?: string
}

export const projects: Project[] = [
  {
    name: "Redress | 2nd Place Winner, Patriot Games 250 Hackathon",
    domain: "Agentic civic tech",
    blurb:
      "A full-stack app where an AI agent helps citizens file complaints and pushes government agencies to actually respond.",
    stack: ["TypeScript", "React", "Agent Architecture", "AgentMail", "Linq"],
    caseStudy: {
      problem:
        "Filing a complaint with the right government office is confusing, and even when it lands, agencies stall and cases quietly die with no follow-up.",
      approach:
        "Built a full-stack React + TypeScript app around an AI agent that routes each case to the appropriate city office and emails the agency through AgentMail, escalating automatically when one stalls. A human approval step gates every outbound message before it sends, and Linq pushes real-time text updates to citizens on every case.",
      result:
        "Citizens file once and the agent handles routing, outreach, and escalation on their behalf — with a person approving anything that goes out and text updates keeping them in the loop the whole way.",
    },
  },
  {
    name: "Sell4Impact",
    domain: "Real-time marketplace",
    blurb:
      "A dorm marketplace with separate client and vendor experiences, real-time inventory, and live search.",
    stack: ["TypeScript", "React", "Tailwind CSS", "Firebase Auth", "Firestore"],
    caseStudy: {
      problem:
        "Students buying and selling within a dorm had no shared place to list inventory, and needed sellers and buyers to see the same stock update the moment it changed.",
      approach:
        "Built a React + TypeScript app with distinct Client and Vendor roles, each with its own dashboard. Firestore drives real-time data sync, Firebase Auth handles accounts, and Firebase Storage manages secure image uploads. Added an active cart and live search filtering on top.",
      result:
        "Vendors manage dynamic inventory, track orders, and edit profiles while buyers browse a catalog that updates instantly — no refresh, no stale listings.",
    },
  },
  {
    name: "Gotcha!",
    domain: "Computer vision",
    blurb:
      "A real-time shoplifting-detection app that watches video, flags suspicious behavior, and places an emergency call.",
    stack: ["TypeScript", "React", "Flask", "Twilio", "Gemini"],
    caseStudy: {
      problem:
        "Open-air spots like farmers markets run on trust — stalls are unattended, crowds are dense, and a vendor busy with one customer can't watch someone pocket goods at the next table over.",
      approach:
        "Built a real-time detection app with React (TypeScript), Flask, and a Roboflow vision model to analyze the video feed and flag suspicious behavior. A sliding-window heuristic over consecutive frames holds a flag only when behavior persists, cutting the false positives a naïve frame-by-frame detector would fire on. When a flag holds, a synchronized API pipeline — Gemini for a description, ElevenLabs for voice, Twilio for the call, glued together through ngrok — places an automated, descriptive emergency phone call.",
      result:
        "Suppressed single-frame false alarms while still catching sustained theft in real time, then escalated automatically with a human-sounding call describing what it saw.",
    },
  },
]

export const skills = {
  groups: [
    {
      label: "Languages",
      primary: ["Python", "Java", "TypeScript"],
      familiar: ["JavaScript", "SQL", "C++", "C", "HTML", "CSS", "Rust", "Assembly", "OCaml", "MATLAB"],
    },
  ],
  web: ["React", "Node.js", "Flask", "Tailwind CSS", "Zod", "Drizzle"],
  tools: [
    "Git", 
    "GitHub", 
    "GitLab",
    "Linux", 
    "VSCode", 
    "Claude Code", 
    "Jira", 
    "Neon", 
    "Firebase", 
    "Vercel", 
    "BigQuery", 
    "Inngest", 
    "Ngrok", 
    "Twilio", 
    "Zapier", 
    "Figma", 
    "Power Automate", 
    "Eclipse", 
    "Copilot Studio", 
    "ElevenLabs", 
    "AgentEmail", 
    "Linq"
  ],
}

export const education = {
  school: "University of Maryland",
  location: "College Park, MD",
  degree: "B.S. Computer Science",
  minor: "Minor in Mathematics",
  grad: "Expected May 2028",
  gpa: "3.97 / 4.00",
  coursework: [
    "Algorithms",
    "Advanced Data Structures",
    "Computer Systems (C & Assembly)",
    "Cloud Computing with AWS",
    "Object-Oriented Programming I & II (Java)",
    "Organization of Programming Languages (OCaml & Rust)",
    "Discrete Structures",
    "Linear Algebra",
    "Multivariable Calculus"
  ],
}

export type LeadershipRole = {
  org: string
  role: string
  period: string
  points: string[]
}

export const leadership: LeadershipRole[] = [
  {
    org: "Scouting America",
    role: "Eagle Scout & Troop President",
    period: "May 2015 — Aug 2025",
    points: [
      "Led 70+ Scouts, administered monthly campouts (200+ attendees), and organized week-long summer camps (1,000+ attendees)",
      "Mentored 30+ Scout leadership team, organized annual food drives (60,000+ lbs), and recruited in Scouting’s national honor society"
    ],
  },
  {
    org: "Kids are Scientists Too",
    role: "Instructor & Treasurer",
    period: "Sep 2022 — May 2025",
    points: [
      "Instructed 60+ 4th-5th graders through 30+ science experiments, mentored 100+ club members as teachers, and organized curricula",
      "Managed weekly finances and payments, created and presented lessons, and coordinated time logistics and transportation"
    ],
  },
]

export const meta = {
  title: "Jason Lee — Software Engineer",
  description:
    "Jason Lee is a computer-science student at the University of Maryland and a software engineer who builds full-stack products, LLM agents, and researches quantum ML.",
}
