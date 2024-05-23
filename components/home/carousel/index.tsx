import React from "react";
import styles from "./index.module.scss";
import { Second } from "@/carousel";
export const Carousel = () => {
  return (
    <div className={styles["carousel-wrapper"]}>
      <h1 className={styles.title}>他们眼里的科协</h1>
      <Second></Second>
    </div>
  );
};
