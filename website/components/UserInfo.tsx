import { FC } from "react";
import { GeneralInfo } from "../types";
import styles from "./UserInfo.module.css";
import Image from "next/image";

export interface UserInfoProps {
  info: GeneralInfo;
}

export const UserInfo: FC<UserInfoProps> = ({ info }) => {
  return (
    <>
      <div className="p-8 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-2 font-light">
          Hey <span className={styles["hand-anim"]}>👋</span> I am
        </h1>
        <h1 className="text-4xl font-medium mb-8">{info.name}</h1>
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
                rel="noopener"
                className="trasnition opacity-80 hover:opacity-100 mr-6 last:mr-0"
              >
                <Image
                  src={item.icon}
                  height="32px"
                  width="32px"
                  alt={item.name}
                />
              </a>
            );
          })}
        </div>
        <button className="btn">Contact Me</button>
      </div>
    </>
  );
};
