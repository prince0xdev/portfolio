import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Globe2Icon, HomeIcon, NotebookIcon } from "lucide-react";
import { Icons } from "../components/icons";

export const DATA = {
  name: "Prince Ekpinse",
  age: 19,
  initials: "PE",
  url: "https://prince0xdev.vercel.app",
  location: "Cotonou, Republic of Benin",
  title: "Front-end Developer @Freelance",
  about: [
    "I'm Prince Ekpinse, a Junior Front-End Developer from Benin, passionate about crafting intuitive, responsive, and creative web experiences. With solid expertise in React.js, Next.js, and Tailwind CSS, I transform ideas into clean, interactive interfaces that engage users and bring digital products to life.",

    "I love building projects that combine functionality and design — from personal ventures like LinkVibe, H-Calendar, and my YouTube Thumbnail Generator, to exploring APIs, real-time analytics, and innovative front-end solutions. I thrive at the intersection of code, UX, and performance, always pushing the limits of what web interfaces can achieve.",

    "Beyond coding, I actively share my journey and insights in the African tech community on LinkedIn, building in public, inspiring young developers, and contributing to collaborative, tech-for-good initiatives. I'm open to freelance projects, partnerships, and opportunities where creativity meets code.",
  ],

  locationLink: "https://www.google.com/maps/place/boulder",
  description:
    "Security Engineer | Cloud Infrastructure Security | Secure Software Development",
  summary:
    "Security engineer with expertise in developing secure full-stack applications, implementing zero-trust deployment pipelines, and automating security controls. Focused on proactive security design patterns for cloud infrastructure (AWS, GCP) and container technologies.",
  avatarUrl: "/me.png",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "princeekinse97@gmail.com",
    tel: "+2290141322242",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/prince0xdev/",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prince-ekpinse/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/prince0xdev/",
        icon: Icons.x,
        navbar: true,
      },
      // Medium : {
      //   name: "Medium",
      //   url: "https://prince0xdev.medium.com/",
      //   icon: Icons.medium,
      //   navbar: true,
      // },
    },
  },
  work: [
    {
      company: "FeexPay",
      href: "https://feexpay.me/",
      badges: ["Web", "Mobile", "Frontend"],
      location: "Cotonou, Atlantique, Benin",
      title: "Web Developer Intern",
      logoUrl: "/logo-feexpay.png",
      start: "June 2025",
      end: "August 2025",
      description:
        "FeexPay is a leading Fintech company in West Africa, providing seamless electronic payment solutions across 5 countries.",
      highlights: [
        "Redesigned and optimized the FeexLink checkout page, significantly improving user experience and reducing checkout drop-offs.",
        "Maintained and upgraded FeexPay Flutter SDK (v1.0.10 → v1.0.12), enhancing stability and compatibility for 200+ developers.",
        "Actively participated in code reviews, identifying bugs early and improving production reliability.",
        "Collaborated with cross-functional teams to deliver robust, production-ready features under tight deadlines.",
      ],
    },
    {
      company: "PHITEC",
      href: "http://xedo.app/",
      badges: ["Front-End"],
      location: "Remote / Cotonou, Benin",
      title: "Front-End Developer",
      logoUrl: "/logo.jpg",
      start: "August 2024",
      end: "Present",
      description:
        "Contributing to the development of SaaS and mobile web applications, including landing pages, dashboards, and catalog apps using modern React and Next.js stack.",
      highlights: [
        "Built responsive, modular React components with TailwindCSS and Shadcn/UI for dynamic dashboards and SaaS interfaces.",
        "Implemented seamless API consumption from NestJS backends, ensuring real-time data flow and smooth UX.",
        "Managed deployment pipelines using Docker and GitHub Actions on VPS environments.",
        "Diagnosed and resolved production bugs, improving app stability and user satisfaction.",
      ],
    },
    {
      company: "RAB TECH",
      href: "https://rab-tech.com/",
      badges: ["Flutter", "Mobile"],
      location: "Cotonou, Atlantique, Benin",
      title: "Flutter Developer Intern",
      logoUrl: "/rab-tech.jpeg",
      start: "July 2024",
      end: "August 2024",
      description:
        "Completed a 1-month academic internship contributing to cross-platform mobile apps with Flutter, while learning professional development workflows.",
      highlights: [
        "Developed Flutter-based mobile app features, improving functionality and performance.",
        "Learned professional development workflows, version control, and team collaboration practices.",
        "Strengthened understanding of cross-platform architecture and state management.",
        "Collaborated with cross-functional teams to deliver features efficiently and maintain code quality.",
      ],
    },
  ],

  education: [
    {
      school: "HECM University",
      href: "https://hecm-afrique.net/",
      degree: "B.S. in Software and Computer Science;",
      logoUrl: "/logos/du.svg",
      start: "October 2023",
      end: "October 2026",
    },
  ],
  schoolpath: [
    {
      company: "HECM Calavi",
      href: "https://hecm-afrique.net/",
      badges: ["Bachelors's Degree 3", "Computer Science", "Software"],
      location: "Calavi, Bénin",
      title: "Bachelor's Degree 3 - Computer Systems and Software Engineering",
      logoUrl: "/logo-hecm.webp",
      start: "Octobre 2023",
      end: "Présent",
      description:
        "University course focused on software development with some basic networking. This training allowed me to explore areas such as front-end, SaaS, and cybersecurity.",
      highlights: [
        "Personal projects in React.js, Next.js, and TailwindCSS (e.g., LinkVibe, Parcours)",
        "Learning algorithms, data structures, and relational and NoSQL databases",
        "Participation in hackathons and web development workshops",
        "Creating tech content on LinkedIn with over 3,000 followers",
      ],
    },
    {
      company: "General Education College/Paouignan",
      href: "#",
      badges: ["BAC", "Série D"],
      location: "Cotonou, Bénin",
      title: "Scientific Baccalaureate - Series D",
      logoUrl: "/ekpinse.webp",
      start: "Septembre 2017",
      end: "Juin 2023",
      description:
        "Rigorous training in mathematics, physics and biology. It was during this period that I discovered my passion for computers science even though I knew nothing about coding.",
      highlights: [
        "Obtaining a high school diploma with honors (AB) in 2023",
        "Discovering web development and the basics of algorithms",
        "Participation in reading and dictation competitions as part of a school program",
      ],
    },
  ],
  projects: [
    {
      index: 1,
      title: "My Portfolio",
      href: "https://ekpinse-prince.vercel.app/blog",
      dates: "April 2025 - Present",
      active: true,
      description:
        "Developed a portfolio website to demonstrate my skills and projects. The site is built with Next.js, TypeScript, and ShadCN components for a modern, responsive design.",
      technologies: [
        "NextJS",
        "TypeScript",
        "ShadCN",
        "TailwindCSS",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://prince0xdev.vercel.app/blog",
          icon: <Globe2Icon className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prince0xdev/portfolio",
          icon: <GitHubLogoIcon className="" />,
        },
      ],
      image: "/portfolio.png",
    },
    {
      index: 2,
      title: "YouTube Thumbnail Generator",
      href: "https://yt-thumbnail-generator.netlify.app/",
      dates: "January 2025 - Present",
      active: true,
      description:
        "YouTube Thumbnail Generator is a simple tool that creates a YouTube card from a video URL.",
      technologies: ["NextJS", "TailwindCSS", "YouTube API v1"],
      links: [
        {
          type: "Website",
          href: "https://yt-thumbnail-generator.netlify.app/",
          icon: <Globe2Icon className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prince0xdev/youtube-thumbnail-generator",
          icon: <GitHubLogoIcon className="" />,
        },
      ],
      image: "/yt-thumbnail.png",
    },
    {
      index: 3,
      title: "H-Calendar",
      href: "https://hecm-calendar.netlify.app/",
      dates: "January 2025 - Present",
      active: true,
      description:
        "Managed to integrate a calendar application for HECM University, allowing students to view their schedules.",
      technologies: ["NextJS", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://hecm-calendar.netlify.app/login/",
          icon: <Globe2Icon className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prince0xdev/hecm-calendar/",
          icon: <GitHubLogoIcon className="" />,
        },
      ],
      image: "/h-calendar.png",
    },
    {
      index: 4,
      title: "Virtual-R Website",
      href: "https://virtual-r-by-prince-ekpinse.vercel.app/",
      dates: "December 2024 - Present",
      active: true,
      description: "A simple landing page for a virtual reality product",
      technologies: ["NextJS", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://virtual-r-by-prince-ekpinse.vercel.app/",
          icon: <Globe2Icon className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prince0xdev/VirtualR",
          icon: <GitHubLogoIcon className="" />,
        },
      ],
      image: "/virtualr-website.png",
    },
    {
      index: 5,
      title: "Tokena Financial App(Dashboard)",
      href: "https://figma2code-week3-ed2.vercel.app/",
      description:
        "I integrate a Tokena Financial (A Dashboard Only) App design on the 2nd edition of  #FigmaToCode",
      technologies: ["NextJS", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://figma2code-week3-ed2.vercel.app/",
          icon: <Globe2Icon className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prince0xdev/tokena-dashboard",
          icon: <GitHubLogoIcon className="" />,
        },
      ],
      image: "/tokena-figma2code-project.png",
    },
    {
      index: 6,
      title: "Ballamas Shop",
      href: "https://figma2-code-week2-ed2.vercel.app/",
      description:
        "I integrate an electronic shop named 'Ballamas's design on the 2nd edition of  #FigmaToCode",
      technologies: ["NextJS", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://figma2-code-week2-ed2.vercel.app/",
          icon: <Globe2Icon className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prince0xdev/ballamas",
          icon: <GitHubLogoIcon className="" />,
        },
      ],
      image: "/ballamas.png",
    },
    {
      index: 7,
      title: "NFT website",
      href: "https://figma-to-code-challeenge-week1-by-prince-ekpinse.vercel.app/",
      description: "NFT website developped on the 2nd edition of  #FigmaToCode",
      technologies: ["NextJS", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://figma-to-code-challeenge-week1-by-prince-ekpinse.vercel.app/",
          icon: <Globe2Icon className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prince0xdev/nft-website",
          icon: <GitHubLogoIcon className="" />,
        },
      ],
      image: "/nft-project.png",
    },

    {
      index: 8,
      title: "Code Sweep",
      href: "https://marketplace.visualstudio.com/items?itemName=prince0xdev.codesweep/",
      description:
        "CodeSweep is a lightweight, open-source VS Code extension that helps you **clean your code** by removing all comments and debug logs in one click.",
      technologies: ["TypeScript", "VSCODE EDiTOR API"],
      links: [
        {
          type: "Website",
          href: "https://marketplace.visualstudio.com/items?itemName=prince0xdev.codesweep/",
          icon: <Globe2Icon className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prince0xdev/codesweep/",
          icon: <GitHubLogoIcon className="" />,
        },
      ],
      image: "/codesweep-demo.png",
    },
  ],
  certifications: [
    {
      name: "https://api.badgr.io/public/assertions/CMAQhmGAQia_G2YNyMRdCg",
      issuer: "Postman",
      date: "April 2025",
      logo: "/aws-security-cert.png",
      verificationUrl:
        "https://www.credly.com/badges/12345678-1234-1234-1234-123456789012/public_url",
    },
    {
      name: "Musixmatch Graduate",
      issuer: "Musixmatch",
      date: "January 2025",
      logo: "/aws-security-cert.png",
      verificationUrl:
        "https://drive.google.com/file/d/1pUAwVKU9U9KCkTXVtVHMJqOw6El2YPXK/view?usp=sharing",
    },
  ],
} as const;
