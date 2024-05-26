import React from "react";
import styles from "./index.module.scss";
import { NotoSansSCBold } from "@/styles/fonts";

const data = [
  {
    title: "31 年",
    desc: "南邮校科协创办至今已经走过31个年头，2023年是第32届。",
  },
  {
    title: "47 项",
    desc: "第27届科技节举办47项科创此赛，覆盖理、工、经、管、文、教、艺等各专业。",
  },
  {
    title: "290 项",
    desc: "校科协第32届中干及以上成员获得校级以上奖项290项。",
  },
  {
    title: "559 人",
    desc: "第32届南邮校科协各部门总计559人。",
  },
  {
    title: "362 ㎡",
    desc: "校科协在大学生活动中心拥有总计约362平方米的活动室空间。",
  },
  {
    title: "100 %",
    desc: "2020届毕业生中，曾经校科协成员毕业明确去向比例达100%。 ",
  },
];

export const ShowNumber = () => {
  return (
    <div className={styles["show-number-wrapper"]}>
      <h1 className={styles.title}>数说科协</h1>
      <div className={styles["number-container"]}>
        {data.map((item, index: number) => {
          return (
            <div className={styles["number-item"]} key={index}>
              <h1 className={NotoSansSCBold.className}>{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
