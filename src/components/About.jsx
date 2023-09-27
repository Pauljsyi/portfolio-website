import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Wrapper } from "./hoc";

import { fadeIn, textVariant } from "../utils/motion";
import helpers from "../utils/helpers";

const About = () => {
  const { mediaQueryFunc } = helpers;
  const [isFS, setIsFS] = useState(false);
  useEffect(() => {
    mediaQueryFunc("change", 1199, setIsFS);
  }, []);

  return (
    <motion.div
      className={`${
        isFS
          ? "sm:grid grid-cols-1 place-items-end px-[10%] "
          : "grid grid-cols-3 gap-4"
      } mt-[100px]`}
    >
      <motion.div
        className="mt-20 col-span-1 flex lg:justify-left justify-end max-w-2xl"
        variants={textVariant()}
      >
        <p
          // className={`font-small lg:text-[26px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center flex`}
          className={`${styles.sectionHeadText} text-secondary `}
        >
          whoami.
        </p>
      </motion.div>
      <motion.p
        className="mt-20 col-span-2 text-[13px]  sm:text-[16px] max-w-2xl leading-[30px] md:text-right"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Hi, my name is Paul Yi. I am a Full Stack Developer with experience in
        JavaScript, Python, and C#. I am passionate about building beautiful,
        interactive pages and functional software that enhances businesses and
        solves real world problems.
        <br />
        <br />
        Currently, I'm interested in the world of 3D models and animations
        (three.js, GSAP, and Blender), as well as its applications in creating
        unique visual experiences on the web.
        <br />
        <br />
      </motion.p>
    </motion.div>
  );
};

export default Wrapper(About, "about");
