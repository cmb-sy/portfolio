import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; 2023 Your Company. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
