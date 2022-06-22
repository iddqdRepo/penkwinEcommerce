import { Icon } from "@iconify/react";
import styles from "./navbarComponent.module.css";

function NavbarComponent() {
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
          <div className={styles.navItem}>Home</div>
          <div className={styles.navItem}>
            Products
            <Icon
              className={styles.chevron}
              icon="akar-icons:chevron-down"
              width="15"
              height="15"
              inline={true}
            />
            <ul className={styles.ulDropdownList}>
              <li className={styles.liDropdownItem}>
                <a className={styles.dropdownLink} href="#">
                  All Products
                </a>
              </li>
              <li className={styles.liDropdownItem}>
                <a className={styles.dropdownLink} href="#">
                  Medical Cushions
                </a>
              </li>
              <li className={styles.liDropdownItem}>
                <a className={styles.dropdownLink} href="#">
                  Bunion Care
                </a>
              </li>
              <li className={styles.liDropdownItem}>
                <a className={styles.dropdownLink} href="#">
                  Arthritis Treatment
                </a>
              </li>
              <li className={styles.liDropdownItem}>
                <a className={styles.dropdownLink} href="#">
                  Plantar Fasciitis
                </a>
              </li>
              <li className={styles.liDropdownItem}>
                <a className={styles.dropdownLink} href="#">
                  Metatarsal Pain
                </a>
              </li>
              <li className={styles.liDropdownItem}>
                <a className={styles.dropdownLink} href="#">
                  Eye Care
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.navItem}>Instructions</div>
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
                <a className={styles.dropdownLink} href="#">
                  PC (Polycarbonate)
                </a>
              </li>
              <li className={styles.liDropdownItem}>
                <a className={styles.dropdownLink} href="#">
                  PU (Polyurethanes)
                </a>
              </li>
              <li className={styles.liDropdownItem}>
                <a className={styles.dropdownLink} href="#">
                  SEBS
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.navItem}>About Us</div>
          <div className={styles.navItem}>Contact</div>
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
