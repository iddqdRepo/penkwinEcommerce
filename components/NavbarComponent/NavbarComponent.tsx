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
            {/* <ul>
                <li>All Products</li>
                <li>Medical Cushions</li>
                <li>Bunion Care</li>
                <li>Arthritis Treatment</li>
                <li>Plantar Fasciitis</li>
                <li>Metatarsal Pain</li>
                <li>Eye Care</li>
              </ul> */}
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
            {/* <ul>
                <li>PC (Polycarbonate)</li>
                <li>PU (Polyurethanes)</li>
                <li>SEBS</li>
              </ul> */}
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
            />
          </div>
          <div>
            <Icon
              className={styles.icon}
              icon="bi:person-circle"
              color="white"
            />
          </div>
          <div>
            <Icon
              className={styles.icon}
              icon="akar-icons:shopping-bag"
              color="white"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;
