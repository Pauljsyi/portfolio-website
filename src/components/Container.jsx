import React, { useState, useEffect } from "react";
import CanvasLoader from "./Loader";
import helpers from "../utils/helpers";
import {
  About,
  Contact,
  Experience,
  TechCloud,
  TechCloudMobile,
  RobotCanvas,
  Works,
  HeroContainer,
  Footer,
} from "./index";

const Container = () => {
  const { mediaQueryFunc } = helpers;
  const [isFS, setIsFS] = useState(false);

  useEffect(() => {
    mediaQueryFunc("change", 945, setIsFS);
  }, [isFS]);
  return (
    <div className="relative max-h-screen bg-primary" id="app-container">
      <div className=" bg-center relative ">
        {/* <DelayedHeroContainer /> */}
        <HeroContainer />

        <div className="absolute left-0 top-0 w-full h-screen">
          <RobotCanvas />
        </div>
      </div>

      <div id="about-me-container">
        <div className=" pt-[50px] " id="about">
          <About />
        </div>
        <div
          className={`min-[1740px]:grid-cols-2 xl:grid grid-cols-1  mb-[50px] `}
          id="experience"
        >
          <Experience />
          <div
            className=" flex justify-center align-center mt-[-150px] pt-[160px] "
            id="skills"
          >
            {isFS ? (
              <TechCloudMobile mobile={300} />
            ) : (
              <TechCloud fullscreen={500} />
            )}
          </div>
        </div>
        <Works />
      </div>
      <div>
        <Contact />
        {/* <Footer /> */}
      </div>
      {/* <CanvasLoader /> */}
    </div>
  );
};

export default Container;
