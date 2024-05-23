"use client";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import sastPic from "@/public/img/sast_logo_black.png";
import {
  UnoptimizedImage,
  HeaderLink,
  UserOptions,
  HeaderSheet,
} from "@/components";

import styles from "./page.module.scss";

const Header = () => {
  const [visible, setVisible] = useState<boolean>();

  const headerSheetBackAnimation = {
    hidden: {
      backdropFilter: "saturate(180%) blur(0px)",
      backgroundColor: "rgba(128, 128, 128, 0)",
    },
    show: {
      backgroundColor: "rgba(128, 128, 128, 0.4)",
      backdropFilter: "saturate(180%) blur(20px)",
    },
  };

  return (
    <>
      <motion.nav
        className={styles["header-wrapper"]}
        id="header-wrapper"
        animate={{
          height: visible ? 500 : 56,
          filter: visible
            ? "drop-shadow(0 4px 20px #ffffff)"
            : "drop-shadow(0 0px 0px #ffffff)",
          backgroundColor: visible
            ? "rgba(250, 250, 252, 0.8)"
            : "rgba(250, 250, 252, 0.5)",
        }}
        transition={{
          duration: 0.4,
          delay: 0.16,
        }}
      >
        <div className={styles["header-content"]}>
          <UnoptimizedImage src={sastPic} alt="sast" height={35} priority />
          <HeaderLink
            openSheet={() => setVisible(true)}
            closeSheet={() => setVisible(false)}
          />
          <UserOptions />
        </div>
        <HeaderSheet visible={visible} />
      </motion.nav>
      <AnimatePresence>
        {visible && (
          <motion.div
            className={styles["header-sheet-background"]}
            onMouseEnter={() => setVisible(false)}
            variants={headerSheetBackAnimation}
            animate="show"
            initial="hidden"
            exit="hidden"
            transition={{
              duration: 0.2,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
