/* eslint-disable @next/next/no-img-element */
import { Key } from "react";
import styles from "./infoCompoment.module.css";

function InfoComponent({
  title,
  desc,
  image,
  imageSide,
  imageType,
}: {
  title: string;
  desc: string | string[];
  image: string;
  imageSide: string;
  imageType: string;
}) {
  return imageSide === "right" ? (
    <div className={styles.infoContainer}>
      <div className={styles.textContainer}>
        <div className={styles.title}>{title}</div>
        {Array.isArray(desc) ? (
          desc.map((bullet) => {
            return (
              <li key={bullet as Key} className={styles.infoBullet}>
                {bullet}
              </li>
            );
          })
        ) : (
          <pre className={styles.description}>{desc}</pre>
        )}
      </div>
      <div className={styles.imageContainer}>
        {imageType === "square" ? (
          <img className={styles.imageSquare} src={image} alt="" />
        ) : (
          <img className={styles.image} src={image} alt="" />
        )}
      </div>
    </div>
  ) : (
    <div className={styles.infoContainer}>
      <div className={styles.imageContainerLeft}>
        {imageType === "square" ? (
          <img className={styles.imageSquare} src={image} alt="" />
        ) : (
          <img className={styles.imageLeft} src={image} alt="" />
        )}
      </div>
      <div className={styles.textContainerLeft}>
        <div className={styles.title}>{title}</div>
        {Array.isArray(desc) ? (
          desc.map((bullet) => {
            return (
              <li key={bullet as Key} className={styles.infoBullet}>
                {bullet}
              </li>
            );
          })
        ) : (
          <div className={styles.description}>{desc}</div>
        )}
      </div>
    </div>
  );
}

export default InfoComponent;
