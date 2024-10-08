"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import sastPic from "@/public/img/sast_logo_black.png";
import { UnoptimizedImage, HeaderLink, HeaderSheet } from "@/components";
import styles from "./page.module.scss";
import { Languages } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Segment } from "@/components/segment";

const Header = () => {
  const [visible, setVisible] = useState<boolean>();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // To track header visibility
  const headerRef = useRef<HTMLDivElement>(null); // Reference to the header
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

  const handleChangeLanguage = useCallback(() => {
    if (params.lng === "en") {
      router.push("/zh");
    } else {
      router.push("/en");
    }
  }, [params.lng, router]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    const headerElement = headerRef.current;
    if (headerElement) {
      observer.observe(headerElement);
    }

    return () => {
      if (headerElement) {
        observer.unobserve(headerElement);
      }
    };
  }, []);

  return (
    <>
      <motion.nav
        className={styles["header-wrapper"]}
        id="header-wrapper"
        ref={headerRef} // Attach ref to the header element
        animate={{
          height: visible ? "32rem" : "4rem",
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
              height: "100%",
              width: "1px",
              backgroundColor: "#dedede",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                cursor: "pointer",
                height: "1.6rem",
                alignItems: "center",
              }}
              onClick={handleChangeLanguage}
            >
              <Languages style={{ height: "100%", width: "1.3rem" }} />
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

      <AnimatePresence>{!isHeaderVisible && <Segment />}</AnimatePresence>
    </>
  );
};

export default Header;
