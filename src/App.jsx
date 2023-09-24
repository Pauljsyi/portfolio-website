import { useState, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
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
          <Feedbacks />
        </div>
        <div>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
