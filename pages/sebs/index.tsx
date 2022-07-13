/* eslint-disable @next/next/no-img-element */
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import styles from "../products/[categories]/categories.module.css";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import InfoComponant from "../../components/InfoComponent/InfoComponent";

function Sebs() {
  return (
    <>
      <NavbarComponent />
      <div className={styles.heroImageContainer}>
        <img
          src="https://cdn.shopify.com/s/files/1/1225/6296/files/Banner_1_1280x267.png?v=1569947692"
          alt=""
        />
      </div>
      <div className={styles.titleDescContainer}>
        <div className={styles.headerTitle}>
          What is Styrene Ethylene Butylene Styrene (SEBS)?
        </div>
        <div className={styles.subtitle}>
          SEBS is used in everything from Toothbrushes and Mouth Guards to
          Nappies and Teethers.
        </div>
      </div>
      <InfoComponant
        title={"Quick Summary:"}
        desc={[
          "Styrene Ethylene Butylene Styrene is a type of TPE (Thermoplastic Elastomer) classed by Green Peace as an acceptable alternative to PVC in delicate products like children's toys.",
          "The most common building blocks for SEBS are PE (Polyethylene) and PP (Polypropylene). PE and PU don't need additives like lead and plasticizers for flexibility, which makes SEBs a safe, non-toxic material for the whole family.",
        ]}
        image="https://cdn.shopify.com/s/files/1/1225/6296/files/Long_image_test.png?v=1569947704"
        imageSide="left"
      />

      <FooterComponent />
    </>
  );
}

export default Sebs;
