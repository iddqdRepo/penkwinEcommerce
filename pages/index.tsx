/* eslint-disable @next/next/no-img-element */

import styles from "../styles/Home.module.css";
import CardComponent from "../components/CardComponent/CardComponent";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";
import CustomerFavouritesContainer from "../components/CustomerFavouritesComponent/CustomerFavouritesComponent";
import InfoComponent from "../components/InfoComponent/InfoComponent";

const Home = () => {
  //testing branch frontend new after deletion
  return (
    <>
      <NavbarComponent />

      <img
        className={styles.heroBanner}
        src="/heroBannerImage.png"
        alt=""
        // style={{ boxShadow: "#000000 0px 30px 70px -20p" }}
      />

      <CardComponent />

      <CustomerFavouritesContainer />

      <InfoComponent />

      <div className={styles.workWithContainer}></div>

      <div className={styles.ourProductsContainer}></div>

      <div className={styles.testimonialContainer}></div>
    </>
  );
};

export default Home;
