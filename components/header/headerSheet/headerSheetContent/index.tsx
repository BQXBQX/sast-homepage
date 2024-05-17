import React from "react";
import UnoptimizedImage from "@/components/unoptimizedImage";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import HeaderSheet1Pic from "@/public/img/headerSheet1.svg";
import HeaderSheet2Pic from "@/public/img/headerSheet2.svg";
import HeaderSheet3Pic from "@/public/img/headerSheet3.svg";
import HeaderSheet1Gif from "@/public/img/1.gif";
import HeaderSheet2Gif from "@/public/img/2.gif";
import HeaderSheet3Gif from "@/public/img/3.gif";
import { NotoSansSC } from "@/styles/fonts";

const sheetContentItems = [
  {
    svg: HeaderSheet1Pic,
    h1: "聚焦源自于兴趣",
    p: "社团始于兴趣相投，南邮校科协始终坚持初心，将兴趣作为一直以来的驱动力。在南邮校科协的技术类部门，每一位同学都是因为共同的兴趣爱好或者相似的追求而聚集在一起。在这里，互相帮助、共同进步是一个不变的主题。开源平等、薪火相传是科协一直坚守不变的使命。",
    glf: HeaderSheet1Gif,
    size: 33,
  },
  {
    svg: HeaderSheet2Pic,
    h1: "互联网管理思维",
    p: "科协的建设和形象与管理类部门密不可分。在科协，管理类部门承载着三十届以来科协建设的点点滴滴。自由、开放、交流，这是贯穿在科协人骨子里的特质。在科协，我们剔除掉形式主义，归繁杂琐事于至简至善。高质高效，是我们最终期待的目的。",
    glf: HeaderSheet2Gif,
    size: 38,
  },
  {
    svg: HeaderSheet3Pic,
    h1: "创新创业最前沿",
    p: "科协，总是走在南邮的最前列。在科技快速发展的背景下，科协人是思维与思考总是走在前列。依托校团委创新创业部的强大支持，科协敢于创新创先。在这里，你总是走在南邮参与全国大学生创新创业计划的最前沿。在科协，掘弃旧知和更迭新知将成为你受益良多的素质。",
    glf: HeaderSheet3Gif,
    size: 40,
  },
];

interface HeaderSheetContentProps {
  selectItem?: number;
  visible?: boolean;
}

const HeaderSheetContent: React.FC<HeaderSheetContentProps> = ({
  selectItem,
}) => {
  const sheetContentAnimation = {
    hidden: { opacity: 0, y: -5, transition: { duration: 0.2 } },
    show: { opacity: 1, y: 5, transition: { duration: 0.3 } },
  };
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
            height={sheetContentItems[selectItem].size}
          />
          <h1>{sheetContentItems[selectItem].h1}</h1>
          <p>{sheetContentItems[selectItem].p}</p>
          <UnoptimizedImage
            src={sheetContentItems[selectItem].glf}
            alt="HeaderSheet1Gif"
            width={300}
            className={styles["sheet-glf"]}
            priority
          />
        </motion.div>
      )}
    </>
  );
};

export default HeaderSheetContent;
