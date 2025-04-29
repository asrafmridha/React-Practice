import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="space-y-3 mt-7">
      <h2 className="text-xl font-semibold">Find Us On</h2>
      <div className="overflow-hidden border rounded-lg">
        <a
          className="flex items-center gap-2 px-4 py-3 border-b hover:bg-gray-100"
          href="#"
        >
          <FaFacebookF className="text-blue-600" /> Facebook
        </a>
        <a
          className="flex items-center gap-2 px-4 py-3 border-b hover:bg-gray-100"
          href="#"
        >
          <FaTwitter className="text-sky-400" /> Twitter
        </a>
        <a
          className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
          href="#"
        >
          <FaInstagram className="text-pink-500" /> Instagram
        </a>
      </div>
    </div>
  );
};

export default FindUs;
