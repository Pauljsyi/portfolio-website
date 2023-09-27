import { useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import helpers from "../utils/helpers";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
  // Card,
} from "@material-tailwind/react";

import { styles } from "../styles";
import {
  coffeazy,
  paradigmguitar,
  klickklack,
  weddingplanner,
  github,
  css,
  figma,
  git,
  html,
  javascript,
  mongodb,
  node,
  react,
  redux,
  tailwind,
  typescript,
  three,
  shopify,
  express,
  stripe,
  firebase,
  bootstrap,
  coffeeAPI,
  chakraui,
  dotnetcore,
  entityframework,
  mysql,
  razor,
  postgresql,
  mongoose,
  csharp,
} from "../assets/index";

const techIcons = {
  github: github,
  css: css,
  figma: figma,
  git: git,
  html: html,
  javascript: javascript,
  mongodb: mongodb,
  nodejs: node,
  react: react,
  redux: redux,
  tailwind: tailwind,
  typescript: typescript,
  threejs: three,
  shopify: shopify,
  express: express,
  stripe: stripe,
  firebase: firebase,
  bootstrap: bootstrap,
  coffeeAPI: coffeeAPI,
  chakraui: chakraui,
  dotnetcore: dotnetcore,
  entityframework: entityframework,
  mysql: mysql,
  razor: razor,
  postgresql: postgresql,
  mongoose: mongoose,
  csharp: csharp,
};

const HorizontalScroll = () => {
  const { mediaQueryFunc } = helpers;
  const [open, setOpen] = useState(false);
  // const [close, setClose] = useState(false);
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
    isFS ? ["5%", "-70%"] : ["5%", "-63.5%"]
  );

  return (
    <section
      id="horizontalscrollcarousel"
      ref={targetRef}
      className="relative h-[400vh]"
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
          {cards.map((card) => {
            return (
              <>
                <Card
                  className="group relative h-[600px] w-[360px] md:w-[50vw] overflow-hidden transition-opacity hover:opacity-90 bg-neutral-200  "
                  onClick={() => {
                    handleOpen();
                    setCurrProject(card);
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
              </>
            );
          })}
        </motion.div>
      </div>

      <Dialog size="sm" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            {/* <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            /> */}
            <div className=" flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                {currProject.title}
              </Typography>
              <Typography
                variant="small"
                color="white"
                className="text-xs font-normal"
              >
                @pauljsyi
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {currProject.site === "" ? (
              "under construction"
            ) : (
              <p size="lg">
                <a href={currProject.site} rel="noreferrer" target="_blank">
                  link to site
                </a>
              </p>
            )}
            <Button size="xl" onClick={handleOpen}>
              <h1 className="text-[30px]">X</h1>
            </Button>
          </div>
        </DialogHeader>
        <DialogBody divider={true} className="p-0">
          <img
            alt="nature"
            className="h-[48rem] w-full object-cover object-center"
            src={currProject.url}
          />
          <div
            className={`absolute top-0 left-0 backdrop-blur-sm backdrop-brightness-50  grayscale-[40%] w-[100%] h-[100%]`}
          >
            <Typography
              color="blue-gray"
              className={`font-small mx-[100px] mt-[50px]`}
            >
              {currProject.desc}
            </Typography>
          </div>
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-16">
            <div>
              <Typography variant="small" color="white" className="font-normal">
                The Stack:
              </Typography>
            </div>
            <div>
              <Typography
                id="stack-item"
                variant="small"
                color="white"
                className="font-normal flex"
              >
                {open
                  ? currProject.stack.map((stack, indx) => (
                      <img
                        className="w-[45px]"
                        key={indx}
                        src={techIcons[stack]}
                        title={stack}
                        alt={stack}
                      />
                    ))
                  : null}
              </Typography>
            </div>
          </div>
          <Button
            size="sm"
            variant="outlined"
            color="blue-gray"
            className="flex flex-row items-center gap-3"
          >
            <a
              className="flex flex-row items-center "
              href={currProject.gh}
              rel="noreferrer"
              target="_blank"
            >
              <img className="w-[25px] mr-[10px]" src={github} alt="github" />
              <p>github</p>
            </a>
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
};

export default HorizontalScroll;

const cards = [
  {
    url: coffeazy,
    title: "Coffeazy",
    desc: "Created a (proof of concept) coffee shop storefront with administrative functionality for managing coffee items and inventory for an up and coming coffee business.  Owner wanted the flexibility to update and change available menu items on the go and I quote 'as fast as they come and go'",
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
