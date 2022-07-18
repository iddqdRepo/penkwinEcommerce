/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import CardComponent from "../components/CardComponent/CardComponent";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";
import CustomerFavouritesContainer from "../components/CustomerFavouritesComponent/CustomerFavouritesComponent";
import InfoComponent from "../components/InfoComponent/InfoComponent";
import OurProducts from "../components/OurProductsComponent/OurProductsComponent";
import TestimonialComponent from "../components/TestimonialComponent/TestimonialComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import TitleHeaderComponent from "../components/TitleHeaderComponent/TitleHeaderComponent";
import dbConnect from "../utils/dbConnect.js";
import productsModel from "../Models/productsModel";
import { stringifyIdsAndDates } from "../utils/stringifyIdsAndDates";
// import categoryModel from "./../Models/categoryModel";
import HeroImageComponent from "../components/HeroImageComponent/HeroImageComponent";
const Home = ({ products }: { products: any }) => {
  console.log("products = ", products);

  return (
    <>
      <NavbarComponent />
      <HeroImageComponent imageSource="/heroBannerImage.png" />

      <CardComponent />
      <div className={styles.spacerHundred}></div>

      <TitleHeaderComponent
        title="Customer Favourites"
        subtitle=""
        description={
          "Our established products are made with you in mind, perfectly formulated to fit your needs."
        }
      />
      <div className={styles.spacerFifty}></div>

      <CustomerFavouritesContainer />
      <div className={styles.spacerHundred}></div>

      <InfoComponent
        title={"It's our risk, not yours."}
        desc={
          "Penkwin is so proud to have helped over 50,000 people all over the world. We love our customers and our customers love us! This is why we offer a lifetime guarantee with no questions asked returns and refunds on all our products."
        }
        image={"/50kProductsSold.png"}
        imageSide={"right"}
      />
      <InfoComponent
        title={"We work with you, not against you."}
        desc={
          "Penkwin is a company that specialise in various ranges of foot care products, orthotics and inflatable cushions. We are Northern Ireland based company that is dedicated to providing 100% medical grade, affordable products, 5* customer service and brilliant prices to all of our customers."
        }
        image={"/handHeartImage.png"}
        imageSide={"left"}
      />
      <div className={styles.spacerHundred}></div>

      <TitleHeaderComponent title={"Featured Products"} description={""} />
      <div className={styles.spacerFifty}></div>

      <OurProducts products={products} />
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

export async function getStaticProps() {
  dbConnect();
  const allProductsData = await productsModel.find({ featured: true }).lean();
  stringifyIdsAndDates(allProductsData);
  return { props: { products: allProductsData } };
}
