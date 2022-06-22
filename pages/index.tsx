/* eslint-disable @next/next/no-img-element */

import styles from "../styles/Home.module.css";
import CardComponent from "../components/CardComponent/CardComponent";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";
import CustomerFavouritesContainer from "../components/CustomerFavouritesComponent/CustomerFavouritesComponent";

const Home = () => {
  //testing branch frontend new after deletion
  return (
    <>
      <NavbarComponent />

      <img className={styles.heroBanner} src="/heroBannerImage.png" alt="" />

      <CardComponent />

      <CustomerFavouritesContainer />

      <div className={styles.riskContainer}></div>

      <div className={styles.workWithContainer}></div>

      <div className={styles.ourProductsContainer}></div>

      <div className={styles.testimonialContainer}></div>
    </>
  );
};

export default Home;
