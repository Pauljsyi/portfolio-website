import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import helpers from "./utils/helpers";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  TechCloud,
  TechCloudMobile,
  RobotCanvas,
  Works,
  StarsCanvas,
} from "./components";
import("default-passive-events");

function App() {
  const { mediaQueryFunc } = helpers;
  const [isFS, setIsFS] = useState(false);

  useEffect(() => {
    mediaQueryFunc("change", 945, setIsFS);
  }, [isFS]);
  return (
    <BrowserRouter>
      <div className="relative max-h-screen bg-primary snap-y snap-mandatory">
        <div className=" bg-center relative">
          <Navbar />
          <Hero />
          <div className="absolute left-0 top-0 w-full h-screen">
            <RobotCanvas />
          </div>
        </div>
        <div id="about-me-container" className="">
          <div>
            <About />
          </div>
          <div
            className={`2xl:grid-cols-2 grid grid-cols-1  mb-[50px]`}
            id="experience"
          >
            <Experience />
            {isFS ? (
              <TechCloudMobile mobile={300} />
            ) : (
              <TechCloud fullscreen={500} />
            )}
          </div>
          <Works />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
