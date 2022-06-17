import React, { useRef } from "react";
import styles from "./cardCompoment.module.css";
import Image from "next/image";

function CardComponent() {
  const cardOneRef = useRef(null);
  const cardTwoRef = useRef(null);
  const cardThreeRef = useRef(null);

  const leftButtonClick = () => {
    console.log("Left button clicked");
    console.log(cardOneRef.current.offsetWidth);
  };

  const rightButtonClick = () => {
    console.log("Right button clicked");
    // console.log(cardThreeRef.current.className);
  };

  return (
    <div className={styles.cardSectionContainer}>
      <div className={styles.cardTitleDescContainer}>
        <div className={styles.cardHeaderTitle}>
          WE&apos;VE DONE THE RESEARCH, SO YOU DON&apos;T HAVE TO.
        </div>
        <div className={styles.cardHeaderDescription}>
          Thousands of hours of painstaking research, laboratory testing and
          customer testing have gone towards creating Penkwin&apos;s precision
          engineered line of professional healthcare products.
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.sliderWindow}>
          <div className={styles.leftButtonContainer} onClick={leftButtonClick}>
            <div className={styles.leftButtonImage}></div>
          </div>
          <div
            className={`${styles.cardLeft} ${styles.cardFocused}`}
            style={{ marginLeft: "300px" }}
            ref={cardOneRef}
          >
            <Image
              className={styles.cardImage}
              src="/smallSliderPlantar.png"
              alt=""
            />
            <div className={styles.cardSection}>
              <div className={styles.cardTitle}>Plantar Fasciitis</div>
              <div className={styles.cardDescription}>
                Get back to doing what you love. Penkwin&apos;s products are
                there for you, every step of the way.
              </div>
              <button className={styles.cardButton}>Learn More</button>
            </div>
          </div>
          <div
            className={`${styles.cardMiddle} ${styles.cardUnfocused}`}
            ref={cardTwoRef}
          >
            <Image
              className={styles.cardImage}
              src="/smallSliderBunion.png"
              alt=""
            />
            <div className={styles.cardSection}>
              <div className={styles.cardTitle}>Bunions</div>
              <div className={styles.cardDescription}>
                From pain relief to correction, our selection of bunion products
                will make your toes smile.
              </div>
              <button className={styles.cardButton}>Learn More</button>
            </div>
          </div>
          <div
            className={`${styles.cardRight} ${styles.cardUnocused} ${styles.remove} `}
            // style={{ marginRight: "300px" }}
            ref={cardThreeRef}
          >
            <Image
              className={styles.cardImage}
              src="/smallSliderTailbone.png"
              alt=""
            />
            <div className={styles.cardSection}>
              <div className={styles.cardTitle}>Tailbone Pain</div>
              <div className={styles.cardDescription}>
                Make tailbone pain a thing of the past, Penkwin&apos;s coccyx
                products will make you feel like you&apos;re sitting on a cloud.
              </div>
              <button className={styles.cardButton}>Learn More</button>
            </div>
          </div>
          <div
            className={styles.rightButtonContainer}
            onClick={rightButtonClick}
          >
            <div className={styles.rightButtonImage}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
