/* eslint-disable @next/next/no-img-element */

import styles from "../styles/Home.module.css";
import CardComponent from "../components/CardComponent/CardComponent";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";
import CustomerFavouritesContainer from "../components/CustomerFavouritesComponent/CustomerFavouritesComponent";
import InfoComponent from "../components/InfoComponent/InfoComponent";
import OurProducts from "../components/OurProductsComponent copy/OurProductsComponent";
import TestimonialComponent from "../components/TestimonialComponent/TestimonialComponent";
import FooterComponent from "../components/FooterComponent copy/FooterComponent";

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

      <OurProducts />

      <TestimonialComponent />

      <FooterComponent />
    </>
  );
};

export default Home;
