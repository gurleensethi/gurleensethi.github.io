export interface GeneralInfo {
  name: string;
  email: string;
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
  name: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface PortfolioData {
  user: GeneralInfo;
  experience: ExperienceData;
  education: EducationData[];
  projects: {}[];
}
