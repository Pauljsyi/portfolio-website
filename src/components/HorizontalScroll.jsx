import { useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import helpers from "../utils/helpers";
import { styles } from "../styles";
import { Modal } from "./index";
import { Card } from "@material-tailwind/react";
import { Wrapper } from "./hoc";
import {
  coffeazy,
  paradigmguitar,
  klickklack,
  weddingplanner,
  monkey,
} from "../assets/index";

const HorizontalScroll = () => {
  const { mediaQueryFunc } = helpers;
  const [open, setOpen] = useState(false);
  const [currProject, setCurrProject] = useState({});
  const targetRef = useRef(null);
  const [isFS, setIsFS] = useState(false);

  useEffect(() => {
    mediaQueryFunc("change", 800, setIsFS);
  }, []);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const handleOpen = () => {
    setOpen((cur) => !cur);
  };
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isFS ? ["2%", "-100%"] : ["5%", "-70%"]
  );

  return (
    <>
      <section
        id="horizontalscrollcarousel"
        ref={targetRef}
        className={`relative flex flex-col  pt-[9px] ${blur}`}>
        <h1 className={`${styles.sectionHeadText}  lowercase text-center`}>
          Here's some of my work.
        </h1>
        <div className=" flex flex-wrap p-[50px] justify-center items-center  overflow-hidden">
          {/* <motion.div
          className="flex gap-4"
          whileInView={{ opacity: 0.5 }}
          transition={{ delay: 8 }}
          style={{ x }}
        > */}
          {cards.map((card, indx) => {
            return (
              <Card
                key={indx}
                className="group m-[25px] relative h-[400px] w-[360px]  overflow-hidden transition-opacity hover:opacity-90 bg-neutral-200"
                onClick={() => {
                  handleOpen();
                  setCurrProject(card);
                  if (typeof window != "undefined" && window.document) {
                    document.body.style.overflow = "hidden";
                  }
                }}>
                <img
                  alt="nature"
                  className="h-full w-full object-cover object-center transition-transform duration-300 blur-sm grayscale-[40%] group-hover:scale-110  group-hover:filter-none"
                  src={card.url}
                />
                <div className="absolute inset-0 z-10 grid place-content-center">
                  <p className="bg-gradient-to-br from-black/20 to-black/0 p-8 text-3xl font-black uppercase text-white backdrop-blur-sm">
                    {card.title}
                  </p>
                </div>
              </Card>
            );
          })}
          {/* </motion.div> */}
        </div>
      </section>
      <Modal open={open} setOpen={setOpen} currProject={currProject} />
    </>
  );
};

export default Wrapper(HorizontalScroll, "work");

const cards = [
  {
    url: coffeazy,
    title: "Coffeazy",
    desc: "Created a (proof of concept) coffee shop storefront with administrative functionality for managing coffee items and inventory for an up and coming coffee business.  Owner wanted the flexibility to update and change available menu items on the fly.  Project started off with a monolithic architecture in mind but, ended up decoupling frontend and backend services with separate deployments in order to achieve a more scalable, flexible, and potentially more optimized application. Frontend deployed with Vercel, express and stripe server deployed with Render.",
    stack: [
      "mongodb",
      "mongoose",
      "express",
      "react",
      "nodejs",
      "stripe",
      "firebase",
      "bootstrap",
      "coffeeAPI",
    ],
    gh: "https://github.com/pauljsyi/coffeazy-react-ui",
    site: "https://coffeazy-pauljsyi.vercel.app/",
    id: 1,
  },
  {
    url: klickklack,
    title: "Klick Klack",
    desc: "A headless CMS React frontend application, powered by Shopify.  Leveraged Shopify's robust commerce capabilities out of the box, like cart, checkout, and secure authentication for anonymous buyers to enhance user experience.",
    stack: ["react", "shopify", "chakraui"],
    gh: "https://github.com/Pauljsyi/shopify-react",
    site: "",
    id: 2,
  },
  {
    url: paradigmguitar,
    title: "Paradigm Guitar",
    desc: "One of my very first projects, the key takeaways here is I've come a long way since building this project and I learned so much more since.  Paradigm Guitar is a boutique guitar store application with cart and checkout functionality built from scratch (not recommended for beginners). However, I do enjoy looking at beautifully crafted guitars and adding as many of them as I can to make me feel rich. App originally deployed on AWS EC2 and assets stored in S3. Now deployed on Vercel for your viewing pleasure.",
    stack: ["mongodb", "mongoose", "express", "react", "nodejs", "css", "aws"],
    gh: "https://github.com/Pauljsyi/paradigmguitar-showcase",
    site: "https://paradigmguitar-showcase-btmxt2cj2-pauljsyi.vercel.app/",
    id: 3,
  },
  {
    url: weddingplanner,
    title: "Wedding Planner",
    desc: "Picture this friendly wedding app that lets you plan your dream wedding and make those heartwarming decisions about who to invite and who not to invite to your special day. You can also invite yourself to a random person's wedding of your choosing. 'It's wedding season, kid!' - Wedding Crashers",
    stack: ["csharp", "razor", "entityframework", "mysql"],
    gh: "https://github.com/Pauljsyi/weddingplannerapp",
    site: "",
    id: 4,
  },
  {
    url: monkey,
    title: "Monkey Sales Tracker",
    desc: "Created an internal tool while working as a Gear Advisor at Guitar Center. During a new system integration period, it was proving to be difficult to track current sales metrics (current margin, commission tier, & order activity).  I took the weekend to build a simple, lightweight react app and a simple algorithm to help identify lost revenue and calculate net margin to date and shared it with my team, resulting in improved follow ups and commission retention by 8-10%!",
    stack: ["react", "css", "javascript", "vercel"],
    gh: "https://github.com/pauljsyi/MonkeySalesTracker",
    site: "https://monkey-sales-tracker-pauljsyis-projects.vercel.app/",
    id: 5,
  },
  // {
  //   url: "/imgs/abstract/5.jpg",
  //   title: "Title 5",
  //   id: 5,
  // },
  // {
  //   url: "/imgs/abstract/6.jpg",
  //   title: "Title 6",
  //   id: 6,
  // },
  // {
  //   url: "/imgs/abstract/7.jpg",
  //   title: "Title 7",
  //   id: 7,
  // },
];
