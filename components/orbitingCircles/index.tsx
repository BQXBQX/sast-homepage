import { UnoptimizedImage } from "../unoptimizedImage";
import styles from "./index.module.scss";

interface OrbitingCirclesProps {
  onHover: (value: string) => void;
}
export const OrbitingCircles = (props: OrbitingCirclesProps) => {
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
        <div
          className={styles["evento-div"]}
          onMouseEnter={() => props.onHover("evento")}
        >
          <UnoptimizedImage
            src="/project/evento.svg"
            alt="evento"
            height={60}
            width={60}
            className={styles["evento-img"]}
          ></UnoptimizedImage>
        </div>
        <div
          className={styles["oj-div"]}
          onMouseEnter={() => props.onHover("oj")}
        >
          <UnoptimizedImage
            src="/project/oj.svg"
            alt="oj"
            height={50}
            width={50}
            className={styles["oj-img"]}
          ></UnoptimizedImage>
        </div>
        <div
          className={styles["approve-div"]}
          onMouseEnter={() => props.onHover("approve")}
        >
          <UnoptimizedImage
            src="/project/approve.svg"
            alt="oj"
            height={30}
            width={30}
            className={styles["approve-img"]}
          ></UnoptimizedImage>
        </div>
        <div
          className={styles["img-div"]}
          onMouseEnter={() => props.onHover("img")}
        >
          <UnoptimizedImage
            src="/project/img.svg"
            alt="oj"
            height={50}
            width={50}
            className={styles["img-img"]}
          ></UnoptimizedImage>
        </div>
        <div
          className={styles["link-div"]}
          onMouseEnter={() => props.onHover("link")}
        >
          <UnoptimizedImage
            src="/project/link.svg"
            alt="oj"
            height={50}
            width={55}
            className={styles["link-img"]}
          ></UnoptimizedImage>
        </div>
        <div
          className={styles["ui-div"]}
          onMouseEnter={() => props.onHover("ui")}
        >
          <UnoptimizedImage
            src="/project/ui.svg"
            alt="oj"
            height={40}
            width={40}
            className={styles["ui-img"]}
          ></UnoptimizedImage>
        </div>
      </div>
    </>
  );
};
