"use client";
import { useEffect, useState } from "react";
import { OrbitingCircles } from "../orbitingCircles";
import styles from "./index.module.scss";

export const Project = () => {
  const [hoverItem, setHoverItem] = useState<string>("");

  useEffect(() => {
    console.log(hoverItem);
  }, [hoverItem]);
  return (
    <div className={styles.container}>
      <OrbitingCircles onHover={setHoverItem}></OrbitingCircles>
      <>hello</>
    </div>
  );
};
