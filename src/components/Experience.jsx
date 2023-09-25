import React from "react";
import VerticalTabs from "./VerticalTabs";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Wrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <motion.div
      className={`xl:h-[550px] 2xl:mt-[5px]  ${styles.sectionSubText}`}
      variants={textVariant()}
    >
      <h1
        className={`font-small lg:text-[26px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center`}
      >
        Where I've worked
      </h1>
      <VerticalTabs />
    </motion.div>
  );
};

export default Wrapper(Experience, "experience");
