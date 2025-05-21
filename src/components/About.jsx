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
      } mt-[100px]`}>
      <motion.div
        className="mt-20 col-span-1 flex lg:justify-left justify-end max-w-2xl"
        variants={textVariant()}>
        <p
          // className={`font-small lg:text-[26px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center flex`}
          className={`${styles.sectionHeadText} text-secondary `}>
          whoami.
        </p>
      </motion.div>
      <motion.p
        className="mt-20 col-span-2 text-[13px]  sm:text-[16px] max-w-2xl leading-[30px] md:text-right"
        variants={fadeIn("", "", 0.1, 1)}>
        Hi, my name is Paul Yi. I am a Full Stack Developer with a strong
        background in JavaScript, Python, and C#. Over the past few years, I
        have honed my skills in building intuitive, interactive web pages and
        robust software solutions that not only look beautiful but are designed
        to address real-world problems and enhance user experiences. I thrive on
        problem-solving and enjoy the process of transforming complex
        requirements into streamlined, functional applications that users love.
        <br />
        <br />
        In addition to my technical expertise, I bring a collaborative mindset
        and an eagerness to constantly learn and grow, especially in the
        ever-evolving field of cybersecurity. As I continue to deepen my
        knowledge in cybersecurity, I am excited by the opportunity to integrate
        secure practices into development processes, ensuring that the software
        I create is not only effective but also resilient against emerging
        digital threats. I am driven by the challenge of building solutions that
        are as safe as they are efficient, ready to tackle the next frontier in
        secure software development.
        <br />
        <br />
      </motion.p>
    </motion.div>
  );
};

export default Wrapper(About, "about");
