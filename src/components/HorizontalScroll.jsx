import { useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import DialogModal from "./DialogModal";
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
} from "../assets/index";

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
  console.log("current project in HSC!!!", { currProject });

  const handleOpen = () => {
    setOpen((cur) => !cur);
  };
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isFS ? ["5%", "-70%"] : ["12%", "-63.5%"]
  );
  // const handleClick = () => {
  //   handleOpen();
  //   setCurrProject(card);
  // };

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
                  className=" w-[300px] h-[600px] sm:w-[900px] cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
                  onClick={() => {
                    handleOpen();
                    setCurrProject(card);
                  }}
                >
                  <img
                    alt="nature"
                    className="h-full w-full object-cover object-center"
                    src={card.url}
                  />
                </Card>
                {/* <Card
                  onClick={() => {
                    handleOpen();
                    setCurrProject(card);
                  }}
                  key={card.id}
                  className="group relative h-[600px] w-[360px] md:w-[50vw] overflow-hidden transition-opacity hover:opacity-90 bg-neutral-200  "
                >
                  <div
                    style={{
                      backgroundImage: `url(${card.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="absolute inset-0 z-0 transition-transform duration-300 blur-sm grayscale-[40%] group-hover:scale-110  group-hover:filter-none"
                  ></div>
                  <div className="absolute inset-0 z-10 grid place-content-center">
                    <p className="bg-gradient-to-br from-black/20 to-black/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-sm">
                      {card.title}
                    </p>
                  </div>
                </Card> */}
              </>
            );
          })}
        </motion.div>
      </div>

      <Dialog
        className="w-[1000px] place-items-center"
        size="sm"
        open={open}
        handler={handleOpen}
      >
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <div className="-mt-px flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                Tania Andrew
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
                @canwu
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              variant="text"
              size="sm"
              // color={isFavorite ? "red" : "blue-gray"}
              // onClick={handleIsFavorite}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </IconButton>
            <Button color="green" size="sm">
              Free Download
            </Button>
          </div>
        </DialogHeader>
        <DialogBody divider={true} className="p-0">
          <img
            alt="nature"
            className="h-[48rem] w-full object-cover object-center"
            src={currProject.url}
          />
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-16">
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Views
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                44,082,044
              </Typography>
            </div>
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Downloads
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                553,031
              </Typography>
            </div>
          </div>
          <Button
            size="sm"
            variant="outlined"
            color="blue-gray"
            className="flex items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                clipRule="evenodd"
              />
            </svg>
            Share
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
      "express",
      "react",
      "nodejs",
      "stripeAPI",
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
    stack: ["react", "shopify", "contextAPI", "chakraUI"],
    gh: "https://github.com/Pauljsyi/shopify-react",
    site: "",
    id: 2,
  },
  {
    url: paradigmguitar,
    title: "Paradigm Guitar",
    desc: "A boutique guitar store application with cart and checkout functionality built from scratch (not recommended). However, I do enjoy looking at beautifully crafted guitars and adding as many of them as I can to make me feel rich.",
    stack: ["mongodb", "express", "react", "nodejs", "css"],
    gh: "https://github.com/Pauljsyi/paradigmguitar-showcase",
    site: "",
    id: 3,
  },
  {
    url: weddingplanner,
    title: "Wedding Planner",
    desc: "Picture this friendly wedding app that lets you plan your dream wedding and make those heartwarming decisions about who to invite and who not to invite to your special day. You can also invite yourself to a random person's wedding of your choosing. 'It's wedding season, kid!' - John Beckwith ",
    stack: ["c#", "razor", "entity framework", "mysql"],
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
