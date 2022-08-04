/* eslint-disable @next/next/no-img-element */
import styles from "./footerComponent.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";

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
              <Link href={"/about"}>
                <a className={styles.links}>Terms and Conditions of Sale</a>
              </Link>

              <a className={styles.links}>Policies & Disclaimers</a>
            </ul>
          </div>
          <div className={styles.quickLinks}>
            <hr className={styles.divider} />
            <div className={styles.title}>Quick Links</div>
            <ul>
              <Link href={"/"}>
                <a className={styles.links}>Home</a>
              </Link>
              <Link href={"/about"}>
                <a className={styles.links}>About Us</a>
              </Link>
              <Link href={"/about"}>
                <a className={styles.links}>Products</a>
              </Link>
              <Link href={"/about"}>
                <a className={styles.links}>Instructions</a>
              </Link>
            </ul>
          </div>
          <div className={styles.contactUs}>
            <hr className={styles.divider} />
            <div className={styles.title}>Contact Us</div>
            <div className={styles.contactInfo}>
              For enquiries please email happiness@tinywolf.co.uk
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
