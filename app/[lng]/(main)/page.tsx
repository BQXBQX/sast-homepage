import React from "react";

import styles from "./page.module.scss";
import Content from "./content";
import { LngType } from "@/types/lng";

interface HomeProps {
  params: Promise<{ lng: LngType }>;
}

export default async function Home({ params }: HomeProps) {
  const { lng } = await params;
  return (
    <main className={styles.main} style={{ overflow: "hidden" }}>
      <Content lng={lng} />
    </main>
  );
}
