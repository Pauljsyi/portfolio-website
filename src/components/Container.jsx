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
    <div className="relative max-h-screen bg-primary snap-y snap-mandatory">
      <div className=" bg-center relative snap-start">
        {/* <DelayedHeroContainer /> */}
        <HeroContainer />

        <div className="absolute left-0 top-0 w-full h-screen">
          <RobotCanvas />
        </div>
      </div>

      <div id="about-me-container">
        <div className=" pt-[50px] snap-start" id="about">
          <About />
        </div>
        <div
          className={`2xl:grid-cols-2 grid grid-cols-1  mb-[50px] snap-start`}
          id="experience"
        >
          <Experience />
          <div
            className=" flex justify-center align-center mt-[-150px] pt-[160px] snap-start"
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
