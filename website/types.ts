export interface GeneralInfo {
  name: string;
  email: string;
  tagline: string;
  social: {
    name: string;
    link: string;
    icon: string;
  }[];
}

export interface ExperienceData {
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

export interface PortfolioData {
  user: GeneralInfo;
  experience: ExperienceData[];
  education: {}[];
  projects: {}[];
}
