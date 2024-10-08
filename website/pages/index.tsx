import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <div className="">
      <Head>
        <meta name="description" content="" />
      </Head>
      <Topbar />
      <HeaderSection />
      <ContentSection />
    </div>
  );
};

export default Home;

export function Topbar() {
  return (
    <div className="flex p-8 items-center justify-between">
      <div className="text-3xl">Gurleen Sethi</div>

      <div className="hidden md:block">
        <GetInTouchSection />
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center min-h-[60vh] justify-center mt-8">
      <div className="p-8 mx-auto">
        <div className="mx-auto">
          <div className="text-4xl lg:text-5xl leading-snug lg:leading-normal font-medium">
            Empowering Businesses <br /> with Software Solutions
          </div>

          <div className="max-w-[70%] text-lg lg:text-xl mt-4 text-secondaryDark lg:leading-normal">
            Enterprise-Level expertise for Websites, Apps, and Backends to fuel
            your growing business.
          </div>
        </div>
      </div>

      <div className="md:hidden mt-8">
        <GetInTouchSection />
      </div>

      <img
        src="/images/me.png"
        className="select-none max-w-[400px] lg:max-w-[500px] mx-auto mt-20 lg:mt-0 grayscale-[1] contrast-[1] brightness-[1.4]"
      />
    </div>
  );
}

function GetInTouchSection() {
  return (
    <div className="">
      <Link href="/contact">
        <div className="px-6 py-2 rounded-md bg-primaryDark text-primaryLight">
          Get In Touch
        </div>
      </Link>
    </div>
  );
}

function ContentSection() {
  return (
    <div className="p-8 lg:p-0 mt-28">
      <div className="flex flex-col items-center">
        <div className="text-2xl leading-snug text-center font-medium">
          6+ years of Software Development Experience
        </div>

        <div className="text-lg text-secondaryDark mt-4">
          with renowned organizations
        </div>
      </div>

      <div className="flex space-x-8 mt-4 justify-center items-center">
        <a href="https://ssense.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/ssense.png" className="h-16" />
        </a>
        <a href="https://docker.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/docker.png" className="h-10" />
        </a>
      </div>
    </div>
  );
}
