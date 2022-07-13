/* eslint-disable @next/next/no-img-element */
import { Key } from "react";
import styles from "./ourProductsComponent.module.css";

interface ProductsInterface {
  Products: {
    images: string;
    title: string;
    price: string;
    [key: string]: any;
  }[];
}

function OurProducts({
  products,
}: {
  products: ProductsInterface["Products"];
}) {
  function MultipleVariants({
    image,
    title,
    price,
  }: {
    image: string;
    title: string;
    price: string;
  }) {
    return (
      <div className={styles.favouriteProductContainer}>
        <div>
          <img className={styles.image} src={image} alt="" />
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>£{price}</div>
        <button className={styles.learnMoreButton}>Learn More</button>
      </div>
    );
  }
  return (
    <>
      <div className={styles.productsSectionContainer}>
        <div className={styles.productsContainer}>
          {products ? (
            products.map((item) => {
              return item.variant.multiple ? (
                <MultipleVariants
                  key={(item.title + item.price) as Key}
                  image={item.images[0]}
                  title={item.title}
                  price={item.variant.variants[0].price}
                />
              ) : (
                <div
                  key={(item.title + item.price) as Key}
                  className={styles.favouriteProductContainer}
                >
                  <div>
                    <img className={styles.image} src={item.images[0]} alt="" />
                  </div>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.price}>£{item.price}</div>
                  <button className={styles.learnMoreButton}>Learn More</button>
                </div>
              );
            })
          ) : (
            <div> No products available </div>
          )}
        </div>
      </div>
    </>
  );
}

export default OurProducts;
