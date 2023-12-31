import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import helpers from "../utils/helpers";
import { Wrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import TagCloud from "TagCloud";
import { styles } from "../styles";

const TechCloudMobile = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const techs = [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "TailwindCSS",
      "React",
      "Vue",
      "Nest.js",
      "Node.js",
      "Python",
      "Flask",
      "Jinja",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "C#",
      ".NET",
      "Entity Framework",
      "Mongoose",
      "Sequelize",
      "Git",
      "Three.js",
      "Blender",
      "ChakraUI",
      "Bootstrap",
      "Realm",
      "Postman",
      "Express",
      "Redux",
      "GSAP",
    ];
    // const options = {
    //   radius: isFS ? 300 : 190,
    //   maxSpeed: "normal",
    //   keep: false,
    // };
    const tech = TagCloud(container, techs, {
      radius: 250,
      maxSpeed: "normal",
      keep: false,
    });

    if (tech.length) {
      let numToDestroy = tech.length;

      for (let i = 0; i < numToDestroy; i++) {
        tech[i].destroy();
      }
    }
  }, []);
  return (
    <motion.div
      className="flex justify-center mt-[-200px] md:justify-end"
      variants={textVariant()}
    >
      <div className={`text-sphere ${styles.sectionSubText} text-center `}>
        <p
          // className={`font-small lg:text-[26px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center flex`}
          className={`${styles.sectionHeadText} lowercase text-secondary mr-[15px]`}
        >
          what i know so far.
        </p>
        {/* span tag with classname tagcloud to work */}
        <div className="tagcloud"></div>
      </div>
    </motion.div>
  );
};

export default Wrapper(TechCloudMobile, "skills");
