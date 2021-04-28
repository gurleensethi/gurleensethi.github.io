import { FC } from "react";
import { ExperienceData } from "../../types";

export type ExperienceProps = {
  data: ExperienceData;
};

export const Experience: FC<ExperienceProps> = ({ data }) => {
  return (
    <div className="p-4 mb-8">
      <h1 className="text-4xl mb-8">Experience</h1>
      <p className="mb-8 text-md font-light">{data.summary}</p>
      <div className="grid md:grid-cols-2 gap-8">
        {data.jobs.map((item, index) => {
          return (
            <div
              className={`flex flex-col bg-gradient-to-tr from-purple-800 to-purple-600 rounded-lg p-6 w-full h-full`}
              key={index}
            >
              <div className="text-xs tracking-wider text-gray-200 mb-2">
                {item.startDate} - {item.endDate}
              </div>
              <div className="text-2xl font-bold mb-2">{item.title}</div>
              <div className="text-xl mb-4">{item.companyName}</div>
              <div className="text-lg mb-4 text-gray-200 flex-1">
                {item.shortDescription}
              </div>
              <div className="flex">
                {item.skills.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="transition opacity-70 cursor-pointer flex flex-col justify-center items-center mr-6 last:mr-0"
                    >
                      <img src={item.icon} className="h-6" />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
