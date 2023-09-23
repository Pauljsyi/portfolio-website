import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

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
  }, [mousePosition]);

  return (
    <section className="w-full h-screen mx-auto ">
      <div className="w-full h-screen mx-auto" id="hero">
        <div id="spotlight"></div>
      </div>
      <div
        className={`${
          styles.paddingX && styles.paddingY
        } absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 relative`}
      >
        <div className="flex flex-col justify-center items-center mt-5"></div>
        <div>
          <h1 className={` relative ${styles.heroHeadText} drop-shadow-lg`}>
            Hi, I'm <span className="text-[#]">Paul</span>.
          </h1>
          <p className={`${styles.heroSubText} drop-shadow-lg`}>
            I build full stack applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
