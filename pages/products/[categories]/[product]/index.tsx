/* eslint-disable @next/next/no-img-element */

import styles from "./product.module.css";
import NavbarComponent from "../../../../components/NavbarComponent/NavbarComponent";
import dbConnect from "../../../../utils/dbConnect";
import productsModel from "../../../../Models/productsModel";
import { stringifyIdsAndDates } from "../../../../utils/stringifyIdsAndDates";
import { Icon } from "@iconify/react";
import { useRef, useState, Key } from "react";
import FooterComponent from "../../../../components/FooterComponent/FooterComponent";
import ReviewComponent from "../../../../components/ReviewComponent/ReviewComponent";
import StayInTouchComponent from "../../../../components/StayInTouchComponent/StayInTouchComponent";

function Product({ productsData }: { productsData: any }) {
  const data = productsData[0];
  const [previewImage, setPreviewImage] = useState(data.images[0]);
  const imagePreviewRefs = useRef<HTMLImageElement[]>([]);

  const ShortDescription = ({
    shortDescData,
  }: {
    shortDescData: { packageContents: []; [key: string]: string | [] };
  }) => {
    return (
      <>
        <p className={styles.boldTitle}>{shortDescData.boldTitle}</p>
        <div className={styles.shortDescriptionDescription}>
          {shortDescData.description}
        </div>
        <p className={styles.boldCarePackageText}>
          {shortDescData.boldCarePackageText}
        </p>
        {shortDescData.packageContents.map((item: string) => {
          return (
            <div key={item as Key} className={styles.packageContents}>
              -{item}
            </div>
          );
        })}

        <p className={styles.furtherDescription}>
          {shortDescData.furtherDescription}
        </p>
      </>
    );
  };

  const DescriptionSection = ({
    descData,
  }: {
    descData: { image: string; bullets: []; [key: string]: string | [] };
  }) => {
    return (
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionLeft}>
          <p className={styles.descTitle}>{descData.title}</p>
          <p className={styles.headerText}>{descData.headerText}</p>
          {descData.bullets.map((bullet: string) => {
            return (
              <p key={bullet as Key} className={styles.descriptionBullet}>
                <Icon icon="teenyicons:tick-circle-solid" /> {bullet}
              </p>
            );
          })}
        </div>
        <div className={styles.imageRightContainer}>
          <img className={styles.imageRight} src={descData.image} alt="" />
        </div>
      </div>
    );
  };

  const handleImagePreview = (reference: HTMLImageElement, index: number) => {
    //* change the image clicked to have the active preview class
    //* and change the others to be inactive
    imagePreviewRefs.current.map((item, i) => {
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
                imagePreviewRefs.current[index] = element;
              }}
              onClick={() => {
                handleImagePreview(imagePreviewRefs.current[index], index);
              }}
              className={
                imagePreviewRefs.current.length !== 0
                  ? imagePreviewRefs.current[index].className
                  : index === 0
                  ? [styles.smallImagePreview, styles.activeImagePreview].join(
                      " "
                    )
                  : [
                      styles.smallImagePreview,
                      styles.inactiveImagePreview,
                    ].join(" ")
              }
            />
          );
        })}
      </>
    );
  };

  const FaqComponent = ({
    faqData,
  }: {
    faqData: { [key: string]: string }[];
  }) => {
    return (
      <>
        <div className={styles.faqContainer}>
          <p className={styles.descTitle}>Quick FAQ</p>
          {faqData.map((faq) => {
            return (
              <div key={faq.question as Key} className={styles.qaContainer}>
                <div className={styles.question}>
                  <Icon icon="akar-icons:chat-question" /> {faq.question}
                </div>
                <div className={styles.answer}>{faq.answer}</div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

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
          <ShortDescription shortDescData={data.shortDescription} />
        </div>
      </div>
      <DescriptionSection descData={data.description} />
      <FaqComponent faqData={data.faq} />
      <ReviewComponent data={data} />
      <StayInTouchComponent />
      <FooterComponent />
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
