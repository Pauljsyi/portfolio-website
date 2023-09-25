import { useState, useRef, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import CanvasLoader from "./components/Loader";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  TechCloud,
  RobotCanvas,
  Works,
  StarsCanvas,
} from "./components";
import("default-passive-events");

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<CanvasLoader />}>
        <div className="relative max-h-screen bg-primary  ">
          <div className=" bg-center relative">
            <Navbar />
            <Hero />
            <div className="absolute left-0 top-0 w-full h-screen">
              <RobotCanvas />
            </div>
          </div>
          <div>
            <About />
            <TechCloud />
            <Experience />
            <Works />
          </div>
          <div>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
