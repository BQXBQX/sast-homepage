import React from "react";

import styles from "./page.module.scss";

import { First, Second, Third } from "@/carousel";

export default function Home() {
  return (
    <main className={styles.main} style={{ overflow: "hidden" }}>
      <First></First>
      <Second></Second>
      <Third />
    </main>
  );
}
