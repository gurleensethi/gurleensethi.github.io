import { FC } from "react";
import { ProjectsData } from "../../types";

export type ProjectsProps = {
  data: ProjectsData;
};

export const Projects: FC<ProjectsProps> = ({ data }) => {
  return (
    <div className="p-4 mb-12">
      <h1 className="section-heading">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {data.projects.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col bg-gradient-to-tr from-blue-800 to-blue-600 rounded-lg w-full h-full overflow-hidden`}
            >
              {/* <img
                src={item.coverImage}
                className="h-48 object-cover object-top relative filter"
              /> */}
              <div className="p-6 flex flex-col h-full">
                <div className="text-xs tracking-wider text-gray-200 mb-2"></div>
                <div className="text-2xl font-bold mb-2">{item.name}</div>
                <div className="text-lg mb-4 text-gray-200 flex-1">
                  {item.description}
                </div>
                <div className="flex justify-end">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition flex bg-white-700 px-2 py-1 rounded-md items-center ml-4 hover:bg-black hover:bg-opacity-20"
                    >
                      <img src="/images/github.svg" className="h-4" />
                      <p className="ml-2">GitHub</p>
                    </a>
                  )}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition flex bg-white-700 px-2 py-1 rounded-md items-center ml-4 hover:bg-black hover:bg-opacity-20"
                    >
                      <img src="/images/rocket.svg" className="h-4" />
                      <p className="ml-2">Deployed App</p>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
