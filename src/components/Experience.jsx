import React from "react";
import VerticalTabs from "./VerticalTabs";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Wrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <motion.div
      className={` 2xl:mt-[50px] ml-[20px] pt-[110px]  ${styles.sectionSubText}`}
      variants={textVariant()}
      id="experience"
    >
      <p
        // className={`font-small lg:text-[26px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center flex`}
        className={`${styles.sectionHeadText} lowercase text-secondary text-center`}
      >
        where i've worked.
      </p>
      <VerticalTabs />
    </motion.div>
  );
};

export default Wrapper(Experience, "experience");
