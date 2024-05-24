import React from "react";
import styles from "./index.module.scss";
import { UnoptimizedImage } from "@/components/unoptimizedImage";

import ProjectsPic from "@/public/img/projects.svg";
export const Projects = () => {
  return (
    <div className={styles["projects-wrapper"]}>
      <h1 className={styles.title}>科协LAB</h1>
      <div className={styles.content}>
        <UnoptimizedImage
          src={ProjectsPic}
          alt="projects"
          className={styles.img}
        />
        <UnoptimizedImage
          src={ProjectsPic}
          alt="projects"
          className={styles.img}
        />
      </div>
    </div>
  );
};
