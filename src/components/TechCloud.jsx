import { useEffect, useState, useMemo } from "react";
// import "../styles/TextSphere.css"
import TagCloud from "TagCloud";
import { styles } from "../styles";
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
const options = {
  radius: 400,
  maxSpeed: "normal",
  keep: false,
};
const TechCloud = () => {
  useEffect(() => {
    const tech = TagCloud(container, techs, options);
    console.log(tech);
    console.log("isarray?", Array.isArray(tech));
    console.log("length", tech.length);
    if (tech.length) {
      let numToDestroy = tech.length;
      for (let i = 0; i < numToDestroy; i++) {
        tech[i].destroy();
      }
      console.log(tech.length);
    }

    // if (tech.length > 1) {

    // }
    // console.log("tagcloud", TagCloud(container, techs, options).destroy);
    // return tech.destroy();
  }, []);
  return (
    <div className="flex justify-center mt-20 ">
      <div className={`text-sphere ${styles.sectionSubText} text-center`}>
        <h1
          className={`"font-small lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]"text-center`}
        >
          What I have worked with so far
        </h1>
        {/* span tag with classname tagcloud to work */}
        <span className="tagcloud" id="techcloud"></span>
      </div>
    </div>
  );
};

export default TechCloud;
