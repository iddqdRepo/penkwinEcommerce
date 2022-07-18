import React from "react";
import styles from "./heroImageComponent.module.css";

function HeroImageComponent({ imageSource }: { imageSource: string }) {
  return (
    <div className={styles.heroImageContainer}>
      <img src={imageSource} alt="" />
    </div>
  );
}

export default HeroImageComponent;
