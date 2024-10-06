"use client";
import React from "react";
import { useTranslation } from "@/lib/i18n/client";
import styles from "./index.module.scss";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const sheetContentAnimation = {
  hidden: { opacity: 0, y: -5, x: "-50%", transition: { duration: 0.2 } },
  show: {
    opacity: 1,
    y: 0,
    x: "-50%",
    transition: { duration: 0.3, delay: 0.05 },
  },
};

export const Segment = () => {
  const params = useParams();
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const windowRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const activePath = useMemo(
    () => pathname.split("/")[2] ?? "home",
    [pathname],
  );
  const router = useRouter();

  const { t } = useTranslation(params.lng as unknown as string, "header");

  const segmentsContent = [
    { key: "home", value: t("home") },
    { key: "department", value: t("departmentIntroduction") },
    { key: "blog", value: t("eventBlog") },
    { key: "join", value: t("joinUs") },
  ];

  const updateWindowPosition = useCallback((key: string) => {
    const windowElement = windowRef.current;
    const targetItemElement = document.getElementById(key);
    if (windowElement && targetItemElement) {
      const targetRect = targetItemElement.getBoundingClientRect();
      const containerRect =
        targetItemElement.parentElement?.getBoundingClientRect();
      const offsetLeft = targetRect.left - (containerRect?.left || 0);

      windowElement.style.width = `${targetRect.width}px`;
      windowElement.style.height = `${targetRect.height}px`;
      windowElement.style.left = `${offsetLeft}px`;
    }
  }, []);

  useEffect(() => {
    if (hoverItem) {
      updateWindowPosition(hoverItem);
    }
  }, [hoverItem, activePath, updateWindowPosition]);

  useEffect(() => {
    if (!hoverItem) {
      updateWindowPosition(activePath);
    }
  }, [hoverItem, activePath, updateWindowPosition]);

  return (
    <motion.div
      className={styles["segment-container"]}
      onMouseLeave={() => setHoverItem(null)}
      variants={sheetContentAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      {segmentsContent.map((segmentContent) => (
        <span
          key={segmentContent.key}
          id={segmentContent.key}
          onMouseEnter={() => setHoverItem(segmentContent.key)} // Temporarily move on hover
          onClick={() =>
            router.push(
              `/${params.lng}/${segmentContent.key !== "home" ? segmentContent.key : ""}`,
            )
          }
        >
          {segmentContent.value}
        </span>
      ))}
      <div className={styles["window"]} ref={windowRef}></div>
    </motion.div>
  );
};
