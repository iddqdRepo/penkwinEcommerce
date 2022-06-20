/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import styles from "./cardCompoment.module.css";

function CardComponent() {
  const cardSectionRef = useRef(null);
  const cardOneRef = useRef<HTMLDivElement>(null);
  const cardTwoRef = useRef<HTMLDivElement>(null);
  const cardThreeRef = useRef<HTMLDivElement>(null);
  const leftButtonRef = useRef<HTMLDivElement>(null);
  const rightButtonRef = useRef<HTMLDivElement>(null);
  const track = [{ center: false }, { center: true }, { center: false }];

  const resetStyle = (...elements) => {
    console.log("elements = ", elements);
    elements.forEach((el) => {
      el.current.style.marginRight = "0px";
      el.current.style.marginLeft = "0px";
    });
    console.log("styles reset");
  };

  const leftButtonClick = () => {
    // cardOneRef.current.style.marginRight = "0px";
    // cardOneRef.current.style.marginLeft = "0px";
    // cardThreeRef.current.style.marginRight = "0px";
    // cardThreeRef.current.style.marginLeft = "0px";
    resetStyle(cardOneRef, cardThreeRef);
    rightButtonRef.current.className = `${styles.rightButtonContainer}`;
    leftButtonRef.current.className = `${styles.leftButtonContainer}`;
    //^if it's the middle focused
    if (track[1].center === true) {
      console.log(cardSectionRef.current.offsetWidth);
      cardOneRef.current.className = `${styles.cardLeft}  ${styles.cardFocused}`;
      cardOneRef.current.style.marginLeft = `${cardSectionRef.current.offsetWidth}px`;
      cardTwoRef.current.className = `${styles.cardMiddle}  ${styles.cardUnfocused}`;
      cardThreeRef.current.className = `${styles.cardRight}  ${styles.remove}`;
      leftButtonRef.current.className = `${styles.leftButtonContainer}  ${styles.remove}`;
      track[1].center = false;
      track[0].center = true;
    } else {
      cardOneRef.current.className = `${styles.cardLeft}  ${styles.cardUnfocused}`;
      cardTwoRef.current.className = `${styles.cardMiddle}  ${styles.cardFocused}`;
      cardThreeRef.current.className = `${styles.cardRight}  ${styles.cardUnfocused}`;
      leftButtonRef.current.className = `${styles.leftButtonContainer}`;
      cardOneRef.current.style.marginRight = "0px";
      cardOneRef.current.style.marginLeft = "0px";
      track[1].center = true;
      track[2].center = false;
    }
    console.log(track);
  };

  const rightButtonClick = () => {
    resetStyle(cardOneRef, cardThreeRef);

    rightButtonRef.current.className = `${styles.rightButtonContainer}`;
    leftButtonRef.current.className = `${styles.leftButtonContainer}`;

    if (
      cardOneRef.current != null &&
      cardTwoRef.current != null &&
      cardThreeRef.current != null
    ) {
      if (track[1].center) {
        console.log("rightButtonClicked");
        console.log(cardSectionRef.current.offsetWidth);
        cardOneRef.current.className = `${styles.cardLeft} ${styles.remove}`;
        cardTwoRef.current.className = `${styles.cardMiddle} ${styles.cardUnfocused}`;
        cardThreeRef.current.style.marginRight = `${cardSectionRef.current.offsetWidth}px`;
        cardThreeRef.current.className = `${styles.cardLeft} ${styles.cardFocused}`;
        rightButtonRef.current.className = `${styles.rightButtonContainer} ${styles.remove}`;
        track[1].center = false;
        track[2].center = true;
      } else {
        cardOneRef.current.className = `${styles.cardLeft} ${styles.cardUnfocused}`;
        cardTwoRef.current.className = `${styles.cardMiddle} ${styles.cardFocused}`;
        cardThreeRef.current.className = `${styles.cardRight} ${styles.cardUnfocused}`;
        cardOneRef.current.style.marginRight = "0px";
        cardOneRef.current.style.marginLeft = "0px";
        track[1].center = true;
        track[2].center = false;
        leftButtonRef.current.className = `${styles.leftButtonContainer}`;
      }
    }
    console.log(track);
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
          <div
            className={styles.leftButtonContainer}
            ref={leftButtonRef}
            onClick={leftButtonClick}
          >
            <div className={styles.leftButtonImage}></div>
          </div>
          {/*//^----------------------------------------------------  CARD LEFT */}
          <div
            className={`${styles.cardLeft}  ${styles.cardUnfocused}`}
            // style={{ marginLeft: "300px" }}
            ref={cardOneRef}
          >
            <img
              className={styles.cardImage}
              src="/smallSliderPlantar.png"
              alt=""
            />
            <div className={styles.cardSection} ref={cardSectionRef}>
              <div className={styles.cardTitle}>Plantar Fasciitis</div>
              <div className={styles.cardDescription}>
                Get back to doing what you love. Penkwin&apos;s products are
                there for you, every step of the way.
              </div>
              <button className={styles.cardButton}>Learn More</button>
            </div>
          </div>
          {/*//^----------------------------------------------------  CARD MIDDLE */}
          <div
            className={`${styles.cardMiddle} ${styles.cardFocused}`}
            ref={cardTwoRef}
          >
            <img
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
          {/*//^----------------------------------------------------  CARD RIGHT */}
          <div
            className={`${styles.cardLeft}  ${styles.cardUnfocused}`}
            ref={cardThreeRef}
          >
            <img
              className={styles.cardImage}
              src="/smallSliderPlantar.png"
              alt=""
            />
            <div className={styles.cardSection} ref={cardSectionRef}>
              <div className={styles.cardTitle}>Plantar Fasciitis</div>
              <div className={styles.cardDescription}>
                Get back to doing what you love. Penkwin&apos;s products are
                there for you, every step of the way.
              </div>
              <button className={styles.cardButton}>Learn More</button>
            </div>
          </div>

          {/* <div
            className={`${styles.cardRight} ${styles.cardUnfocused}`}
            // ${styles.remove}
            // style={{ marginRight: "300px" }}
            ref={cardThreeRef}
          >
            <img
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
          </div> */}

          <div
            className={styles.rightButtonContainer}
            onClick={rightButtonClick}
            ref={rightButtonRef}
          >
            <div className={styles.rightButtonImage}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
