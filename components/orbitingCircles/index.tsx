import { UnoptimizedImage } from "../unoptimizedImage";
import styles from "./index.module.scss";
export const OrbitingCircles = () => {
  return (
    <>
      <div className={styles["container"]}>
        <span className={styles["linear-span"]}>SAST</span>
        <svg width="100%" height="100%">
          <circle
            cx="50%"
            cy="50%"
            r="50%"
            stroke="rgb(206,206,206)"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="50%"
            cy="50%"
            r="35%"
            stroke="rgb(206,206,206)"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="50%"
            cy="50%"
            r="20%"
            stroke="rgb(206,206,206)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
        <div className={styles["evento-div"]}>
          <div></div>
          <UnoptimizedImage
            src="/project/evento.svg"
            alt="evento"
            height={50}
            width={50}
            className={styles.img}
          ></UnoptimizedImage>
        </div>
        {/* <div className={styles["oj-div"]}>
          <UnoptimizedImage
            src="/project/oj.svg"
            alt="oj"
            height={70}
            width={70}
          ></UnoptimizedImage>
        </div> */}
      </div>
    </>
  );
};
