"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { CarouselCard } from "./carouselCard";
import pic1 from "@/public/img/second1.jpg";
import pic2 from "@/public/img/second2.jpg";
import pic3 from "@/public/img/second3.jpg";
import pic4 from "@/public/img/second4.jpg";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./index.module.scss";
import { NotoSansSC } from "@/styles/fonts";
import { LngProps } from "@/types/lng";
import { useTranslation } from "@/lib/i18n/client";

interface SwiperAreaProps extends LngProps {}

export const SwiperArea: React.FC<SwiperAreaProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "swiperArea");
  return (
    <div
      className={`${NotoSansSC.className} ${styles["swiper-area-container"]}`}
    >
      <div className={styles["swiper-area-wrapper"]}>
        <div className={styles["card-container"]}>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            className={styles.swiper}
          >
            <SwiperSlide className={styles["swiper-item"]}>
              <CarouselCard
                title={t("title-1")}
                desc={t("desc-1")}
                backgroundImg={pic1}
              ></CarouselCard>
            </SwiperSlide>
            <SwiperSlide className={styles["swiper-item"]}>
              <CarouselCard
                title={t("title-2")}
                desc={t("desc-2")}
                backgroundImg={pic2}
                svgRightPosition="-16%"
              ></CarouselCard>
            </SwiperSlide>
            <SwiperSlide className={styles["swiper-item"]}>
              <CarouselCard
                title={t("title-3")}
                desc={t("desc-3")}
                backgroundImg={pic3}
                svgRightPosition="-6%"
                svgBottomPosition="-18%"
              ></CarouselCard>
            </SwiperSlide>
            <SwiperSlide className={styles["swiper-item"]}>
              <CarouselCard
                title={t("title-4")}
                desc={t("desc-4")}
                backgroundImg={pic4}
                svgRightPosition="-6%"
              ></CarouselCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
