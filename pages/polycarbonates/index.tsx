/* eslint-disable @next/next/no-img-element */
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import styles from "../products/[categories]/categories.module.css";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import InfoComponant from "../../components/InfoComponent/InfoComponent";

function Polycarbonates() {
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
        <div className={styles.headerTitle}>What are Polycarbonates (PC)?</div>
        <div className={styles.subtitle}>
          Long story short: Polycarbonates are one of the most commonly used and
          widely tested materials in the medical device industry.
        </div>
      </div>
      <InfoComponant
        title={"Quick Summary:"}
        desc={[
          "Polycarbonate is given the highest industry standard ratings for consistency, purity, and quality. This material is used to ensure the protection and safety of patients across the world.",
          "They are one of the most commonly used and widely tested materials in the medical device industry and have been used in medical products for over 50 years.",
          "Polycarbonate is a very stable and heat resistant material which means that it is reliable and performs well under pressure. Perfect for use in a wide variety of devices. It is so safe that it is trusted in even the most crucial medical equipment (even arterial filters and medical connectors).",
        ]}
        image="https://cdn.shopify.com/s/files/1/1225/6296/files/Long_image_2.png?v=1569947713"
        imageSide="left"
      />

      <FooterComponent />
    </>
  );
}

export default Polycarbonates;
