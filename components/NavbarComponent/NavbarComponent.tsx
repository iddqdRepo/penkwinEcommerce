/* eslint-disable @next/next/no-img-element */

import { Icon } from "@iconify/react";
import styles from "./navbarComponent.module.css";
import Link from "next/link";
import { Key, useEffect, useState } from "react";

//TODO Fix key string nonsense below
function NavbarComponent() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("http://localhost:3000/api/categories");
      const data = await res.json();
      const tempCategories = data.map(
        (item: { _id: String; category: String }) => {
          return item.category;
        }
      );
      setCategories(tempCategories);
    };

    getCategories();
  }, []);

  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.logoImage}
            src="https://cdn.shopify.com/s/files/1/1225/6296/files/logo-transparent_180x.png?v=1530418234"
            alt=""
          />
        </div>
        <div className={styles.linksContainer}>
          <Link href={"/"}>
            <a className={styles.navItem}>Home</a>
          </Link>
          <div className={styles.navItem}>
            Products
            <Icon
              className={styles.chevron}
              icon="akar-icons:chevron-down"
              width="15"
              height="15"
              inline={true}
            />
            {categories ? (
              <ul className={styles.ulDropdownList}>
                {categories.map((navItem: String) => {
                  return (
                    <li key={navItem as Key} className={styles.liDropdownItem}>
                      <Link href={"/products/" + navItem.replace(/ /g, "")}>
                        <a className={styles.dropdownLink}>{navItem}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <></>
            )}
          </div>
          <Link href={"/instructions"}>
            <a className={styles.navItem}>Instructions</a>
          </Link>
          <div className={styles.navItem}>
            Materials
            <Icon
              className={styles.chevron}
              icon="akar-icons:chevron-down"
              width="15"
              height="15"
              inline={true}
            />
            <ul className={styles.ulDropdownList}>
              <li className={styles.liDropdownItem}>
                <Link href="/polycarbonates">
                  <a className={styles.dropdownLink}>PC (Polycarbonates)</a>
                </Link>
              </li>
              <li className={styles.liDropdownItem}>
                <Link href="/polyurethane">
                  <a className={styles.dropdownLink}>PU (Polyurethanes)</a>
                </Link>
              </li>
              <li className={styles.liDropdownItem}>
                <Link href="/sebs">
                  <a className={styles.dropdownLink}>SEBS</a>
                </Link>
              </li>
            </ul>
          </div>

          <Link href={"/about"}>
            <a className={styles.navItem}>About Us</a>
          </Link>
          {/* <div className={styles.navItem}>Contact</div> */}
          {/* <Link href={"/contact"}>
            <a className={styles.navItem}>Contact</a>
          </Link> */}
        </div>

        <div className={styles.iconContainer}>
          <div>
            <Icon
              className={styles.icon}
              icon="ant-design:search-outlined"
              color="white"
              width="50px"
            />
          </div>
          <div>
            <Icon
              className={styles.icon}
              icon="bi:person-circle"
              color="white"
              width="50px"
            />
          </div>
          <div>
            <Icon
              className={styles.icon}
              icon="akar-icons:shopping-bag"
              color="white"
              width="50px"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;
