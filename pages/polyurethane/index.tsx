/* eslint-disable @next/next/no-img-element */
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import styles from "../products/[categories]/categories.module.css";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import InfoComponant from "../../components/InfoComponent/InfoComponent";

function Polyurethane() {
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
        <div className={styles.headerTitle}>What is Polyurethane (PU)?</div>
        <div className={styles.subtitle}>
          From catheters to implants, Polyurethane is used in thousands of
          medical devices all over the world.{" "}
        </div>
      </div>
      <InfoComponant
        title={"Quick Summary:"}
        desc={[
          "Polyurethane is a polymer made up of organic units joined by urethane link. It is a safe compound used to create millions of products in every day use from mattresses to sportwear.",
          "Polyurethane has been specially formulated to to be high strength, versatile and durable which means it outperforms many other materials in flexibility and tear resistance which makes it perfect for use in medical applications.",
        ]}
        image="https://cdn.shopify.com/s/files/1/1225/6296/files/Long_image_3.png?v=1569947741"
        imageSide="left"
      />

      <FooterComponent />
    </>
  );
}

export default Polyurethane;
