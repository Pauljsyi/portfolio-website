import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import helpers from "../utils/helpers";
import { Wrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import TagCloud from "TagCloud";
import { styles } from "../styles";

const TechCloud = () => {
  const { mediaQueryFunc } = helpers;
  const [isFS, setIsFS] = useState(false);
  useEffect(() => {
    mediaQueryFunc("change", setIsFS);
    console.log("isFS in TECHCLOUD LINE 14", isFS);
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
      radius: isFS ? 190 : 400,
      maxSpeed: "normal",
      keep: false,
    });
    console.log({ tech });
    console.log("isarray?", Array.isArray(tech));
    console.log("length", tech.length);
    if (tech.length) {
      let numToDestroy = tech.length;

      for (let i = 0; i < numToDestroy; i++) {
        tech[i].destroy();
      }

      console.log("tech length", tech.length, tech);
    }

    // console.log("tagcloud", TagCloud(container, techs, options).destroy);
  }, [isFS]);
  return (
    <motion.div
      className="flex justify-center 2xl:mt-[5px] "
      variants={textVariant()}
    >
      <div className={`text-sphere ${styles.sectionSubText} text-center`}>
        <h1
          className={`font-small lg:text-[26px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center`}
        >
          What I have worked with so far
        </h1>
        {/* span tag with classname tagcloud to work */}
        <div className="tagcloud"></div>
      </div>
    </motion.div>
  );
};

export default Wrapper(TechCloud, "techcloud");
