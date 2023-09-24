import { useLayoutEffect, useState, useMemo } from "react";
// import "../styles/TextSphere.css"
import TagCloud from "TagCloud";
import { styles } from "../styles";

const TechCloud = () => {
  useLayoutEffect(() => {
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
      radius: 300,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: false,
    };

    return () => TagCloud(container, techs, options);
  }, []);
  return (
    <div className="flex justify-center mt-20 ">
      <div className={`text-sphere ${styles.sectionSubText}`}>
        <h1 className={`${styles.heroSubText} text-center`}>
          What I have worked with
        </h1>
        {/* span tag with classname tagcloud to work */}
        <span className="tagcloud"></span>
      </div>
    </div>
  );
};

export default TechCloud;
