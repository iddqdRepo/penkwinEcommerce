/* eslint-disable @next/next/no-img-element */
import styles from "./infoCompoment.module.css";

function InfoComponent() {
  return (
    <>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <div className={styles.title}>It&apos;s our risk, not yours.</div>
          <div className={styles.description}>
            Penkwin is so proud to have helped over 50,000 people all over the
            world. We love our customers and our customers love us! This is why
            we offer a lifetime guarantee with no questions asked returns and
            refunds on all our products.
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src="/50kProductsSold.png" alt="" />
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.imageContainerLeft}>
          <img className={styles.imageLeft} src="/handHeartImage.png" alt="" />
        </div>
        <div className={styles.textContainerLeft}>
          <div className={styles.title}>We work with you, not against you.</div>
          <div className={styles.description}>
            Penkwin is a company that specialise in various ranges of foot care
            products, orthotics and inflatable cushions. We are Northern Ireland
            based company that is dedicated to providing 100% medical grade,
            affordable products, 5* customer service and brilliant prices to all
            of our customers.
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoComponent;
