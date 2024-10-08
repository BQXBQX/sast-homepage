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
      <div
        style={{
          padding: "0 12rem",
          backgroundColor: "black",
          background:
            "linear-gradient(145deg, #0d0d0d, #1a1a1a 40%, #262626, #0a0a0a)",
        }}
      >
        <div className={styles["introduction-wrapper"]}>
          <h2 className={styles["left-span"]}>
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
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                height: "3rem",
                width: "3rem",
                fontSize: "2rem",
                transform: "translate(-100%, 0)",
                border: "var(--divider-weight) solid var(--divider-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className={JetBrainsMono.className}
            >
              01
            </span>
          </h2>
          <div className={styles.right}>
            <h1>{t("desc")}</h1>
            <p>{t("content")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
