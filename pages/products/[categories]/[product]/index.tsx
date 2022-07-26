/* eslint-disable @next/next/no-img-element */

import styles from "./product.module.css";
import NavbarComponent from "../../../../components/NavbarComponent/NavbarComponent";
import dbConnect from "../../../../utils/dbConnect";
import productsModel from "../../../../Models/productsModel";
import { stringifyIdsAndDates } from "../../../../utils/stringifyIdsAndDates";
import { Icon } from "@iconify/react";
import { useRef, useState, Key, useEffect } from "react";

function Product({ productsData }: { productsData: any }) {
  const [previewImage, setPreviewImage] = useState(productsData[0].images[0]);

  //TODO - useRef typescript, then
  const refs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    //* set the initial classname for the preview images
    refs.current.map((item, index) => {
      if (index === 0) {
        return (item.className = [
          styles.smallImagePreview,
          styles.activeImagePreview,
        ].join(" "));
      }
      return (item.className = [
        styles.smallImagePreview,
        styles.inactiveImagePreview,
      ].join(" "));
    });
  }, []);

  const ShortDescription = ({
    descData,
  }: {
    descData: { packageContents: []; [key: string]: string | [] };
  }) => {
    return (
      <>
        <p className={styles.boldTitle}>{descData.boldTitle}</p>
        <div className={styles.shortDescriptionDescription}>
          {descData.description}
        </div>
        <p className={styles.boldCarePackageText}>
          {descData.boldCarePackageText}
        </p>
        {descData.packageContents.map((item: string) => {
          return (
            <div key={item as Key} className={styles.packageContents}>
              -{item}
            </div>
          );
        })}

        <p className={styles.furtherDescription}>
          {descData.furtherDescription}
        </p>
      </>
    );
  };

  const handleImagePreview = (reference: HTMLImageElement, index: number) => {
    //* change the image clicked to have the active preview class
    //* and change the others to be inactive
    refs.current.map((item, i) => {
      if (i !== index) {
        return (item.className = [
          styles.smallImagePreview,
          styles.inactiveImagePreview,
        ].join(" "));
      } else {
        return (item.className = [
          styles.smallImagePreview,
          styles.activeImagePreview,
        ].join(" "));
      }
    });

    setPreviewImage(reference.src);
  };

  const ImagePreviewComponent = ({ images }: { images: string[] }) => {
    return (
      <>
        {images.map((image, index) => {
          return (
            <img
              key={(image + index) as Key}
              src={image}
              ref={(element: HTMLImageElement) => {
                refs.current[index] = element;
              }}
              onClick={() => {
                handleImagePreview(refs.current[index], index);
              }}
              className={
                refs.current.length !== 0 ? refs.current[index].className : ""
              }
            />
          );
        })}
      </>
    );
  };
  const data = productsData[0];
  return (
    <>
      <NavbarComponent />
      <div className={styles.productView}>
        <div className={styles.leftViewContainer}>
          <img src={previewImage} className={styles.leftViewMainImage}></img>
          <div className={styles.smallImagePreviewContainer}>
            <ImagePreviewComponent images={productsData[0].images} />
          </div>
        </div>
        <div className={styles.rightViewContainer}>
          <div className={styles.rightViewtopContainer}>
            <div className={styles.rightViewtitle}>{data.title}</div>
            <div className={styles.rightViewQty}>Sold out</div>
            <div className={styles.rightReviewContainer}>
              <Icon icon="clarity:star-solid" color="#ffce31" width="20" />
              <Icon icon="clarity:star-solid" color="#ffce31" width="20" />
              <Icon icon="clarity:star-solid" color="#ffce31" width="20" />
              <Icon icon="clarity:star-solid" color="#ffce31" width="20" />
              <Icon icon="clarity:star-solid" color="lightgray" width="20" />
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
          <ShortDescription descData={data.shortDescription} />
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
