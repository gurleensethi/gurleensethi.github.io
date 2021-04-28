import { GetStaticProps } from "next";
import React, { FC } from "react";
import { ContactForm } from "../components/contact-form/ContactForm";
import { Experience } from "../components/experience/Experience";
import { UserInfo } from "../components/user-info/UserInfo";
import { PortfolioData } from "../types";
import { getPortfolioData } from "../utils/get-portfilio-data";

export interface HomeProps {
  portfolioData: PortfolioData;
}

export const Home: FC<HomeProps> = ({ portfolioData }) => {
  return (
    <div>
      <UserInfo info={portfolioData.user} />
      <Experience experiences={portfolioData.experience} />
      <ContactForm />
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
