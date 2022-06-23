/* eslint-disable @next/next/no-img-element */
import styles from "./testimonialComponent.module.css";
import { Icon } from "@iconify/react";

//TODO Go through and make all titles the same size (~30px) and space between elements the same
function TestimonialComponent() {
  return (
    <>
      <div className={styles.cardTitleDescContainer}>
        <div className={styles.cardHeaderTitle}>
          WHAT SOME CUSTOMERS HAVE TO SAY:
        </div>
      </div>
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonial}>
          <Icon
            className={styles.icon}
            icon="bi:quote"
            color="#3d4246"
            width="40"
            height="40"
          />

          <div className={styles.description}>
            I wear the toe splint for a few hours each night and it&apos;s been
            an absolute miracle working. No more pain when walking and running!!
            (I would say I have a mild to moderate bunion, which was
            hurting/aching daily).
          </div>
          <div className={styles.name}>-Joan</div>
        </div>
        <div className={styles.testimonial}>
          <Icon
            className={styles.icon}
            icon="bi:quote"
            color="#3d4246"
            width="40"
            height="40"
          />

          <div className={styles.description}>
            Really straightforward set of kit- I have an early bunion which is
            causing a good lot of discomfort and I want to avoid surgery
            eventually. The daily toe separators are very comfortable and
            genuinely help the pain on walking and exercise. The nighttime
            orthotics are actually comfortable and feel effective
          </div>
          <div className={styles.name}>-Caria</div>
        </div>
        <div className={styles.testimonial}>
          <Icon
            className={styles.icon}
            icon="bi:quote"
            color="#3d4246"
            width="40"
            height="40"
          />

          <div className={styles.description}>
            Had a minor query and email responded to by Rose in less than 1
            hour. Now that IS excellent customer service. Highlights a family
            business is not simply competitive but offers customer service that
            makes you feel like an individual. Will deffo use again - FACT!
          </div>
          <div className={styles.name}>-Dan</div>
        </div>
      </div>
    </>
  );
}

export default TestimonialComponent;
