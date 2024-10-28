import React from "react";
import Image from "next/image";
import Chevron from "/public/chevron.svg";

const Footer: React.FC = () => {
  return (
    <footer className="text-black py-16 bottom-0 w-full z-10 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; 2023 Your Company. All rights reserved.
        </div>
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button className="bg-blue-500 text-white rounded-full w-24 h-24 hover:bg-blue-700 flex items-center justify-center">
          <Image
            src={Chevron}
            alt="Chevron"
            width={64}
            height={64}
            style={{
              transform: "rotate(180deg)",
              filter: "invert(1)",
            }}
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
