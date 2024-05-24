import React from "react";
import styles from "./index.module.scss";
import EngineeringSvg from "@/public/img/Engineering.svg";
import WorldSvg from "@/public/img/world.svg";
import SmallBulbSvg from "@/public/img/smallBulb.svg";
import { UnoptimizedImage } from "@/components/unoptimizedImage";
import { NotoSansSCBold, sacramento } from "@/styles/fonts";
import { Button } from "@/components/button";

const data = [
  {
    svg: <UnoptimizedImage src={EngineeringSvg} alt="engineering" />,
    title: "聚集源自于兴趣",
    desc: "社团始于兴趣相投，南邮校科协始终坚持初心，将兴趣作为一直以来的驱动力。在南邮校科协的技术类部门，每一位同学都是因为共同的兴趣爱好或者相似的追求而聚集在一起。在这里，互相帮助、共同进步是一个不变的主题。开源平等、薪火相传是科协一直坚守不变的使命。",
    link: "探索校科协技术类部门  ￫",
  },
  {
    svg: <UnoptimizedImage src={WorldSvg} alt="engineering" />,
    title: "互联网管理思维",
    desc: "科协的建设和形象与管理类部门密不可分。在科协，管理类部门承载着三十届以来科协建设的点点滴滴。自由、开放、交流，这是贯穿在科协人骨子里的特质。在科协，我们剔除掉形式主义，归繁杂琐事于至简至善。高质高效，是我们最终期待的目的。",
    link: "探索校科协建设类部门  ￫",
  },
  {
    svg: <UnoptimizedImage src={SmallBulbSvg} alt="engineering" />,
    title: "创新创业最前沿",
    desc: "科协，总是走在南邮的最前列。在科技快速发展的背景下，科协人是思维与思考总是走在前列。依托校团委创新创业部的强大支持，科协敢于创新创先。在这里，你总是走在南邮参与全国大学生创新创业计划的最前沿。在科协，掘弃旧知和更迭新知将成为你受益良多的素质。",
    link: "探索校科协创新类部门  ￫",
  },
];

export const JoinUs = () => {
  return (
    <div className={styles["join-us-wrapper"]}>
      <h1 className={styles.title}>加入我们</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          {data.map((item, index) => {
            return (
              <div key={index} className={styles.item}>
                {item.svg}
                <h2 className={NotoSansSCBold.className}>{item.title}</h2>
                <p className={styles.desc}>{item.desc}</p>
                <p className={styles.link}>{item.link}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.right}>
          <h2 className={NotoSansSCBold.className}>
            是时候在科协书写你的故事了
          </h2>
          <div style={{ padding: "3rem" }}>
            <span className={sacramento.className} style={{ fontSize: "32px" }}>
              Saster Igniting the thought.
            </span>
            <Button className={styles.button}>加入我们 ￫</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
