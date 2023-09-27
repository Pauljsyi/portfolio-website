import { useState, useEffect, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import CanvasLoader from "./components/Loader";
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
  Footer,
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
        <Suspense fallback={<CanvasLoader />}>
          <div className=" bg-center relative snap-start">
            <Navbar />
            <Hero />

            <div className="absolute left-0 top-0 w-full h-screen">
              {/* <CanvasLoader /> */}
              <RobotCanvas />
            </div>
          </div>
        </Suspense>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
