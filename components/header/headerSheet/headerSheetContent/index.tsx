import React from "react";

import { motion } from "framer-motion";

import HeaderSheet1Pic from "@/public/img/headerSheet1.svg";
import HeaderSheet2Pic from "@/public/img/headerSheet2.svg";
import HeaderSheet3Pic from "@/public/img/headerSheet3.svg";
import HeaderSheet1Gif from "@/public/img/1.gif";
import HeaderSheet2Gif from "@/public/img/2.gif";
import HeaderSheet3Gif from "@/public/img/3.gif";
import { NotoSansSC, NotoSansSCBold } from "@/styles/fonts";

import styles from "./index.module.scss";
import { UnoptimizedImage } from "../../../unoptimizedImage";
import { useTranslation } from "@/lib/i18n/client";
import { useParams } from "next/navigation";

interface HeaderSheetContentProps {
  selectItem?: number;
  visible?: boolean;
}

export const HeaderSheetContent: React.FC<HeaderSheetContentProps> = ({
  selectItem,
}) => {
  const sheetContentAnimation = {
    hidden: { opacity: 0, y: -5, transition: { duration: 0.2 } },
    show: { opacity: 1, y: 5, transition: { duration: 0.3, delay: 0.05 } },
  };

  const params = useParams();

  const { t: contentT } = useTranslation(
    params.lng as unknown as string,
    "joinUs",
  );

  const sheetContentItems = [
    {
      svg: HeaderSheet1Pic,
      h1: contentT("title-1"),
      p: contentT("content-1"),
      glf: HeaderSheet1Gif,
      size: 33,
    },
    {
      svg: HeaderSheet2Pic,
      h1: contentT("title-2"),
      p: contentT("content-2"),
      glf: HeaderSheet2Gif,
      size: 38,
    },
    {
      svg: HeaderSheet3Pic,
      h1: contentT("title-3"),
      p: contentT("content-3"),
      glf: HeaderSheet3Gif,
      size: 40,
    },
  ];
  return (
    <>
      {selectItem !== undefined && (
        <motion.div
          key={sheetContentItems[selectItem].h1}
          className={`${NotoSansSC.className} ${styles["sheet-content-wrapper"]}`}
          variants={sheetContentAnimation}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <UnoptimizedImage
            src={sheetContentItems[selectItem].svg}
            alt="HeaderSheet1Pic"
            // height={sheetContentItems[selectItem].size}
            className={styles["sheet-svg"]}
          />
          <h1 className={NotoSansSCBold.className}>
            {sheetContentItems[selectItem].h1}
          </h1>
          <p>{sheetContentItems[selectItem].p}</p>
          <UnoptimizedImage
            src={sheetContentItems[selectItem].glf}
            alt="HeaderSheet1Gif"
            className={styles["sheet-glf"]}
            priority
          />
        </motion.div>
      )}
    </>
  );
};
