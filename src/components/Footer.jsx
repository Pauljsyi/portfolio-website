import React, { useEffect, useState } from "react";

const Footer = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-center  items-center  h-[100px]">
      <div className="flex flex-col items-center">
        <p className="z-50 text-[white] text-[14px] text-center">
          © 2023 pauljsyi.
        </p>
        <p className="z-50 text-[white] text-[12px] text-start">
          Created with React, Three.js, Framer-Motion, and Tailwind CSS.
          Deployed with Vercel.
        </p>
      </div>
    </div>
  );
};

export default Footer;
