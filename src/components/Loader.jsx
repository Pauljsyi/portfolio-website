import React from "react";
import { NewtonsCradle } from "@uiball/loaders";

const Loader = () => {
  console.log("loader is running");
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1>LOADING</h1>
      <NewtonsCradle size={40} speed={1.4} color="white" />
    </div>
  );
};

export default Loader;
