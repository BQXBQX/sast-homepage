"use client";

import React from "react";

import { useEffect, useState } from "react";
import { OrbitingCircles } from "../orbitingCircles";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import { NotoSansSC } from "@/styles/fonts";

// const content = [
//   {
//     id: "evento",
//     title: "SAST-Evento",
//     desc: "Our own lark",
//     link: [
//       "https://github.com/NJUPT-SAST/sast-evento",
//       "https://github.com/NJUPT-SAST/sast-evento-backend",
//     ],
//   },
//   {
//     id: "oj",
//     title: "SAST-Online-Judge",
//     desc: "Our own Online Judge",
//     link: [
//       "https://github.com/NJUPT-SAST/sastoj",
//       "https://github.com/NJUPT-SAST/sastoj-frontend",
//     ],
//   },
// ];

export const Project = () => {
  const sheetContentAnimation = {
    hidden: { opacity: 0, y: -5, transition: { duration: 0.2 } },
    show: { opacity: 1, y: 5, transition: { duration: 0.3, delay: 0.05 } },
  };
  const [hoverItem, setHoverItem] = useState<string>("");
  //   const content =

  useEffect(() => {
    console.log(hoverItem);
  }, [hoverItem]);
  return (
    <div className={styles.container}>
      <OrbitingCircles onHover={setHoverItem}></OrbitingCircles>
      <motion.div
        key={hoverItem}
        className={`${NotoSansSC.className} ${styles["content"]}`}
        variants={sheetContentAnimation}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {hoverItem}
      </motion.div>
    </div>
  );
};
