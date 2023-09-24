import { useState, useEffect } from "react";
// import tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import helpers from "../utils/helpers";

const About = () => {
  const { mediaQueryFunc } = helpers;
  const [isFS, setIsFS] = useState(false);
  useEffect(() => {
    mediaQueryFunc("change", setIsFS);
  }, []);

  return (
    <motion.div className={`${isFS ? "" : "grid grid-cols-3 gap-4"} mx-5 `}>
      <motion.div className="mt-20 col-span-1" variants={textVariant()}>
        <p className={`${styles.sectionSubText} flex`}>whoami</p>
      </motion.div>
      <motion.p
        className="mt-20 col-span-2  text-[17px] max-w-3xl leading-[30px]"
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

export default About;
