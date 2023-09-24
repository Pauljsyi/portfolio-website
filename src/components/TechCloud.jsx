import { useEffect } from "react";
// import "../styles/TextSphere.css"
import TagCloud from "TagCloud";
import { styles } from "../styles";

const TechCloud = () => {
  useEffect(() => {
    return () => {
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
      ];
      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
      TagCloud(container, techs, options);
    };
  }, [1]);
  return (
    <div className="flex justify-center  ">
      <h1 className={`${styles.heroSubText} flex-col`}>
        What I have worked with
      </h1>
      <div className={`text-sphere ${styles.sectionSubText}`}>
        {/* span tag with classname tagcloud to work */}
        <span className="tagcloud"></span>
      </div>
    </div>
  );
};

export default TechCloud;
