import React from "react";
import { works } from "./WorkData";

const Works: React.FC = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-wrap gap-8 justify-center">
        {works.map((work) => (
          <div
            key={work.id}
            className="border rounded-lg p-4 w-full sm:w-96 md:w-128 shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300 transform hover:-translate-y-2"
          >
            <img
              src={work.imageUrl}
              alt={work.title}
              className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-lg sm:text-xl font-bold mt-2">{work.title}</h2>
            <div className="mt-2">
              {work.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-1 text-sm sm:text-base">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
