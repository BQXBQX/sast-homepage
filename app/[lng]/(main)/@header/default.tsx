"use client";
import React, { useCallback, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import sastPic from "@/public/img/sast_logo_black.png";
import {
  UnoptimizedImage,
  HeaderLink,
  UserOptions,
  HeaderSheet,
} from "@/components";

import styles from "./page.module.scss";
import { Languages } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const Header = () => {
  const [visible, setVisible] = useState<boolean>();
  const params = useParams();
  const router = useRouter();

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

  // TODO: jump other params
  const handleChangeLanguage = useCallback(() => {
    if (params.lng === "en") {
      router.push("/zh");
    } else {
      router.push("/en");
    }
  }, []);

  return (
    <>
      <motion.nav
        className={styles["header-wrapper"]}
        id="header-wrapper"
        animate={{
          height: visible ? "32rem" : "5rem",
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
          <UnoptimizedImage
            src={sastPic}
            alt="sast"
            priority
            className={styles.img}
          />
          <HeaderLink
            openSheet={() => setVisible(true)}
            closeSheet={() => setVisible(false)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {/*  TODO: 后期加入 link 登录 */}
            {/* <UserOptions /> */}
            <div
              style={{
                cursor: "pointer",
                height: "2rem",
                alignItems: "center",
              }}
              onClick={handleChangeLanguage}
            >
              <Languages style={{ height: "100%", width: "2rem" }} />
            </div>
          </div>
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
