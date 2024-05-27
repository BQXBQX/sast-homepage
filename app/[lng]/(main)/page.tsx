import React from "react";

import styles from "./page.module.scss";
import Content from "./content";
import { LngType } from "@/types/lng";

interface HomeProps {
  params: { lng: LngType };
}

export default function Home({ params }: HomeProps) {
  return (
    <main className={styles.main} style={{ overflow: "hidden" }}>
      <Content lng={params.lng} />
    </main>
  );
}
