"use client";
import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { NotoSansSC, NotoSansSCBold } from "@/styles/fonts";

import { HeaderSheetContent } from "./headerSheetContent";
import styles from "./index.module.scss";
import { useTranslation } from "@/lib/i18n/client";
import { useParams } from "next/navigation";

interface HeaderSheetProps {
  visible?: boolean;
}

export const HeaderSheet: React.FC<HeaderSheetProps> = ({ visible }) => {
  const [selectItem, setSelectItem] = useState<number>();
  const params = useParams();
  const { t } = useTranslation(params.lng as unknown as string, "header");

  const item = {
    hidden: { opacity: 0, y: -5, transition: { duration: 2 } },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 5,
      transition: {
        delay: i * 0.1 + 0.16,
      },
    }),
    hidden: { opacity: 0, y: -5, transition: { duration: 0.2 } },
  };

  const sheetItems = [t("department-1"), t("department-2"), t("department-3")];

  useEffect(() => {
    !visible && setSelectItem(undefined);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className={styles["header-sheet-wrapper"]} variants={item}>
          <div className={styles["header-sheet-text-wrapper"]}>
            <motion.span
              className={`${NotoSansSC.className} ${styles["header-sheet-title"]}`}
              custom={1}
              variants={variants}
              animate="visible"
              initial="hidden"
              exit="hidden"
            >
              {t("departmentIntroduction")}
            </motion.span>
            {sheetItems.map((item, i) => {
              return (
                <motion.h1
                  className={`${NotoSansSCBold.className} ${styles["header-sheet-item"]}`}
                  variants={variants}
                  animate="visible"
                  initial="hidden"
                  custom={i + 1}
                  key={i}
                  exit="hidden"
                  onMouseEnter={() => setSelectItem(i)}
                >
                  {item}
                </motion.h1>
              );
            })}
          </div>
          <HeaderSheetContent selectItem={selectItem} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
