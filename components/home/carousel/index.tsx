import React from "react";
import styles from "./index.module.scss";
import { SwiperArea } from "./swiperArea";
import { LngProps } from "@/types/lng";
import { useTranslation } from "@/lib/i18n/server";

interface CarouselProps extends LngProps {}
export const Carousel: React.FC<CarouselProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "carousel");
  return (
    <div className={styles["carousel-wrapper"]}>
      <h1 className={styles.title}>{t("title")}</h1>
      <SwiperArea lng={lng}></SwiperArea>
    </div>
  );
};
