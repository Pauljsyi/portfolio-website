import { useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import helpers from "../utils/helpers";
import { styles } from "../styles";
import { Modal } from "./index";
import { Card } from "@material-tailwind/react";
import {
  coffeazy,
  paradigmguitar,
  klickklack,
  weddingplanner,
} from "../assets/index";

const HorizontalScroll = () => {
  const { mediaQueryFunc } = helpers;
  const [open, setOpen] = useState(false);
  const [currProject, setCurrProject] = useState({});
  const targetRef = useRef(null);
  const [isFS, setIsFS] = useState(false);

  useEffect(() => {
    mediaQueryFunc("change", 640, setIsFS);
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
    isFS ? ["2%", "-75%"] : ["5%", "-63.5%"]
  );

  return (
    <>
      <section
        id="horizontalscrollcarousel"
        ref={targetRef}
        className={`relative h-[200vh] pt-[9px] ${blur}`}
      >
        <h1 className={`${styles.sectionHeadText} lowercase text-center`}>
          Here's some of my work.
        </h1>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            className="flex gap-4"
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ x }}
          >
            {cards.map((card, indx) => {
              return (
                <Card
                  key={indx}
                  className="group relative h-[700px] w-[360px] md:w-[50vw] overflow-hidden transition-opacity hover:opacity-90 bg-neutral-200"
                  onClick={() => {
                    handleOpen();
                    setCurrProject(card);
                    if (typeof window != "undefined" && window.document) {
                      document.body.style.overflow = "hidden";
                    }
                  }}
                >
                  <img
                    alt="nature"
                    className="h-full w-full object-cover object-center transition-transform duration-300 blur-sm grayscale-[40%] group-hover:scale-110  group-hover:filter-none"
                    src={card.url}
                  />
                  <div className="absolute inset-0 z-10 grid place-content-center">
                    <p className="bg-gradient-to-br from-black/20 to-black/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-sm">
                      {card.title}
                    </p>
                  </div>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </section>
      <Modal open={open} setOpen={setOpen} currProject={currProject} />
    </>
  );
};

export default HorizontalScroll;

const cards = [
  {
    url: coffeazy,
    title: "Coffeazy",
    desc: "Created a (proof of concept) coffee shop storefront with administrative functionality for managing coffee items and inventory for an up and coming coffee business.  Owner wanted the flexibility to update and change available menu items on the fly.",
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
    gh: "https://github.com/pauljsyi/coffeazy",
    site: "https://coffeazy.vercel.app/",
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
    desc: "A boutique guitar store application with cart and checkout functionality built from scratch (not recommended). However, I do enjoy looking at beautifully crafted guitars and adding as many of them as I can to make me feel rich.",
    stack: ["mongodb", "mongoose", "express", "react", "nodejs", "css"],
    gh: "https://github.com/Pauljsyi/paradigmguitar-showcase",
    site: "",
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
