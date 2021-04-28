import { GetStaticProps } from "next";
import React, { FC } from "react";
import { ContactForm } from "../components/contact-form/ContactForm";
import { Education } from "../components/education/Education";
import { Experience } from "../components/experience/Experience";
import { Projects } from "../components/projects/Projects";
import { UserInfo } from "../components/user-info/UserInfo";
import { PortfolioData } from "../types";
import { getPortfolioData } from "../utils/get-portfilio-data";

export interface HomeProps {
  portfolioData: PortfolioData;
}

export const Home: FC<HomeProps> = ({ portfolioData }) => {
  const { user, projects, experience, education } = portfolioData;

  return (
    <div>
      <UserInfo info={user} />
      <Experience data={experience} />
      <p className="w-full p-6 text-center opacity-40 text-xl my-8">
        I am not a designer, but I love clean designs{" "}
        <span className="text-sm animate-pulse inline-block">🤍</span>
      </p>
      <Education data={education} />
      <Projects data={projects} />
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
