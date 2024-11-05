import React from "react";
import styles from "./index.module.scss";
import { LngProps } from "@/types/lng";
import { useTranslation } from "@/lib/i18n/server";
import { Smile } from "lucide-react";
import { JetBrainsMono } from "@/styles/fonts";

interface IntroductionProps extends LngProps {}

export const Introduction: React.FC<IntroductionProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "introduction");
  return (
    <div>
      <div className={styles["up-space"]}>
        <div></div>
      </div>
      <div className={styles["introduction-container"]}>
        <div className={styles["introduction-wrapper"]}>
          <div className={styles["left-span"]}>
            {t("title")}
            <Smile
              style={{
                position: "absolute",
                bottom: "2rem",
                right: "2rem",
                width: "5rem",
                height: "5rem",
                rotate: "15deg",
              }}
              color="#EEAC4C"
            />
            <span
              className={`${JetBrainsMono.className} ${styles["index-number"]}`}
            >
              01
            </span>
          </div>
          <div className={styles.right}>
            <h1>{t("desc")}</h1>
            <p>{t("content")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
