import React from "react";
import Image from "next/image";
import Chevron from "/public/chevron.svg";

const Footer: React.FC = () => {
  return (
    <footer className="text-black pt-16 w-full z-10 relative flex flex-col items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; 2023 Your Company. All rights reserved.
        </div>
      </div>
      <div className="mt-auto">
        <button className="bg-blue-500 text-white rounded-t-full w-24 h-12 hover:bg-blue-700 flex items-center justify-center">
          <Image
            src={Chevron}
            alt="Chevron"
            width={48}
            height={48}
            style={{
              transform: "rotate(180deg)",
            }}
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
