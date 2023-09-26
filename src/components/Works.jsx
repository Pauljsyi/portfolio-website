import React from "react";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import { Wrapper } from "./hoc";

const Works = () => {
  return (
    <>
      <div className="flex h-20 items-center justify-center" id="work"></div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center"></div>
    </>
  );
};

export default Works;
