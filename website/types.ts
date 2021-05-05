export interface GeneralInfo {
  name: string;
  email: string;
  phone: string;
  tagline: string;
  title: string;
  social: {
    name: string;
    link: string;
    icon: string;
  }[];
}

export interface ExperienceData {
  summary: string;
  jobs: JobData[];
}

export interface JobData {
  title: string;
  companyName: string;
  shortDescription: string;
  startDate: string;
  endDate: string;
  skills: {
    name: string;
    icon: string;
  }[];
}

export interface EducationData {
  summary: string;
  degrees: DegreeData[];
}

export interface DegreeData {
  name: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface ProjectsData {
  summary: string;
  projects: ProjectData[];
}

export interface ProjectData {
  name: string;
  description: string;
  github?: string;
  link?: string;
}

export interface SkillsData {
  items: SkillData[];
}

export interface SkillData {
  name: string;
  icon: string;
}

export interface PortfolioData {
  user: GeneralInfo;
  experience: ExperienceData;
  education: EducationData;
  projects: ProjectsData;
  skills: SkillsData;
}
