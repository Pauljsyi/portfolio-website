import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { styles } from "../styles";
import {
  coffeazy,
  paradigmguitar,
  klickklack,
  weddingplanner,
} from "../assets/index";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-75.5%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900 ">
      <h1 className={`${styles.sectionHeadText} lowercase text-center`}>
        Here are some of my work
      </h1>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          className="flex gap-4"
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ x }}
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[600px] w-[360px] md:w-[50vw] overflow-hidden bg-neutral-200  "
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
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: coffeazy,
    title: "Coffeazy",
    id: 1,
  },
  {
    url: klickklack,
    title: "Klick Klack",
    id: 2,
  },
  {
    url: paradigmguitar,
    title: "Paradigm Guitar",
    id: 3,
  },
  {
    url: weddingplanner,
    title: "Wedding Planner",
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
