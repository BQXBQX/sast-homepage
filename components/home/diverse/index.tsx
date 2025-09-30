import React from "react";
import styles from "./index.module.scss";
import EngineeringSvg from "@/public/img/Engineering.svg";
import WorldSvg from "@/public/img/world.svg";
import SmallBulbSvg from "@/public/img/smallBulb.svg";
import { UnoptimizedImage } from "@/components/unoptimizedImage";
import { JetBrainsMono, NotoSansSCBold, sacramento } from "@/styles/fonts";
// import { Button } from "@/components/button";
import { LngProps } from "@/types/lng";
import { useTranslation } from "@/lib/i18n/server";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/button";

interface JoinUsProps extends LngProps {}

export const Diverse: React.FC<JoinUsProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "joinUs");
  const data = [
    {
      svg: (
        <UnoptimizedImage
          className={styles.svg}
          src={EngineeringSvg}
          alt="engineering"
        />
      ),
      title: t("title-1"),
      desc: t("content-1"),
      link: t("button-1"),
    },
    {
      svg: (
        <UnoptimizedImage
          className={styles.svg}
          src={WorldSvg}
          alt="engineering"
        />
      ),
      title: t("title-2"),
      desc: t("content-2"),
      link: t("button-2"),
    },
    {
      svg: (
        <UnoptimizedImage
          className={styles.svg}
          src={SmallBulbSvg}
          alt="engineering"
        />
      ),
      title: t("title-3"),
      desc: t("content-3"),
      link: t("button-3"),
    },
  ];

  return (
    <>
      <div className={styles["join-us-wrapper"]}>
        <div
          style={{
            height: "8rem",
            borderTop: "var(--divider-weight) solid var(--divider-color)",
            borderBottom: "var(--divider-weight) solid var(--divider-color)",
            padding: "0 12rem",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              borderRight: "var(--divider-weight) solid var(--divider-color)",
              borderLeft: "var(--divider-weight) solid var(--divider-color)",
            }}
          ></div>
        </div>
        <div
          style={{
            margin: "0 12rem",
            borderLeft: "var(--divider-weight) solid var(--divider-color)",
            borderRight: "var(--divider-weight) solid var(--divider-color)",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              height: "3rem",
              width: "3rem",
              fontSize: "2rem",
              transform: "translate(-100%, 0)",
              border: "var(--divider-weight) solid var(--divider-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "9999",
            }}
            className={JetBrainsMono.className}
          >
            04
          </span>
          <h1 className={styles.title}>{t("title")}</h1>
          <div className={styles.content}>
            <div className={styles.left}>
              {data.map((item, index) => {
                return (
                  <div key={index} className={styles.item}>
                    {item.svg}
                    <h2 className={NotoSansSCBold.className}>{item.title}</h2>
                    <p className={styles.desc}>{item.desc}</p>
                    <p className={styles.link}>
                      {item.link} <ArrowRight className={styles.svg} />
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "8rem",
          outline: "var(--divider-weight) solid var(--divider-color)",
          padding: "0 12rem",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            borderRight: "var(--divider-weight) solid var(--divider-color)",
            borderLeft: "var(--divider-weight) solid var(--divider-color)",
          }}
        ></div>
      </div>
      <div className={styles.bottom}>
        <span
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            height: "3rem",
            width: "3rem",
            fontSize: "2rem",
            transform: "translate(-100%, 0)",
            border: "var(--divider-weight) solid var(--divider-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "9999",
          }}
          className={JetBrainsMono.className}
        >
          05
        </span>
        <h2 className={NotoSansSCBold.className}>{t("calling")}</h2>
        <div
          style={{
            padding: "3rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <span className={sacramento.className} style={{ fontSize: "2rem" }}>
            Saster Igniting the thought.
          </span>
          <a
            href="https://njupt-sast.feishu.cn/wiki/TbcJwtET4iCBweks34ycGSyonze?from=tab_home&view=vewX5jpH4H#share-GAWxdmnBboAG71xSe29cSd5cnYb"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button className={styles.button}>
            {t("joinus")}
            <ArrowRight className={styles.svg} />
          </Button>
          </a>
        </div>
      </div>
      <div
        style={{
          height: "8rem",
          outline: "var(--divider-weight) solid var(--divider-color)",
          padding: "0 12rem",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            borderRight: "var(--divider-weight) solid var(--divider-color)",
            borderLeft: "var(--divider-weight) solid var(--divider-color)",
          }}
        ></div>
      </div>
    </>
  );
};
