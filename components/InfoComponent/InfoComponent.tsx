/* eslint-disable @next/next/no-img-element */
import styles from "./infoCompoment.module.css";

function InfoComponent({
  title,
  desc,
  image,
  imageSide,
}: {
  title: string;
  desc: string;
  image: string;
  imageSide: string;
}) {
  return imageSide === "right" ? (
    <div className={styles.infoContainer}>
      <div className={styles.textContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{desc}</div>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt="" />
      </div>
    </div>
  ) : (
    <div className={styles.infoContainer}>
      <div className={styles.imageContainerLeft}>
        <img className={styles.imageLeft} src={image} alt="" />
      </div>
      <div className={styles.textContainerLeft}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{desc}</div>
      </div>
    </div>
  );
}

export default InfoComponent;
