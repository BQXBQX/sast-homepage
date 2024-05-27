import React from "react";
import styles from "./index.module.scss";
import { UnoptimizedImage } from "@/components/unoptimizedImage";

import ProjectsPic from "@/public/img/projects.svg";
import { LngProps } from "@/types/lng";
import { useTranslation } from "@/lib/i18n/server";

interface ProjectsProps extends LngProps {}

export const Projects: React.FC<ProjectsProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "projects");
  return (
    <div className={styles["projects-wrapper"]}>
      <h1 className={styles.title}>{t("title")}</h1>
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
