import data from "../data.json";
import { PortfolioData } from "../types";

export const getPortfolioData = (): PortfolioData => {
  return data;
};
