import { useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import DialogModal from "./DialogModal";
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

const HorizontalScrollCarousel = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [currProject, setCurrProject] = useState({});
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  console.log("current project in HSC!!!", { currProject });
  const handleOpen = () => setOpen((cur) => !cur);

  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-75.5%"]);
  // const handleClick = () => {
  //   handleOpen();
  //   setCurrProject(card);
  // };

  return (
    <section
      id="horizontalscrollcarousel"
      ref={targetRef}
      className="relative h-[300vh] bg-neutral-900 "
    >
      <h1 className={`${styles.sectionHeadText} lowercase text-center`}>
        Here's some of my work
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
                    className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
                  ></div>
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

      <DialogModal
        currProject={currProject}
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
      />
    </section>
  );
};

{
  /* <>
                <Card
                  card={card}
                  key={card.id}
                  open={open}
                  setOpen={setOpen}
                  handleOpen={handleOpen}
                  setCurrProject={setCurrProject}
                />
              </> */
}

// const Card = ({ card, open, setOpen, handleOpen, setCurrProject }) => {
//   console.log("cards", { card });
//   const handleClick = () => {
//     handleOpen();
//     setCurrProject(card);
//   };
//   return (
//     <>
//       <div
//         onClick={handleClick}
//         key={card.id}
//         className="group relative h-[600px] w-[360px] md:w-[50vw] overflow-hidden bg-neutral-200  "
//       >
//         <div
//           style={{
//             backgroundImage: `url(${card.url})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//           className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//         ></div>
//         <div className="absolute inset-0 z-10 grid place-content-center">
//           <p className="bg-gradient-to-br from-black/20 to-black/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-sm">
//             {card.title}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

export default HorizontalScrollCarousel;

const cards = [
  {
    url: coffeazy,
    title: "Coffeazy",
    desc: "this is wedding planner app",
    stack: "what was the tech stack?",
    gh: "https://github.com/pauljsyi/coffeazy",
    site: "https://coffeazy.vercel.app/",
    id: 1,
  },
  {
    url: klickklack,
    title: "Klick Klack",
    desc: "this is wedding planner app",
    stack: "what was the tech stack?",
    gh: "https://github.com/Pauljsyi/shopify-react",
    site: "https://klickklack.netlify.app/",
    id: 2,
  },
  {
    url: paradigmguitar,
    title: "Paradigm Guitar",
    desc: "this is wedding planner app",
    stack: "what was the tech stack?",
    gh: "https://github.com/Pauljsyi/paradigmguitar-showcase",
    site: "",
    id: 3,
  },
  {
    url: weddingplanner,
    title: "Wedding Planner",
    desc: "this is wedding planner app",
    stack: "what was the tech stack?",
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
