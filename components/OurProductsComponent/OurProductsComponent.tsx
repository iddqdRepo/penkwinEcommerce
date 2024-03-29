/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
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
  const checkAllVariantsOutOfStock = (variantProducts: any) => {
    let count = 0;
    variantProducts.variant.variants.forEach((item: { [key: string]: any }) => {
      if (item.quantity !== 0) {
        count++;
      }
    });
    if (count > 0) {
      return false;
    } else {
      return true;
    }
  };

  function OutOfStock({
    image,
    title,
    price,
    setKey,
  }: {
    image: string;
    title: string;
    price: string;
    setKey: any;
  }) {
    return (
      <div
        className={styles.disabledFavouriteProductContainer}
        key={setKey as Key}
      >
        <div>
          <img className={styles.image} src={image} alt="" />
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>£{price}</div>
        <button className={styles.disabledButton}>Sold Out</button>
      </div>
    );
  }

  function MultipleVariants({ item }: { item: any }) {
    return (
      <>
        {checkAllVariantsOutOfStock(item) ? (
          <OutOfStock
            image={item.images[0]}
            title={item.title}
            price={item.variant.variants[0].price}
            setKey={item.title + item.price}
          />
        ) : (
          <div className={styles.favouriteProductContainer}>
            <div>
              <img className={styles.image} src={item.images[0]} alt="" />
            </div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.price}>
              £{item.variant.variants[0].price}
            </div>
            <Link href={`/products/${item.productCategory[0]}/${item.slug}`}>
              <button className={styles.learnMoreButton}>Learn More</button>
            </Link>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className={styles.productsSectionContainer}>
        <div className={styles.productsContainer}>
          {products.map((item) => {
            return item.variant.multiple ? (
              <MultipleVariants
                key={(item.title + item.price) as Key}
                item={item}
              />
            ) : item.variant.variants[0].quantity ? (
              <OutOfStock
                key={(item.title + item.price) as Key}
                image={item.images[0]}
                title={item.title}
                price={item.variant.variants[0].price}
                setKey={item.title + item.price}
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
                <div className={styles.price}>
                  £{item.variant.variants[0].price}
                </div>
                <button className={styles.learnMoreButton}>Learn More</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OurProducts;
