export const RESUME_PATH = "/Jason_Lee_resume.pdf"

export const profile = {
  name: "Jason Lee",
  initials: "JL",
  role: "Software Engineer",
  location: "College Park, MD",
  email: "jasonlee131045@gmail.com",
  phone: "240-302-0842",
  links: {
    github: "https://github.com/jasonslee07",
    githubLabel: "github.com/jasonslee07",
    linkedin: "https://www.linkedin.com/in/lee-s-jason",
    linkedinLabel: "linkedin.com/in/lee-s-jason",
  },

  availability: "Open to Summer 2027 software engineering internships",
}

export const hero = {
  eyebrow: "Software Engineer · CS + Math @ Maryland",
  headline: "Hi, my name is Jason!",
  subhead: "I'm a computer science student at the University of Maryland who likes to use software to make the world a better place",
}


export const about = {

  paragraphs: [
    "I’m a CS student at the University of Maryland (3.97 GPA, minor in math) who likes being close to the work — designing the data model, wiring the API, and sweating the last 10% that makes something feel finished.",
    "So far that’s meant building a typed full-stack KPI dashboard and LLM agents at a startup, automating an IT service desk down from a 24-hour response to under ten seconds, and researching quantum machine learning on the side.",
    "Outside the editor I spent a decade in Scouting (Eagle Scout, troop president) and taught kids to code — both of which taught me more about shipping under pressure than any lecture did.",
  ],

  pullQuote: "The best code I’ve written is the code someone actually used the next morning.",
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
    stack: ["TypeScript", "React", "Neon Postgres", "Drizzle ORM", "Zod", "Serverless", "LLM agents"],
    points: [
      "Built a modular LLM agent integrating 5+ APIs (HubSpot, calendar, web, call transcripts) to auto-generate research briefs and tear sheets.",
      "Built a full-stack TypeScript KPI dashboard (React, serverless API, Postgres) that replaced a manual weekly spreadsheet for portfolio operations.",
      "Wrote typed serverless APIs (Drizzle ORM, Neon Postgres, Zod) computing trailing averages, goal variance, and week-over-week change.",
    ],
  },
  {
    company: "Easy Dynamics",
    role: "Software Engineer Intern",
    location: "McLean, VA",
    period: "Jan 2026",
    stack: ["Copilot Studio", "Power Automate", "OAuth 2.0 (3LO)", "Jira API", "Azure Blob", "PowerShell"],
    points: [
      "Designed and built an IT service-desk agent in Copilot Studio, trained on SharePoint libraries, to resolve common employee IT questions.",
      "Created Power Automate flows and OAuth 2.0 (3LO) custom connectors to automate ticket creation against Jira’s API.",
      "Stood up Azure Blob storage for Jira tickets and scripted PowerShell to automate uploading ticket JSON and attachments.",
      "Reached a 27% automated resolution rate and cut average response time from 24 hours to under 10 seconds.",
    ],
  },
  {
    company: "First-Year Innovation & Research Experience",
    role: "Quantum ML Undergraduate Researcher",
    location: "College Park, MD",
    period: "Aug 2025 — Present",
    current: true,
    stack: ["Quantum ML", "Wasserstein GANs", "FRQI", "Python", "State-vector simulation"],
    points: [
      "Researched quantum Wasserstein GANs for high-resolution image generation, evaluating FRQI states and task-specific inductive biases.",
      "Used the ImageQGANS codebase to replicate published results, cross-referencing state-vector simulations against generated figures.",
    ],
  },
  {
    company: "Panda Programmer",
    role: "Computer Science Instructor",
    location: "Gaithersburg, MD",
    period: "May 2024 — Aug 2024",
    stack: ["Python", "JavaScript", "Scratch", "Robotics"],
    points: [
      "Mentored 50+ K–8 students in Scratch, Python, JavaScript, HTML/CSS, and robotics through hands-on projects.",
      "Taught lessons on data structures, control flow, event-driven processing, serial vs. parallel execution, and animation.",
    ],
  },
  {
    company: "UMD Department of Computer Science",
    role: "Course Facilitator for the Coding Interview",
    location: "College Park, MD",
    period: "Starting August 2026",
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
    name: "Sell4Impact",
    domain: "Real-time marketplace",
    blurb:
      "A dorm marketplace with separate client and vendor experiences, real-time inventory, and live search.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Firebase Auth", "Firestore", "Firebase Storage"],
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
    stack: ["React", "TypeScript", "Flask", "Roboflow", "Gemini", "ElevenLabs", "Twilio", "ngrok"],
    caseStudy: {
      problem:
        "A naïve frame-by-frame detector fires on every twitch — far too many false alarms to ever trust with a real alert.",
      approach:
        "Paired a Roboflow vision model with a sliding-window heuristic over consecutive frames so a flag only holds when behavior persists. When it does, a synchronized pipeline — Gemini for a description, ElevenLabs for voice, Twilio for the call, glued together through ngrok — places an automated, descriptive emergency phone call.",
      result:
        "Suppressed single-frame false positives while still catching sustained suspicious behavior in real time, then escalated automatically with a human-sounding call.",
    },
  },
  {
    name: "Chat Messenger",
    domain: "Networking & concurrency",
    blurb:
      "A multi-user chat application built on raw GUI and network-programming fundamentals.",
    stack: ["Java", "Sockets", "Multithreading", "GUI"],
    caseStudy: {
      problem:
        "A chat server has to accept new connections and broadcast messages at the same time — block on one and the whole thing stalls.",
      approach:
        "Built a client/server app from networking and GUI primitives, then used multithreading so the server listens for new connections on one thread while broadcasting messages to every client on others.",
      result:
        "Multiple clients hold a live conversation in real time, with the server handling joins and message fan-out concurrently.",
    },
  },
]

export const skills = {
  groups: [
    {
      label: "Languages",
      primary: ["Python", "Java", "C"],
      familiar: ["C++", "SQL", "JavaScript", "TypeScript", "HTML", "CSS", "MATLAB", "Rust", "OCaml", "Assembly"],
    },
  ],
  web: ["React", "Node.js", "Tailwind CSS", "Flask"],
  tools: [
    "Git",
    "GitHub",
    "Linux",
    "VS Code",
    "Firebase",
    "Jira",
    "Figma",
    "Power Automate",
    "Copilot Studio",
    "Twilio",
    "ngrok",
    "Claude",
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
    "Object-Oriented Programming I & II (Java)",
    "Advanced Data Structures",
    "Design and Analysis of Computer Algorithms",
    "Algorithms",
    "Computer Systems (C & Assembly)",
    "Organization of Programming Languages (OCaml & Rust)",
    "Discrete Structures",
    "Linear Algebra",
    "Multivariable Calculus",
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
      "Led 70+ Scouts, ran monthly campouts (200+ attendees), and organized week-long summer camps (1,000+ attendees).",
      "Mentored a 30+ person leadership team, ran annual food drives collecting 60,000+ lbs, and recruited for Scouting’s national honor society.",
    ],
  },
  {
    org: "Kids are Scientists Too",
    role: "Instructor & Treasurer",
    period: "Sep 2022 — May 2025",
    points: [
      "Taught 60+ 4th–5th graders through 30+ science experiments and mentored 100+ club members as teachers.",
      "Managed weekly finances, built and presented curricula, and coordinated logistics and transportation.",
    ],
  },
]

export const meta = {
  title: "Jason Lee — Software Engineer",
  description:
    "Jason Lee is a computer-science student at the University of Maryland and a software engineer who builds full-stack products, LLM agents, and researches quantum ML.",
}
