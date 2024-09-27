"use client";
import React from "react";

import Link from "next/link";
import styles from "./index.module.scss";
import { useRef } from "react";
import { UnoptimizedImage } from "@/components";

import sastLogo from "@/public/img/sast_logo_black.png";
import { useTranslation } from "@/lib/i18n/client";
import { useParams } from "next/navigation";
const Footer = () => {
  const year = useRef(new Date().getFullYear());
  const params = useParams();
  const { t } = useTranslation(params.lng as unknown as string, "footer");
  return (
    <footer className={styles.footerWrap}>
      <div className={styles.footerBody}>
        <UnoptimizedImage src={sastLogo} alt={"logo"} width={100} height={65} />
        <div className={styles.footerSection}>
          <div className={styles.title}>{t("serve")}</div>
          <div className={styles.content}>
            <div className={styles.link}>
              <Link href={"https://link.sast.fun"}>Link</Link>
            </div>
            <div className={styles.link}>
              <Link href={"https://oj.sast.fun"}>OnlineJudge</Link>
            </div>
            <div className={styles.link}>
              <Link href={"https://evento.sast.fun"}>Evento</Link>
            </div>
            <div className={styles.link}>
              <Link href={"https://approve.sast.fun"}>Approve</Link>
            </div>
            <div className={styles.link}>
              <Link href={"https://freshcup.sast.fun"}>FreshCup</Link>
            </div>
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.title}>{t("community")}</div>
          <div className={styles.content}>
            <Link
              className={styles.link}
              href={"https://github.com/NJUPT-SAST"}
            >
              GitHub
            </Link>
            <div className={styles.link}>FeiShu</div>
            <div className={styles.link}>QQ</div>
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.title}>{t("contact")}</div>
          <div className={styles.content}>
            <div className={styles.item}>
              Email: <Link href={"mailto:sast@sast.fun"}>sast@sast.fun</Link>
            </div>
            <div className={styles.item}>{t("position")}</div>
          </div>
        </div>
      </div>
      <div className={styles.divide} />
      <div className={styles.bottom}>
        <div className={styles.item}>&copy; 1992-{year.current} SAST</div>
        <div className={styles.item}>
          Powered by SAST Software R&D Department
        </div>
      </div>
    </footer>
  );
};

export default Footer;
