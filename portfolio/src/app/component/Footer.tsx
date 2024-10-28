import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 bottom-0 w-full relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; 2023 Your Company. All rights reserved.
        </div>
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button className="bg-blue-500 text-white rounded-full w-24 h-24 hover:bg-blue-700"></button>
      </div>
    </footer>
  );
};

export default Footer;
