import { FC } from "react";
import { GeneralInfo } from "../types";

export interface UserInfoProps {
  info: GeneralInfo;
}

export const UserInfo: FC<UserInfoProps> = ({ info }) => {
  return (
    <div className="p-8 h-screen flex flex-col justify-center ">
      <h1 className="text-4xl mb-2">
        <span className="text-blue-700">
          {info.name} - <br />
        </span>
        Software Engineer
      </h1>
      <p className="text-base text-gray-700">{info.tagline}</p>
      <img src="/images/developer.svg" className="mt-16 block" />
    </div>
  );
};
