import React from "react";
import styles from "./index.module.scss";
import { NotoSansSCBold } from "@/styles/fonts";

const data = [
  {
    title: "31年",
    desc: "南邮校科协创办至今已经走过31个年头，2023年是第32届。",
  },
  {
    title: "31年",
    desc: "南邮校科协创办至今已经走过31个年头，2023年是第32届。",
  },
  {
    title: "31年",
    desc: "南邮校科协创办至今已经走过31个年头，2023年是第32届。",
  },
  {
    title: "31年",
    desc: "南邮校科协创办至今已经走过31个年头，2023年是第32届。",
  },
  {
    title: "31年",
    desc: "南邮校科协创办至今已经走过31个年头，2023年是第32届。",
  },
  {
    title: "31年",
    desc: "南邮校科协创办至今已经走过31个年头，2023年是第32届。",
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
