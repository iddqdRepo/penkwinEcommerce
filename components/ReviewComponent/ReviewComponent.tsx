import { useRef, useState, Key, useEffect } from "react";
import styles from "./reviewComponent.module.css";
import { Icon } from "@iconify/react";

const ReviewComponent = ({ data }: { data: any }) => {
  const paginationNumUnderlineRefs = useRef<HTMLDivElement[]>([]);
  const allSplitReviews = useRef<any[]>([]);
  const numPages = useRef<number[]>([]);
  const [shownReviews, setShownReviews] = useState(null);

  useEffect(() => {
    //* If there are more than 5 reviews, slice the reviews into their own nested array
    //* 5 at a time. Then add an array of page numbers to numPages, then set the current
    //* shownReviews useState to show the first entry of 5 reviews.
    if (data.reviews.length > 5) {
      let reviewsTempSplitArrayTotal = [];
      let temp = [];
      let tempPage = [];
      let totalLoop = Math.round(data.reviews.length / 5);
      let count = 0;
      for (let i = 0; i < totalLoop; i++) {
        temp = data.reviews.slice(count, count + 5);
        count += 5;
        reviewsTempSplitArrayTotal.push(temp);
        tempPage.push(i + 1);
      }
      numPages.current = [...tempPage];
      allSplitReviews.current = reviewsTempSplitArrayTotal;
      setShownReviews(reviewsTempSplitArrayTotal[0]);
    } else {
      numPages.current.push(1);
      allSplitReviews.current = data.reviews;
      setShownReviews(data.reviews);
    }
  }, [data.reviews]);

  const PaginationFooterBuilder = ({ pages }: { pages: number[] }) => {
    //! TEMPORARILY REDUCING PAGES
    let maxPageShow;
    if (pages.length > 11) {
      maxPageShow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    } else {
      maxPageShow = [...pages];
    }
    return (
      <div className={styles.reviewFooterContainer}>
        {maxPageShow.map((item: number, index: number) => {
          return (
            <div
              key={item as Key}
              ref={(element: HTMLDivElement) => {
                paginationNumUnderlineRefs.current[item] = element;
              }}
              className={
                paginationNumUnderlineRefs.current.length !== 0
                  ? paginationNumUnderlineRefs.current[item].className
                  : index === 0
                  ? [styles.reviewFooterPagination, styles.underline].join(" ")
                  : styles.reviewFooterPagination
              }
              onClick={() => {
                handlePaginationClick(item);
              }}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
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
            <div
              key={(review.name + review.rating) as Key}
              className={styles.reviewSectionContainer}
            >
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
              <p className={styles.reviewText}>
                {<strong>{review.title}</strong>}
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

  const handlePaginationClick = (index: number) => {
    paginationNumUnderlineRefs.current.map((item, i) => {
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
  };

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
            <div className={styles.reviewCount}>
              Based on {data.reviews.length} reviews
            </div>
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

export default ReviewComponent;
