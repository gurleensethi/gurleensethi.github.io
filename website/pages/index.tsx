import { GetStaticProps } from "next";
import React, { FC } from "react";
import { ContactForm } from "../components/contact-form/ContactForm";
import { Education } from "../components/education/Education";
import { Experience } from "../components/experience/Experience";
import { Projects } from "../components/projects/Projects";
import { Skills } from "../components/skills/Skills";
import { UserInfo } from "../components/user-info/UserInfo";
import { PortfolioData } from "../types";
import { getPortfolioData } from "../utils/get-portfilio-data";
import Head from "next/head";

export interface HomeProps {
  portfolioData: PortfolioData;
}

export const Home: FC<HomeProps> = ({ portfolioData }) => {
  const { user, projects, experience, education, skills } = portfolioData;

  return (
    <div>
      <Head>
        <meta name="description" content={user.tagline} />
      </Head>
      <UserInfo info={user} />
      <Skills data={skills} />
      <Experience data={experience} />
      <p className="w-full p-16 text-center my-8 text-xl opacity-70">
        I am not a designer, but I love clean designs{" "}
        <span className="text-base animate-pulse inline-block">🤍</span>
      </p>
      <Education data={education} />
      <Projects data={projects} />
      <ContactForm generalInfo={user} />
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
