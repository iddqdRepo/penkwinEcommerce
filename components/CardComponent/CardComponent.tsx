/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import styles from "./cardCompoment.module.css";

function CardComponent() {
  const cardSectionRef = useRef<null | HTMLDivElement>(null);
  const cardOneRef = useRef<null | HTMLDivElement>(null);
  const cardTwoRef = useRef<null | HTMLDivElement>(null);
  const cardThreeRef = useRef<null | HTMLDivElement>(null);
  const leftButtonRef = useRef<null | HTMLDivElement>(null);
  const rightButtonRef = useRef<null | HTMLDivElement>(null);
  const track = [{ center: false }, { center: true }, { center: false }];

  const resetMarginsToZero = (
    ...elements: React.RefObject<HTMLDivElement>[]
  ) => {
    elements.forEach((el) => {
      if (el.current != null) {
        el.current.style.marginRight = "0px";
        el.current.style.marginLeft = "0px";
      }
    });
    console.log("styles reset");
  };

  const focusRemoveOrUnfocusCards = (
    element: React.RefObject<HTMLDivElement>,
    action: string
  ) => {
    if (element.current != null) {
      if (action === "focus") {
        element.current.className = `${styles.card}  ${styles.cardFocused}`;
      }

      if (action === "unfocus") {
        element.current.className = `${styles.card}  ${styles.cardUnfocused}`;
      }

      if (action === "remove") {
        element.current.className = `${styles.card}  ${styles.remove}`;
      }
    }
  };

  const directionButton = (direction: String) => {
    resetMarginsToZero(cardOneRef, cardThreeRef);
    if (rightButtonRef.current != null && leftButtonRef.current != null) {
      rightButtonRef.current.className = `${styles.rightButtonContainer}`;
      leftButtonRef.current.className = `${styles.leftButtonContainer}`;
    }

    if (direction === "right") {
      //^if middle card is in focus (and cardThree and rightButton aren't null)
      if (track[1].center && cardThreeRef.current && rightButtonRef.current) {
        focusRemoveOrUnfocusCards(cardOneRef, "remove");
        focusRemoveOrUnfocusCards(cardTwoRef, "unfocus");
        cardThreeRef.current.style.marginRight = `${
          cardSectionRef.current!.offsetWidth
        }px`;
        focusRemoveOrUnfocusCards(cardThreeRef, "focus");
        rightButtonRef.current.className = `${styles.rightButtonContainer} ${styles.remove}`;
        track[1].center = false;
        track[2].center = true;
      } else {
        focusRemoveOrUnfocusCards(cardOneRef, "unfocus");
        focusRemoveOrUnfocusCards(cardTwoRef, "focus");
        focusRemoveOrUnfocusCards(cardThreeRef, "unfocus");
        resetMarginsToZero(cardOneRef);
        track[1].center = true;
        track[2].center = false;
        leftButtonRef.current!.className = `${styles.leftButtonContainer}`;
      }
    }

    if (direction === "left") {
      //^if middle card is in focus
      if (track[1].center && cardOneRef.current && leftButtonRef.current) {
        focusRemoveOrUnfocusCards(cardOneRef, "focus");
        cardOneRef.current.style.marginLeft = `${cardSectionRef.current?.offsetWidth}px`;
        focusRemoveOrUnfocusCards(cardTwoRef, "unfocus");
        focusRemoveOrUnfocusCards(cardThreeRef, "remove");
        leftButtonRef.current.className = `${styles.leftButtonContainer}  ${styles.remove}`;
        track[1].center = false;
        track[0].center = true;
      } else {
        focusRemoveOrUnfocusCards(cardOneRef, "unfocus");
        focusRemoveOrUnfocusCards(cardTwoRef, "focus");
        focusRemoveOrUnfocusCards(cardThreeRef, "unfocus");
        leftButtonRef.current!.className = `${styles.leftButtonContainer}`;
        resetMarginsToZero(cardOneRef);

        track[1].center = true;
        track[2].center = false;
      }
    }
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
            onClick={() => directionButton("left")}
          >
            <div className={styles.leftButtonImage}></div>
          </div>
          {/*//^----------------------------------------------------  CARD LEFT */}
          <div
            className={`${styles.card}  ${styles.cardUnfocused}`}
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
            className={`${styles.card} ${styles.cardFocused}`}
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
            className={`${styles.card}  ${styles.cardUnfocused}`}
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
          <div
            className={styles.rightButtonContainer}
            onClick={() => directionButton("right")}
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
