import React from "react";
// import tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <motion.div className="grid grid-cols-3 gap-4">
      <motion.div className="mt-20 col-span-1" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p className="mt-20 col-span-2" variants={fadeIn("", "", 0.1, 1)}>
        I'm a full-stack software developer with experience in Javascript,
        Python, and C#. I am passionate about creating innovative, scalable, and
        user-friendly solutions that solve complex real world problems.
      </motion.p>
    </motion.div>
  );
};

export default About;
