import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { RobotCanvas } from "./canvas";
import Wrapper from "./hoc/Wrapper";
import Contact from "./Contact";
import {
  github,
  linkedin,
  resume,
  // githubsvg,
  googledocs,
  // googleforms,
  // linkedinsvg,
} from "../assets/index";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState(undefined);

  useEffect(() => {
    function handleMouseMove(event) {
      const spotlightEl = document.querySelector("#spotlight");
      const { clientX, clientY } = event;
      setMousePosition(event);
      spotlightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, rgba(255, 135, 135, 1)
   5px, transparent 25%)`;
    }

    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition]);

  return (
    <section className="w-screen h-screen mx-auto snap-center">
      <div className="w-screen h-screen mx-auto" id="hero">
        <div id="spotlight"></div>
      </div>
      <div
        className={`${
          styles.paddingX && styles.paddingY
        } absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="ml-[80px]">
          <h1 className={`${styles.heroHeadText} drop-shadow-lg`}>
            Hi, I'm <span className="text-[#]">Paul</span>.
          </h1>
          <p className={`${styles.heroSubText} drop-shadow-lg`}>
            I build full stack applications.
          </p>
          <div className="call-to-action w-[250px]">
            <div className="flex justify-evenly">
              <a className="flex" href="https://linkedin.com/in/pauljsyi">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/pauljsyi">
                <img src={github} alt="github" />
              </a>
              <a href="#resume">
                <img src={resume} alt="resume" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 w-full h-screen">
          <a href="https://github.com/pauljsyi">
            <RobotCanvas />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
