import { FC } from "react";
import { EducationData } from "../../types";

export type EducationProps = {
  data: EducationData;
};

export const Education: FC<EducationProps> = ({ data }) => {
  return (
    <div className="p-4 mb-8">
      <h1 className="text-4xl mb-8">Education</h1>
      <p className="mb-8 text-md font-light">{data.summary}</p>
      <div className="grid md:grid-cols-2 gap-8">
        {data.degrees.map((item, index) => {
          return (
            <div
              className={`relative flex flex-col bg-gradient-to-tr from-amber-800 to-amber-600 rounded-lg p-6 w-full h-full`}
              key={index}
            >
              <div className="text-xs tracking-wider text-gray-200 mb-2">
                {item.startDate} - {item.endDate}
              </div>
              <div className="text-2xl font-bold mb-2">{item.degree}</div>
              <div className="text-xl mb-1">{item.name}</div>
              <div className="text-lg">{item.location}</div>
              <img
                src="/images/graduation.svg"
                className="opacity-70 h-6 absolute right-6 top-4"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
