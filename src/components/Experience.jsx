import React from "react";
import VerticalTabs from "./VerticalTabs";
import { styles } from "../styles";

const Experience = () => {
  return (
    <div>
      <h1 className={`${styles.sectionSubText} text-center`}>
        where i've worked
      </h1>
      <VerticalTabs />
    </div>
  );
};

export default Experience;
