/* eslint-disable @next/next/no-img-element */

import styles from "./product.module.css";
import NavbarComponent from "../../../../components/NavbarComponent/NavbarComponent";
import dbConnect from "../../../../utils/dbConnect";
import productsModel from "../../../../Models/productsModel";
import { stringifyIdsAndDates } from "../../../../utils/stringifyIdsAndDates";
import { Icon } from "@iconify/react";
import { useRef, useState, Key, useEffect, MouseEvent } from "react";

function Product({ productsData }: { productsData: any }) {
  const data = productsData[0];
  const [previewImage, setPreviewImage] = useState(data.images[0]);
  const [shownReviews, setShownReviews] = useState(null);
  useEffect(() => {
    setShownReviews(data.reviews);
  }, []);

  const imagePreviewRefs = useRef<HTMLImageElement[]>([]);
  const paginationHighlightRefs = useRef<HTMLDivElement[]>([]);
  const allSplitReviews = useRef<[]>([]);
  const numPages = useRef<[]>([]);
  const currentPage = useRef<number>(1);
  //! THE INITIAL CSS ISNT BEING SET IN USEEFFECT FOR paginationHighlightRefs, PERHAPS DUE TO THE OTHER USEEFFECT NOT
  //! BEING FINISHED RESULTING IN THE INITIAL ARRAY BEING EMPTY
  useEffect(() => {
    console.log("paginationHighlightRefs ", paginationHighlightRefs.current);
    paginationHighlightRefs.current.map((item, index) => {
      console.log("paginationHighlightRefs current", item);

      if (index === 0) {
        return (item.className = [
          styles.reviewFooterPagination,
          styles.underline,
        ].join(" "));
      } else {
        return (item.className = styles.reviewFooterPagination);
      }
    });

    //* set the initial classname for the preview images
    imagePreviewRefs.current.map((item, index) => {
      if (index === 0) {
        return (item.className = [
          styles.smallImagePreview,
          styles.activeImagePreview,
        ].join(" "));
      } else {
        return (item.className = [
          styles.smallImagePreview,
          styles.inactiveImagePreview,
        ].join(" "));
      }
    });
    console.log("useEffect 2");
  }, []);

  useEffect(() => {
    const createSplitArrayForPagination = () => {
      if (data.reviews.length > 5) {
        let reviewsTempSplitArrayTotal = [];
        let temp = [];
        let tempPage = [];
        let totalLoop = Math.round(data.reviews.length / 5);
        console.log("totalLoop =", totalLoop);
        let count = 0;
        for (let i = 0; i < totalLoop; i++) {
          temp = data.reviews.slice(count, count + 5);
          count += 5;
          reviewsTempSplitArrayTotal.push(temp);
          tempPage.push(i + 1);
        }
        numPages.current = tempPage;
        setShownReviews(reviewsTempSplitArrayTotal[0]);
        currentPage.current = 1;
        return reviewsTempSplitArrayTotal;
      } else {
        setShownReviews(data.reviews);
        numPages.current.push(1);
        currentPage.current = 1;
        return data.reviews;
      }
    };
    allSplitReviews.current = createSplitArrayForPagination();
    // console.log("numPages = ", numPages.current);
    // console.log("allSplitReviews = ", allSplitReviews.current);
  }, []);

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
    console.log("ImagePreviewComponent");
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
                  : ""
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

  const ReviewBuilder = ({
    reviewsToShow,
  }: {
    reviewsToShow: { [key: string]: string }[];
  }) => {
    return (
      <>
        {reviewsToShow.map((review) => {
          return (
            <div className={styles.reviewSectionContainer}>
              <div className={styles.stars}>
                <Icon
                  icon="clarity:star-solid"
                  color="#ffce31"
                  width="18"
                  inline={true}
                />
                <Icon
                  icon="clarity:star-solid"
                  color="#ffce31"
                  width="18"
                  inline={true}
                />
                <Icon
                  icon="clarity:star-solid"
                  color="#ffce31"
                  width="18"
                  inline={true}
                />
                <Icon
                  icon="clarity:star-solid"
                  color="#ffce31"
                  width="18"
                  inline={true}
                />
                <Icon
                  icon="clarity:star-solid"
                  color="lightgray"
                  width="18"
                  inline={true}
                />
              </div>
              <p className={styles.reviewContainerNameAndDate}>
                {<strong>{review.name}</strong>} on{" "}
                {<strong>{review.date}</strong>}
              </p>
              <div className={styles.reviewWriteAndTitleContainer}>
                <p className={styles.reviewText}>{review.review}</p>
                <div className={styles.reportReview}>
                  Report as Inappropriate
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const handlePaginationClick = (
    pageRef,
    index: number,
    pageCurrentlyOn: number
  ) => {
    console.log(
      "index of page clicked = ",
      index,
      "currently on page",
      pageCurrentlyOn
    );
    console.log("pageRef", pageRef);
    paginationHighlightRefs.current.map((item, i) => {
      if (i === index) {
        return (item.className = [
          styles.reviewFooterPagination,
          styles.underline,
        ].join(" "));
      } else {
        return (item.className = [styles.reviewFooterPagination].join(" "));
      }
    });
    setShownReviews(allSplitReviews.current[index - 1]);
    currentPage.current = index;
  };

  const PaginationFooterBuilder = ({ pages }) => {
    console.log("PaginationFooterBuilder");
    return (
      <div className={styles.reviewFooterContainer}>
        {pages.map((index) => {
          return (
            <div
              key={index as Key}
              ref={(element: HTMLDivElement) => {
                paginationHighlightRefs.current[index] = element;
              }}
              className={
                paginationHighlightRefs.current.length !== 0
                  ? paginationHighlightRefs.current[index].className
                  : ""
              }
              onClick={() => {
                handlePaginationClick(
                  paginationHighlightRefs.current[index],
                  index,
                  currentPage.current
                );
              }}
            >
              {index}
            </div>
          );
        })}
      </div>
    );
  };

  const ReviewComponent = () => {
    return (
      <>
        <div className={styles.reviewContainer}>
          <div className={styles.reviewHeaderContainer}>
            <div className={styles.reviewWriteAndTitleContainer}>
              <p className={styles.reviewContainerTitle}>CUSTOMER REVIEWS</p>
              <p className={styles.reviewWriteAReview}>Write a review</p>
            </div>
            <div className={styles.starReviewContainer}>
              <div className={styles.stars}>
                <Icon
                  icon="clarity:star-solid"
                  color="#ffce31"
                  width="30"
                  inline={true}
                />
                <Icon
                  icon="clarity:star-solid"
                  color="#ffce31"
                  width="30"
                  inline={true}
                />
                <Icon
                  icon="clarity:star-solid"
                  color="#ffce31"
                  width="30"
                  inline={true}
                />
                <Icon
                  icon="clarity:star-solid"
                  color="#ffce31"
                  width="30"
                  inline={true}
                />
                <Icon
                  icon="clarity:star-solid"
                  color="lightgray"
                  width="30"
                  inline={true}
                />
              </div>
              <div className={styles.reviewCount}>Based on 489 reviews</div>
            </div>
          </div>
          {shownReviews === null ? (
            <div className={styles.loading}></div>
          ) : (
            <ReviewBuilder reviewsToShow={shownReviews} />
          )}
          <PaginationFooterBuilder pages={numPages.current} />
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
      <ReviewComponent />
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
