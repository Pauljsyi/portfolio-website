import { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import helpers from "../utils/helpers";
import { styles } from "../styles";
import { after } from "lodash";

const data = [
  {
    label: "Crossed",
    value: "crossed",
    position: "Software Engineer",
    dates: "May 2023 - Current",
    desc: [
      "Developed and launched an MVP mobile application leveraging geolocation technology, facilitating meaningful connections for 		individuals interested in romance, business, and social relationships.",
      "Developed a responsive mobile UI/UX utilizing React Native, resulting in a 40% increase in user engagement and a 25% decrease in bounce rate within the first month.",
      "Incorporated ClickUp (Agile Software Development) for highly efficient asynchronous and synchronous work, increasing efficacy of 15%, and kept track of daily, weekly scrums to discuss user stories/bugs/blockers.",
      "Implemented Express backend with Firebase, leveraging user data and authentication, and integrated PostgreSQL to store and manage user data, resulting in a secure user experience.",
    ],
  },
  {
    label: "Hack For L.A.",
    value: "hackforla",
    position: "Front End Developer",
    dates: "Jan 2022 - May 2023",
    desc: [
      "Collaborated with a team of 20 volunteers to enhance the Hack for L.A. website, implementing new features and coding standards in weekly stand-ups, resulting in a 20% increase in improved user experiences.",
      "Streamlined Git workflow, resulting in a 25% reduction in issue resolution time, by introducing a standardized process for handling frontend and backend issues using Javascript, HTML, CSS, and Docker.",
      "Boosted website performance by 30% by contributing to the Hack for LA website repository to debug, implement new features, and refactor legacy code.",
    ],
  },
  {
    label: "Itacho",
    value: "itacho",
    position: "Restaurant Manager/Website Developer",
    dates: "Aug 2017 - Jul 2019",
    desc: [
      "Configured and customized POS software to meet specific restaurant needs, enhancing order accuracy and customer service efficiency.",
      "Led the conceptualization, design, and development of a modern and user-friendly website for the restaurant, resulting in an increase of online reservations by 60% within the first three months of launch.",
    ],
  },
];

const VerticalTabs = () => {
  const { mediaQueryFunc } = helpers;
  const [activeTab, setActiveTab] = useState("crossed");
  const [isFS, setIsFS] = useState(false);

  useEffect(() => {
    mediaQueryFunc("change", 1033, setIsFS);
  }, [isFS]);

  return (
    <Tabs
      className="h-[657px] max-w-screen-xl mx-auto mt-16 justify-center"
      value={activeTab}
      orientation={isFS ? "horizontal" : "vertical"}
    >
      <TabsHeader
        className={`max-w-screen-sm w-[150px] flex sm:flex-column ${
          isFS ? "flex-row w-[100%]" : ""
        }`}
      >
        {data.map(({ label, value }, indx) => (
          <Tab
            className={`z-10 flex justify-end mb-5 uppercase justify-center  ${
              activeTab === value ? "text-[#FF8787]" : ""
            } `}
            onClick={() => setActiveTab(value)}
            key={value}
            value={value}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className={`lg:w-[900px] max-w-screen-md pt-[5px] ml-[-25px]`}>
        {data.map(({ value, position, dates, desc }, indx) => (
          <TabPanel key={value} value={value}>
            <div className="ml-12 mt-[-10px]">
              <h1 className=" font-small text-white lg:text-[26px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[40px] ">
                {position}
              </h1>
              <p className="mb-5 text-white">{dates}</p>
            </div>
            <ul>
              {desc.map((item, indx) => (
                <div
                  key={indx}
                  className="flex sm:text-[16px] text-[11px] text-secondary lowercase tracking-wider"
                >
                  <span className="ml-12 mr-6">&#8226;</span>
                  <li>{item}</li>
                </div>
              ))}
            </ul>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default VerticalTabs;
