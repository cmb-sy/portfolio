import React from "react";
import { works } from "./WorkData"; // WorkData.tsからインポート

const Works: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-wrap gap-8 justify-center">
        {works.map((work) => (
          <div className="border rounded-lg p-6 w-full sm:w-80 md:w-96 shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300">
            <img
              src={work.imageUrl}
              alt={work.title}
              className="w-full h-40 sm:h-48 md:h-60 object-cover rounded-t-lg"
            />
            <h2 className="text-xl sm:text-2xl font-bold mt-4">{work.title}</h2>
            <p className="mt-2 text-base sm:text-lg">{work.description}</p>
            <div className="mt-4">
              {work.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
