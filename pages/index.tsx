/* eslint-disable @next/next/no-img-element */

import styles from "../styles/Home.module.css";
import CardComponent from "../components/CardComponent/CardComponent";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";
import CustomerFavouritesContainer from "../components/CustomerFavouritesComponent/CustomerFavouritesComponent";
import InfoComponent from "../components/InfoComponent/InfoComponent";
import OurProducts from "../components/OurProductsComponent copy/OurProductsComponent";
import TestimonialComponent from "../components/TestimonialComponent/TestimonialComponent";
import FooterComponent from "../components/FooterComponent copy/FooterComponent";
import TitleHeaderComponent from "../components/TitleHeaderComponent/TitleHeaderComponent";
const Home = () => {
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
      <div className={styles.spacerHundred}></div>

      <TitleHeaderComponent
        title={"Customer Favourites"}
        description={
          "Our established products are made with you in mind, perfectly formulated to fit your needs."
        }
      />
      <div className={styles.spacerFifty}></div>

      <CustomerFavouritesContainer />
      <div className={styles.spacerHundred}></div>

      <InfoComponent />
      <div className={styles.spacerHundred}></div>

      <TitleHeaderComponent title={"Featured Products"} description={""} />
      <div className={styles.spacerFifty}></div>

      <OurProducts />
      <div className={styles.spacerHundred}></div>

      <TitleHeaderComponent
        title={"What Some Customers Have To Say"}
        description={""}
      />

      <TestimonialComponent />
      <div className={styles.spacerHundred}></div>

      <FooterComponent />
    </>
  );
};

export default Home;
