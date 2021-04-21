export interface GeneralInfo {
  name: string;
  email: string;
  tagline: string;
  social: {
    name: string;
    link: string;
  }[];
}

export interface PortfolioData {
  user: GeneralInfo;
  education: {}[];
  projects: {}[];
}
