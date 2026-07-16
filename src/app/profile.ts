import { CardProps } from "./components/Card";

type Profile = {
  experience: CardProps[];
  projects: CardProps[];
  skills: CardProps[];
  education: CardProps[];
};

const profile: Profile = {
  experience: [
    {
      title: "Software Engineer",
      subtitle: "LTK",
      subtitleLink: "https://www.shopltk.com/",
      details: [
        "Architected the frontend of LTK's Creator Management Platform — creator discovery with 30+ filter criteria, infinite-scroll feeds, and a home dashboard. Unveiled at LTKCon 2025; since driving $11.75M in accepted offer value from 159K+ offers, 1,182 brands, and 11,094 creators.",
        "Lead engineer on the company's React component library: designed the primitive/semantic/component token architecture and the Figma-to-Tailwind v4 token pipeline.",
        "One of two frontend engineers company-wide on LTK's Product Link Extension; built the entire UI plus an LLM-assisted visual-validation harness. Now ~500K scrapes/week across Amazon, Walmart, and Revolve.",
      ],
      location: "Remote",
      duration: "Mar 2025 - Present",
    },
    {
      title: "Software Engineer",
      subtitle: "Expert Institute",
      subtitleLink: "https://www.expertinstitute.com/",
      details: [
        "Designed the backend of a two-sided attorney–expert-witness marketplace: PostgreSQL schema plus NestJS repository, domain, and API layers powering expense tracking, activity logging, agreement signing, and payments.",
        "Built the Salesforce integration syncing opportunity and subscription data into the platform database, and implemented role-based access control with NestJS guards and Redis caching to gate features by subscription tier.",
        "Improved the agile process with the product team, cutting sprint rollover 50% and clarifying estimation and deadlines.",
      ],
      location: "Remote",
      duration: "Aug 2023 - Mar 2025",
    },
    {
      title: "Software Engineer",
      subtitle: "SquareTrade, Inc.",
      subtitleLink: "https://www.squaretrade.com/",
      details: [
        "Led a globally distributed scrum team architecting a configurable white-label branding system for claim filing by shoppers redirected from Walmart, Home Depot, Target, and other partner storefronts.",
        "Built the app's Angular localization pipe, delivering Lokalise translations with locale-aware date and number formatting.",
        "Mentored junior engineers on technical and leadership skills, guiding them to promotion.",
      ],
      location: "Remote",
      duration: "Feb 2022 - Aug 2023",
    },
    {
      title: "Fullstack Software Engineer",
      subtitle: "GreenLight IoT",
      subtitleLink: "https://www.greenlightiot.com/",
      details: [
        "Led end-to-end design and implementation of IoT building management dashboards using Angular, NgRx, NestJS, MongoDB, and Google Maps API.",
        "Optimized app startup load time by 90% via route-level lazy loading and NgRx state caching.",
        "Standardized coding practices (style guide, Prettier, ESLint) and introduced Figma into the SDLC for a design-first approach.",
      ],
      location: "Tampa, FL (Hybrid)",
      duration: "Sep 2020 - Feb 2022",
    },
  ],
  projects: [
    {
      title: "ZUI",
      subtitle: "GitHub",
      subtitleLink: "https://github.com/zabibabar/zui",
      details: [
        "A framework-agnostic design system monorepo, built architecture-first and in active development.",
        "Three-tier token architecture (primitive, semantic, component) with dynamic OKLCH theming.",
      ],
    },
    {
      title: "react-router-typed-actions",
      subtitle: "npm",
      subtitleLink: "https://www.npmjs.com/package/react-router-typed-actions",
      details: [
        "An npm package providing type-safe, serializable actions for React Router.",
        "Generalized from React Router typing and client-action patterns I established at LTK.",
        "Source on GitHub: github.com/zabibabar/react-router-typed-actions.",
      ],
    },
    {
      title: "Tampa Volunteers",
      subtitle: "Link",
      subtitleLink: "https://tampavolunteers.com/",
      details: [
        "Website for Tampa Volunteers, the 300+ member Meetup community I founded, connecting volunteers with nonprofits across Tampa.",
        "I used React, Next.js, and Material UI for this project.",
        "Deployed with GitHub Actions and GitHub Pages.",
      ],
    },
  ],
  skills: [
    {
      title: "Frontend",
      details: [
        "TypeScript",
        "JavaScript",
        "React",
        "React Router",
        "Redux",
        "Angular",
        "NgRx",
        "Vue",
        "Tailwind",
        "Shadcn",
        "HTML/CSS",
      ],
    },
    {
      title: "Backend",
      details: ["Node.js", "NestJS", "Redis", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Testing",
      details: ["E2E (Playwright/Cypress)", "TDD"],
    },
    {
      title: "DevOps",
      details: ["AWS (EC2, S3, Lambda, SSM)", "Serverless"],
    },
    {
      title: "AI Tooling",
      details: [
        "Cursor agent skills",
        "Custom SDLC pipeline automation",
        "MCP integrations (Atlassian, Glean, Figma)",
      ],
    },
  ],
  education: [
    {
      title: "University of South Florida",
      details: [
        "B.S. Computer Science",
        "Minor: Mathematics",
        "Honors College",
        "Summa Cum Laude",
        "GPA: 3.94/4.00",
      ],
      location: "Tampa, Florida",
      duration: "2016 - 2019",
    },
  ],
};

export default profile;
