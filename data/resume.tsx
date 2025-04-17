import { Globe2Icon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Prince Ekpinse",
  age: 19,
  initials: "PE",
  url: "https://conorq.com",
  location: "Cotonou, Republic of Benin",
  title: "Front-end Developer @Freelance",
  about: [
    "I'm a Front-End Developer passionate about building intuitive, responsive, and creative web experiences. With a strong foundation in React, Next.js, and Tailwind CSS, I specialize in translating ideas into clean, functional interfaces that elevate user engagement and bring digital products to life.",
    
    "Whether working on personal SaaS projects like LinkVibe, H-Calendar or contributing to tech-for-good initiatives, I thrive at the intersection of design and code. I also explore API integrations, real-time analytics, and user-first experiences to push the limits of what front-end can do.",
    
    "Beyond development, I'm an active voice in the African tech community on LinkedIn, sharing my journey, building in public, and inspiring others to create with purpose. I'm always open to exciting freelance opportunities and innovative collaborations."
  ],
  locationLink: "https://www.google.com/maps/place/boulder",
  description: "Security Engineer | Cloud Infrastructure Security | Secure Software Development",
  summary: "Security engineer with expertise in developing secure full-stack applications, implementing zero-trust deployment pipelines, and automating security controls. Focused on proactive security design patterns for cloud infrastructure (AWS, GCP) and container technologies.",
  avatarUrl: "/me.png",
  skills: [
    "Cloud Security (AWS/GCP)",
    "CI/CD Security",
    "Docker Containerization",
    "Infrastructure as Code",
    "Zero-Trust Architecture",
    "Security Automation",
    "Terraform",
    "Ansible",
    "TypeScript/JavaScript",
    "Python",
    "Next.js/React",
    "FastAPI",
    "SQL/Database Security",
    "GitHub Actions",
    "Linux Administration",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "conorquinlan@cloud.com",
    tel: "+12064503502",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/prince-dev41",
        icon: HomeIcon,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prince-ekpinse-developpement-front-end/",
        icon: HomeIcon,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/EkpinsePrince",
        icon: HomeIcon,
        navbar: true,
      },
    },
  },
  coreCompetencies: [
    {
      area: "Application Security",
      skills: ["Secure SDLC implementation", "Dependency vulnerability management", "Authentication/authorization design", "API security", "Input validation"]
    },
    {
      area: "Infrastructure Security",
      skills: ["Container security", "Cloud security posture management", "IaC security scanning", "Network segmentation", "Encryption implementation"]
    },
    {
      area: "DevSecOps",
      skills: ["CI/CD pipeline security", "Secret management", "Automated security testing", "Compliance as code", "Security monitoring"]
    },
  ],
  work: [
    {
      company: "RAB TECH",
      href: "https://cyera.io",
      badges: ["Flutter", "Mobile"],
      location: "Cotonou, Atlantique, Bénin",
      title: "Flutter Developer Intern",
      logoUrl: "/ekpinse.webp",
      start: "July 2024",
      end: "August 2024",
      description:
        "As part of a 2-month academic internship, I contributed to the development of a Flutter-based mobile app while strengthening my skills in mobile architecture and state management.",
      highlights: [
        "Built and optimized responsive UI components using Flutter and Dart, ensuring consistent UX across Android and iOS",
        "Integrated Firebase for authentication and real-time data sync between users and the backend",
        "Collaborated in Agile sprints and contributed to bug fixing and feature development with Git and GitHub",
        "Implemented custom animations and UI transitions to enhance user engagement and navigation fluidity"
      ]
    },
    {
      company: "Freelance",
      href: "https://ekpinse-prince.vercel.app/",
      badges: ["Open Source", "Front-End", "Security"],
      location: "Remote / Cotonou, Bénin",
      title: "Front-End Developer & Contributor",
      logoUrl: "/ekpinse.webp",
      start: "June 2024",
      end: "Present",
      description:
        "Worked on several open source and freelance front-end projects, applying secure coding practices, design systems, and modern UI frameworks.",
      highlights: [
        "Developed responsive React components with TailwindCSS and Shadcn/UI for dynamic dashboards and SaaS interfaces",
        "Contributed to PearAI's open-source project: built secure integrations with Gemini, Anthropic APIs, and improved UI state management",
        "Set up GitHub Actions for CI/CD pipelines and cross-platform testing (Linux, MacOS, Windows)",
        "Reviewed PRs and helped maintain clean code structure and documentation on community repos"
      ]
    },
    {
      company: "Your Company ?",
      href: "#",
      badges: ["Internship", "Full-Stack", "Front-end"],
      location: "Remote / Hybrid / On-site",
      title: "Your Next Full-Stack Intern",
      logoUrl: "/ekpinse.webp",
      start: "June 2025",
      end: "August 2025",
      description:
        "Looking for a 2-month academic internship where I can apply my skills in React, Next.js, TypeScript, and cloud automation to solve real-world challenges.",
      highlights: [
        "Available from June 2025 for a challenging mission in web development or infrastructure automation",
        "Passionate about building secure, scalable apps using TypeScript, TailwindCSS, Framer Motion, and CI/CD",
        "Strong interest in cloud (AWS, GCP) and DevSecOps workflows, with hands-on experience on GitHub",
        "Eager to contribute to your team, learn fast, and bring creative energy to your product 🚀"
      ]
    }
  ],
  education: [
    {
      school: "HECM University",
      href: "https://du.edu",
      degree: "B.S. in Software and Computer Science;",
      logoUrl: "/logos/du.svg",
      start: "October 2023",
      end: "October 2026",
    },
  ],
  schoolpath: [
    {
      company: "HECM Calavi",
      href: "https://hecm.bj",
      badges: ["Licence 2", "Informatique", "Logiciels"],
      location: "Calavi, Bénin",
      title: "Licence 2 - Systèmes Informatiques et Logiciels",
      logoUrl: "/logo-hecm.webp",
      start: "Octobre 2023",
      end: "Présent",
      description:
        "Parcours universitaire axé sur le développement logiciel, les réseaux et la sécurité. Cette formation m’a permis d’explorer des domaines comme le front-end, les SaaS, et la cybersécurité.",
      highlights: [
        "Projets personnels en React.js, Next.js et TailwindCSS (ex: LinkVibe, Parcours)",
        "Initiation à la cybersécurité avec Google Cloud Shell et Kali Linux",
        "Développement de solutions SaaS orientées productivité, freelancing et éducation",
        "Création de contenu tech sur LinkedIn avec +3000 abonnés"
      ]
    },
    {
      company: "Collège d'Enseignement Géneral/Paouignan",
      href: "#",
      badges: ["BAC", "Série D"],
      location: "Cotonou, Bénin",
      title: "Baccalauréat Scientifique - Série D",
      logoUrl: "/ekpinse.webp",
      start: "Septembre 2020",
      end: "Juin 2023",
      description:
        "Formation rigoureuse en mathématiques, physique et SVT. C’est pendant cette période que j’ai découvert ma passion pour l'informatique et commencé à coder.",
      highlights: [
        "Obtention du BAC avec mention",
        "Lancement d’un site de révisions pour aider mes camarades",
        "Découverte du développement web et des bases en algorithmique",
        "Organisation d'ateliers tech et responsable du club de sciences"
      ]
    },
    {
      company: "Collège d'Enseignement Géneral/Paouignan",
      href: "#",
      badges: ["BEPC", "Générale"],
      location: "Abomey-Calavi, Bénin",
      title: "Brevet d'Études du Premier Cycle (BEPC)",
      logoUrl: "/ekpinse.webp",
      start: "Septembre 2016",
      end: "Juin 2020",
      description:
        "Cycle secondaire marqué par une orientation vers les sciences exactes et la logique mathématique. C’est aussi là que j’ai été initié à l’informatique scolaire.",
      highlights: [
        "Obtention du BEPC avec mention Assez Bien",
        "Participation aux olympiades régionales de mathématiques",
        "Premiers contacts avec les outils numériques et les clubs tech",
        "Développement d’un fort esprit d’analyse et de collaboration"
      ]
    },
    {
      company: "École Primaire Publique Domè Paouignan A",
      href: "#",
      badges: ["CEP", "Fondamentale"],
      location: "Tankpè, Abomey-Calavi, Bénin",
      title: "Certificat d'Études Primaires (CEP)",
      logoUrl: "/ekpinse.webp",
      start: "Septembre 2011",
      end: "Juin 2016",
      description:
        "Études primaires à Paouigna où j’ai acquis les compétences de base en français, mathématiques et culture générale, tout en développant ma discipline personnelle.",
      highlights: [
        "Obtention du CEP avec mention Bien",
        "Participation aux concours de calcul mental et dictée",
        "Bon niveau en expression écrite et orale",
        "Développement de l’esprit de rigueur et de curiosité"
      ]
    }
  ],
  projects: [
    {
      title: "Portfolio",
      href: "https://www.conorq.com",
      dates: "March 2025 - Present",
      active: true,
      description:
        "Developed a portfolio website to demonstrate my skills and system design capabilities.",
      technologies: [
        "NextJS",
        "TypeScript",
        "ShadCN",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://conorq.com",
          icon: <Globe2Icon className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/cqdev-co/portfolio",
          icon: HomeIcon,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Security - Specialty",
      issuer: "Amazon Web Services",
      date: "2024",
      logo: "/aws-security-cert.png"
    },
  ],
} as const;