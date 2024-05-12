import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { NotoSansSC } from "@/styles/fonts";
import HeaderSheetContent from "./headerSheetContent";

interface HeaderSheetProps {
  visible?: boolean;
}

const HeaderSheet: React.FC<HeaderSheetProps> = ({ visible }) => {
  const [selectItem, setSelectItem] = useState<number>();

  const item = {
    hidden: { opacity: 0, y: -5, transition: { duration: 2 } },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 5,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0, y: -5 },
  };

  const sheetItems = ["技术类部门", "建设类部门", "创新类部门"];

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
              部门介绍
            </motion.span>
            {sheetItems.map((item, i) => {
              return (
                <motion.h1
                  className={`${NotoSansSC.className} ${styles["header-sheet-item"]}`}
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

export default HeaderSheet;
