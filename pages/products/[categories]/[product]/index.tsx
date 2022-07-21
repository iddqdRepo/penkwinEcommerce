import styles from "./product.module.css";
import NavbarComponent from "../../../../components/NavbarComponent/NavbarComponent";
import dbConnect from "../../../../utils/dbConnect";
import productsModel from "../../../../Models/productsModel";
import { stringifyIdsAndDates } from "../../../../utils/stringifyIdsAndDates";
import { Icon } from "@iconify/react";
import { Key } from "react";

function Product({ productsData }: { productsData: any }) {
  const data = productsData[0];
  const tempImageArray = [
    data.images[0],
    data.images[1],
    data.images[0],
    data.images[1],
  ];
  return (
    <>
      <NavbarComponent />
      <div className={styles.productView}>
        <div className={styles.leftViewContainer}>
          <img src={data.images[0]} className={styles.leftViewMainImage}></img>
          <div className={styles.smallImagePreviewContainer}>
            {tempImageArray.map((image) => {
              return (
                <img
                  key={image as Key}
                  src={image}
                  className={[
                    styles.smallImagePreview,
                    styles.activeImagePreview,
                  ].join(" ")}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.rightViewContainer}>
          <div className={styles.rightViewtopContainer}>
            <div className={styles.rightViewtitle}>{data.title}</div>
            <div className={styles.rightViewQty}>Sold out</div>
            <div className={styles.rightReviewContainer}>
              <div className={styles.rightViewStars}>
                <Icon icon="clarity:star-solid" color="#ffce31" width="20" />
                <Icon icon="clarity:star-solid" color="#ffce31" width="20" />
                <Icon icon="clarity:star-solid" color="#ffce31" width="20" />
                <Icon icon="clarity:star-solid" color="#ffce31" width="20" />
                <Icon icon="clarity:star-solid" color="lightgray" width="20" />
              </div>
              <div className={styles.rightViewReviewCount}>489 reviews</div>
            </div>

            <div className={styles.rightViewTaxIncluded}>Tax Included</div>
          </div>
          <div className={styles.variantQuantitySizeContainer}>
            <div className={styles.variantQuantityLeft}>
              <label className={styles.label} htmlFor="cars">
                Size
              </label>
              <select className={styles.selectSize} name="cars" id="cars">
                <option value="volvo">15 inches</option>
                <option value="saab">18 inches</option>
              </select>
            </div>
            <div className={styles.sizeQuantityRight}>
              <label>Quantity</label>
              <input
                className={styles.selectSize}
                name="qty"
                type="number"
                defaultValue={1}
              ></input>
            </div>
          </div>
          <div className={styles.buyButtonContainer}>
            <button className={styles.addToCart}>SOLD OUT</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

export async function getStaticPaths() {
  dbConnect();
  const data = await productsModel.find();

  const paths = data.map((obj) => {
    return {
      params: {
        categories: obj.productCategory[0].toString(),
        product: obj.slug.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: {
  params: { categories: any; product: any };
}) {
  dbConnect();
  const product = context.params.product;

  const productsData = await productsModel
    .find({
      slug: product,
    })
    .lean();
  stringifyIdsAndDates(productsData);

  return {
    props: {
      productsData: productsData,
    },
    revalidate: 10, // In seconds
  };
}
