import React from "react";

import styles from "./page.module.scss";
import {
  Carousel,
  HeroImage,
  Introduction,
  JoinUs,
  Projects,
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
      <Projects></Projects>
      <Carousel></Carousel>
      <JoinUs></JoinUs>
    </main>
  );
}
