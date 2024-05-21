"use client";
import React from "react";

import "swiper/scss";

import styles from "./index.module.scss";
import { WelcomeCard } from "./welcomeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { WhoWeAreCard } from "./whoWeAreCard";
// import { Pagination } from "@/components";

export const First = () => {
  return (
    <>
      <div className={styles["first-container"]}>
        <Swiper
          className={styles["first-swiper"]}
          centeredSlides={true}
          spaceBetween={12}
          slidesPerView={"auto"}
          parallax={true}
          slideToClickedSlide={true}
          grabCursor={true}
        >
          <SwiperSlide className={styles["swiper-item"]}>
            <WelcomeCard />
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-item"]}>
            <WhoWeAreCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
