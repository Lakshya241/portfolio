export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Highlight {
  label: string;
  value: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  about: {
    introduction: string;
    highlights: Highlight[];
  };
  projects: Project[];
  experience: Experience[];
  skills: SkillCategory[];
}
