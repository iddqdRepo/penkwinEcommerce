/* eslint-disable @next/next/no-img-element */
import styles from "./footerComponent.module.css";
import { Icon } from "@iconify/react";

function FooterComponent() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.socialContainer}>
          <Icon
            className={styles.icon}
            icon="ant-design:facebook-filled"
            color="white"
            width="50"
            height="50"
          />
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.information}>
            <hr className={styles.divider} />
            <div className={styles.title}>Information</div>
            <ul className={styles.links}>
              <a className={styles.links} href="">
                About Us
              </a>

              <a className={styles.links} href="">
                Terms and Conditions of Sale
              </a>
              <a className={styles.links} href="">
                Policies & Disclaimers
              </a>
            </ul>
          </div>
          <div className={styles.quickLinks}>
            <hr className={styles.divider} />
            <div className={styles.title}>Quick Links</div>
            <ul>
              <a className={styles.links} href="">
                Home
              </a>
              <a className={styles.links}>About Us</a>
              <a className={styles.links}>Products</a>
              <a className={styles.links}>Instructions</a>
            </ul>
          </div>
          <div className={styles.contactUs}>
            <hr className={styles.divider} />
            <div className={styles.title}>Contact Us</div>
            <div className={styles.contactInfo}>
              Penkwin is a registered trademark of Tinywolf Trading Ltd. For
              enquiries please email happiness@penkwin.co.uk
            </div>
          </div>
        </div>
        <hr className={styles.footerDivider} />
        <div className={styles.copyrightText}>
          © Copyright Tinywolf Trading Ltd 2019. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default FooterComponent;
