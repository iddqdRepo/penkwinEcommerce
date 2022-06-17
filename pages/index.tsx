import styles from "../styles/home.module.css";
import CardComponent from "../components/CardComponent/CardComponent";

const Home = () => {
  //testing branch frontend new after deletion
  return (
    <>
      <div className={styles.heroBanner}>Hero Image</div>
      <CardComponent />

      <div className={styles.customerFavouritesContainer}></div>

      <div className={styles.riskContainer}></div>

      <div className={styles.workWithContainer}></div>

      <div className={styles.ourProductsContainer}></div>

      <div className={styles.testimonialContainer}></div>
    </>
  );
};

export default Home;
