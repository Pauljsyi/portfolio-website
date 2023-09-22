import { useState, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import("default-passive-events");

function App() {
  return (
    <BrowserRouter>
      <div className="relative  bg-primary  ">
        <div className=" bg-center relative">
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
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
