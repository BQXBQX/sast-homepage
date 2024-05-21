import React from "react";

import styles from "./page.module.scss";

import { First, Second } from "@/carousel";

export default function Home() {
  return (
    <main className={styles.main} style={{ overflow: "hidden" }}>
      <First></First>
      <Second></Second>
    </main>
  );
}
