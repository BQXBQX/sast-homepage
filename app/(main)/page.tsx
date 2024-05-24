import React from "react";

import styles from "./page.module.scss";
import {
  Carousel,
  HeroImage,
  Introduction,
  JoinUs,
  ShowNumber,
  // StoryBegin,
  Welcome,
} from "@/components";

// import { First, Second } from "@/carousel";

export default function Home() {
  return (
    <main className={styles.main} style={{ overflow: "hidden" }}>
      <Welcome></Welcome>
      <HeroImage></HeroImage>
      <Introduction></Introduction>
      <ShowNumber></ShowNumber>
      <Carousel></Carousel>
      <JoinUs></JoinUs>
      {/* <StoryBegin></StoryBegin> */}
      {/* <First></First> */}
      {/* <Second></Second> */}
    </main>
  );
}
