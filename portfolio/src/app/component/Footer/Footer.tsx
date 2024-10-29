import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-black w-full z-10 relative flex flex-col items-center">
      <div className="bg-gray-600 w-full py-32 flex justify-center relative">
        <div className="text-xl text-white">Thank You for visiting </div>
        <button className="absolute bottom-0 transform translate-y-2/3 bg-gray-800 text-white rounded-full w-36 h-36 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 48 48"
            className="w-24 h-24 text-white"
            style={{ transform: "rotate(180deg)" }}
          >
            <path
              d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <div className="bg-gray-800 w-full flex flex-col items-center pt-12">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="text-sm text-white">
            &copy; 2023 Your Company. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
