import React from "react";
import styles from "./index.module.scss";
import { SwiperArea } from "./swiperArea";
import { LngProps } from "@/types/lng";
import { useTranslation } from "@/lib/i18n/server";

interface CarouselProps extends LngProps {}
export const Carousel: React.FC<CarouselProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "carousel");
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "12rem",
          padding: "0 12rem",
          borderTop: "var(--divider-weight) solid var(--divider-color)",
          borderBottom: "var(--divider-weight) solid var(--divider-color)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderLeft: "var(--divider-weight) solid var(--divider-color)",
            borderRight: "var(--divider-weight) solid var(--divider-color)",
          }}
        ></div>
      </div>
      {/* <div> */}
      <div className={styles["carousel-wrapper"]}>
        <div
          style={{
            paddingTop: " 6rem",
            borderLeft: "var(--divider-weight) solid var(--divider-color)",
            borderRight: "var(--divider-weight) solid var(--divider-color)",
            overflow: "hidden",
          }}
        >
          <h1 className={styles.title}>{t("title")}</h1>
          <SwiperArea lng={lng}></SwiperArea>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
