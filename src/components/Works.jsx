import React from "react";
import HorizontalScroll from "./HorizontalScroll";
import { Wrapper } from "./hoc";

const Works = () => {
  return (
    <>
      <div className="flex h-20 items-center justify-center" id="work"></div>
      <HorizontalScroll />
      <div className="flex h-48 items-center justify-center"></div>
    </>
  );
};

export default Works;
