import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { styles } from "../styles";
import { after } from "lodash";

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState("html");
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

  return (
    <Tabs
      className="h-[657px] max-w-screen-xl mx-auto mt-16"
      value={activeTab}
      orientation="vertical"
    >
      <TabsHeader className="w-60">
        {data.map(({ label, value }) => (
          <Tab
            className={` flex justify-end mb-5 ${
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
      <TabsBody>
        {data.map(({ value, position, dates, desc }, indx) => (
          <TabPanel key={value} value={value} className="py-0 ">
            <ul>
              {desc.map((item, indx) => (
                <div className="flex">
                  <span className="mx-5">&#8226;</span>
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
