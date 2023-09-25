import React from "react";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import { Wrapper } from "./hoc";

const Works = () => {
  return (
    <div className="bg-neutral-800 relative">
      <div className="flex h-20 items-center justify-center"></div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center"></div>
    </div>
  );
};

export default Wrapper(Works, "work");
