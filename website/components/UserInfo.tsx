import { FC } from "react";
import { GeneralInfo } from "../types";
import styles from "./UserInfo.module.css";

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
        <button className="btn">Contact Me</button>
      </div>
    </>
  );
};
