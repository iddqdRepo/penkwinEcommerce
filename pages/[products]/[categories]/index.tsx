import NavbarComponent from "../../../components/NavbarComponent/NavbarComponent";
import OurProducts from "../../../components/OurProductsComponent copy/OurProductsComponent";
// import data from "../../../dummyData/products";
import styles from "./categories.module.css";
function Categories() {
  return (
    <>
      <NavbarComponent />
      <div className={styles.heroImageContainer}>
        <img src="/peopleSitting.png" alt="" />
      </div>

      <div className={styles.titleDescContainer}>
        <div className={styles.headerTitle}>Penkwin® Medical Cushions</div>
        <div className={styles.subtitle}>
          Pain Relief Designed with You in Mind
        </div>
        <div className={styles.headerDescription}>
          The Penkwin® Orthopaedic Ring Pillow Dramatically Reduces Pain and
          Helps You to Rest Easy. Improve your quality of life with a medical
          pillow designed to reduce pressure and remove discomfort from the part
          of your body where you feel it most
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <div className={styles.title}>COMFORT, TAILORED TO YOU.</div>
          <div className={styles.description}>
            <ul>
              <li className={styles.infoBullet}>
                Get instant relief with this{" "}
                <span className={styles.bold}>fully adjustable pillow</span>{" "}
                which moulds to your body and your needs quickly, it&apos;s as
                simple as changing the air inside.
              </li>
              <li className={styles.infoBullet}>
                Designed to provide gentle support everywhere whether in the
                car, shower, sofa or wheelchair.
              </li>
              <li className={styles.infoBullet}>
                We only use medical grade materials so you can rest assured that
                your pillow won&apos;t crack, deflate or otherwise let you down
                when you need it most.
              </li>
              <li className={styles.infoBullet}>
                Safely hypoallergenic and washable you can avoid those
                embarrassing squeaks and smells and focus on getting you back to
                being you.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://cdn.shopify.com/s/files/1/1225/6296/files/Woman_sitting_png.png?v=1569944045"
            alt=""
          />
        </div>
      </div>

      <div className={styles.titleDescContainer}>
        <div className={styles.headerTitle}>Featured Products</div>
      </div>

      <OurProducts />

      <div className={styles.titleDescContainer}>
        <div className={styles.headerTitle}>Featured Products</div>
      </div>
    </>
  );
}

export default Categories;
