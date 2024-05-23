import React from "react";
import styles from "./index.module.scss";

export const Introduction = () => {
  return (
    <div className={styles["introduction-wrapper"]}>
      <h2 className={styles["left-span"]}>在一起，做点有意思的</h2>
      <div className={styles.right}>
        <h1>自由探索，创意无限</h1>
        <p>
          南京邮电大学大学生科学技术协会，简称SAST，中文简称南邮校科协，成立于1992年。南邮校科协本着学以致用的务实原则，结合我校的特点，广泛地开展各项具有学术性、知识性、实践性的科技创新活动，引领全校同学学习科学、热爱科学、拓宽视野、提高创新意识、深化专业知识、优化知识结构，培养复合型人才。历届校科协成员有很多凭借着优异的成绩被各类知名公司聘用、顶尖高校录取。
          南京邮电大学大学生科学技术协会始终以“增强科技意识，活跃学术气氛，提高创新能力，培养科技人才”为目标，努力让更多的南邮学子在这里点燃梦想，成功启航！
        </p>
      </div>
    </div>
  );
};
