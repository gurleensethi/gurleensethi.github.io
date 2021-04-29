import { FC, useEffect, useState } from "react";
import { GeneralInfo } from "../../types";
import styles from "./UserInfo.module.css";

export interface UserInfoProps {
  info: GeneralInfo;
}

export const UserInfo: FC<UserInfoProps> = ({ info }) => {
  const [height, setHeignt] = useState("100vh");

  useEffect(() => {
    setHeignt(`${window.innerHeight}px`);
  }, []);

  const onContactMeClick = () => {
    document
      .getElementById("contact-me")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`p-8 flex flex-col justify-center items-center ${styles["animate-in"]}`}
        style={{ height }}
      >
        <h1 className="text-3xl mb-2 font-light">
          Hey <span className={styles["hand-anim"]}>👋</span> I am
        </h1>
        <h1 className="text-5xl font-medium mb-4">{info.name}</h1>
        <h1 className="text-lg font-light mb-8">{info.title}</h1>
        <h1 className="text-xl font-light flex text-center mb-8 max-w-screen-sm">
          {info.tagline}
        </h1>
        <div className="mb-8">
          {info.social.map((item) => {
            return (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity opacity-80 hover:opacity-100 mr-6 last:mr-0"
              >
                <img
                  src={item.icon}
                  height="32px"
                  width="32px"
                  alt={item.name}
                />
              </a>
            );
          })}
        </div>
        <button className="btn" onClick={onContactMeClick}>
          Contact Me
        </button>
      </div>
    </>
  );
};
