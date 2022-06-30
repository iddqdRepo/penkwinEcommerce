/* eslint-disable @next/next/no-img-element */
import styles from "./customerFavouritesComponent.module.css";

function CustomerFavouritesComponent() {
  return (
    <>
      <div className={styles.favouritesSectionContainer}>
        <div className={styles.productsContainer}>
          <div className={styles.favouriteProductContainer}>
            <div>
              <img
                className={styles.image}
                src="https://cdn.shopify.com/s/files/1/1225/6296/products/Main_png_720x.png?v=1569942128"
                alt=""
              />
            </div>
            <div className={styles.title}>
              Penkwin® 5 piece Bunion Corrector Kit
            </div>
            <div className={styles.price}>£11.96</div>
            <button className={styles.learnMoreButton}>Learn More</button>
          </div>
          <div className={styles.favouriteProductContainer}>
            <div>
              <img
                className={styles.image}
                src="https://cdn.shopify.com/s/files/1/1225/6296/products/Website_Main_png_720x.png?v=1569942122"
                alt=""
              />
            </div>
            <div className={styles.title}>
              Penkwin® Inflatable Orthopaedic Ring Cushion
            </div>
            <div className={styles.price}>£10.99</div>
            <button className={styles.learnMoreButton}>Learn More</button>
          </div>
          <div className={styles.favouriteProductContainer}>
            <div>
              <img
                className={styles.image}
                src="https://cdn.shopify.com/s/files/1/1225/6296/products/6_piece_Metatarsal_Main_png_720x.png?v=1569942111"
                alt=""
              />
            </div>
            <div className={styles.title}>
              Penkwin® Inflatable Orthopaedic Ring Cushion
            </div>
            <div className={styles.price}>£8.99</div>
            <button className={styles.learnMoreButton}>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerFavouritesComponent;
