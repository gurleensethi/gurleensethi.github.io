import { GetStaticProps } from "next";
import React, { FC } from "react";
import { UserInfo } from "../components/UserInfo";
import { PortfolioData } from "../types";
import { getPortfolioData } from "../utils/get-portfilio-data";

export interface HomeProps {
  portfolioData: PortfolioData;
}

export const Home: FC<HomeProps> = ({ portfolioData }) => {
  return (
    <div>
      <UserInfo info={portfolioData.user} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const portfolioData = getPortfolioData();

  return {
    props: {
      portfolioData,
    },
  };
};
