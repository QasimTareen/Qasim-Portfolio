import { ExperienceItem } from '../types/index';

export const experiences: ExperienceItem[] = [
  { 
    id: 'mlsa',
    title: "Vice President", 
    company: "MLSA CUI Lahore", 
    logo: "https://drive.google.com/thumbnail?id=1w52N0Gac6qejwLyaEB7sVuRvhp2XZkiM&sz=w1000", 
    period: "2026 - Present", 
    desc: "Empowering the next generation of software innovators.",
    longDesc: "As the Vice President of the Microsoft Learn Student Ambassadors chapter at CUI Lahore, I lead a community of over 500+ student developers. My focus is on bridging the gap between academic theory and industry practice by hosting workshops on Azure, AI, and Cloud Computing.",
    items: ["Chapter Leadership & Strategy", "Global Community Management", "Azure Workshop Lead"],
    tech: ["Azure", "GitHub", "Cloud", "Community Ops"],
    color: "blue",
    link: "https://www.instagram.com/mlsa.cui.lahore/"
  },
  { 
    id: 'looplab',
    title: "Tech Director", 
    company: "LoopLab.com", 
    logo: "https://drive.google.com/thumbnail?id=1jEx9KQHEs5C_1SoBXb8FrK6aosvRbEcb&sz=w1000",
    period: "2025 - Present", 
    desc: "Strategic guidance for high-performance development.",
    longDesc: "At LoopLab, I oversee the technical direction of internal and client projects. I am responsible for selecting the tech stack, conducting code reviews, and ensuring that our solutions are scalable and robust enough for enterprise-level use cases.",
    items: ["Technology Strategy Oversight", "Innovation Management", "Full-Stack Architecture"],
    tech: ["React", "Node.js", "Docker", "AWS"],
    color: "purple",
    link: "https://www.loopdevelopers.com/"
  },
  { 
    id: 'gdgoc',
    title: "Research Lead", 
    company: "GDGoC | CUI Lahore", 
    logo: "https://drive.google.com/thumbnail?id=16nCcR7XsGYTjTq9qmiY0KM4HEOFNTQGu&sz=w1000",
    period: "2025 - Present", 
    desc: "Driving technical exploration and mentorship.",
    longDesc: "Leading the research initiatives at Google Developer Groups on Campus (GDGoC). I coordinate with student leads to explore emerging technologies like LLMs, Web3, and edge computing, producing technical whitepapers and guidebooks for the student body.",
    items: ["Tech Research Direction", "Developer Mentorship", "Open Source Advocacy"],
    tech: ["Python", "TensorFlow", "Web3", "Go"],
    color: "google",
    link: "https://gdgoc-cui-lahore.vercel.app/"
  }
];