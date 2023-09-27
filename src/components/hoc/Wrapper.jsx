import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../../styles";
import { staggerContainer } from "../../utils/motion";

const Wrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        exit={{ opacity: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className={`mx-auto relative z-0`}
      >
        <span className="hash-span mb-[50px]" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default Wrapper;
