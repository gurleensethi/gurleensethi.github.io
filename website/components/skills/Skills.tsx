import { FC } from "react";
import { SkillsData } from "../../types";

export type SkillsProps = {
  data: SkillsData;
};

export const Skills: FC<SkillsProps> = ({ data }) => {
  return (
    <div className="p-4 mb-12">
      <h1 className="section-heading">Skills</h1>
      <div className="flex flex-wrap justify-center">
        {data.items.map((item, index) => {
          return (
            <div
              key={item.name}
              className={`flex flex-col mb-8 md:mb-12 justify-center items-center ${
                index === 0 ? "w-full" : "w-1/3"
              }`}
            >
              <img
                src={item.icon}
                className="h-8 md:h-10 mb-4 filter invert"
                alt={item.name}
              />
              <div className="text-sm font-light md:text-base">{item.name}</div>
            </div>
          );
        })}
      </div>
      <p className="w-full text-center text-sm text-gray-400">and more...</p>
    </div>
  );
};
