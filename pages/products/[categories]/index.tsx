/* eslint-disable @next/next/no-img-element */
import NavbarComponent from "../../../components/NavbarComponent/NavbarComponent";
import OurProducts from "../../../components/OurProductsComponent/OurProductsComponent";
import styles from "./categories.module.css";
import FooterComponent from "../../../components/FooterComponent/FooterComponent";
import dbConnect from "../../../utils/dbConnect";
import categoryModel from "../../../Models/categoryModel";

function Categories({ data }) {
  console.log(data);
  return (
    <>
      <NavbarComponent />
      <div className={styles.heroImageContainer}>
        <img src="/peopleSitting.png" alt="" />
      </div>
      <div className={styles.titleDescContainer}>
        <div className={styles.headerTitle}>Penkwin® Medical Cushions</div>
        <div className={styles.subtitle}>
          Pain Relief Designed with You in Mind
        </div>
        <div className={styles.headerDescription}>
          The Penkwin® Orthopaedic Ring Pillow Dramatically Reduces Pain and
          Helps You to Rest Easy. Improve your quality of life with a medical
          pillow designed to reduce pressure and remove discomfort from the part
          of your body where you feel it most
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <div className={styles.title}>COMFORT, TAILORED TO YOU.</div>
          <div className={styles.description}>
            <ul>
              <li className={styles.infoBullet}>
                Get instant relief with this{" "}
                <span className={styles.bold}>fully adjustable pillow</span>{" "}
                which moulds to your body and your needs quickly, it&apos;s as
                simple as changing the air inside.
              </li>
              <li className={styles.infoBullet}>
                Designed to provide gentle support everywhere whether in the
                car, shower, sofa or wheelchair.
              </li>
              <li className={styles.infoBullet}>
                We only use medical grade materials so you can rest assured that
                your pillow won&apos;t crack, deflate or otherwise let you down
                when you need it most.
              </li>
              <li className={styles.infoBullet}>
                Safely hypoallergenic and washable you can avoid those
                embarrassing squeaks and smells and focus on getting you back to
                being you.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://cdn.shopify.com/s/files/1/1225/6296/files/Woman_sitting_png.png?v=1569944045"
            alt=""
          />
        </div>
      </div>
      <div className={styles.titleDescContainer}>
        <div className={styles.headerTitle}>Featured Products</div>
      </div>
      <OurProducts />
      <div className={styles.titleDescContainer}>
        <div className={styles.headerTitle}>Quick FAQ</div>
      </div>
      {/* <div className={styles.faqContainer}>
        <div className={styles.faq}>
          {product.faq.map((qa) => {
            console.log("qa =", qa);
            return (
              <>
                <div className={styles.question}>
                  {Object.entries(qa)[0][0]}
                </div>
                <div className={styles.answer}>{Object.entries(qa)[0][1]}</div>
              </>
            );
          })}
        </div>
      </div> */}
      <FooterComponent />
    </>
  );
}
export async function getStaticPaths() {
  console.log("CALLING getStaticPaths ");
  dbConnect();
  const data = await categoryModel.find();
  const paths = data.map((obj) => {
    return {
      params: { categories: obj.category.toString().replace(/ /g, "") },
    };
  });

  return {
    paths, //paths which is the same as paths:paths
    fallback: false, // false = if a user tries to visit a route that doesnt exist, it shows a 404 page
  };
}

export async function getStaticProps() {
  dbConnect();
  const data = await categoryModel.find();
  const categories = data.map((doc) => {
    const category = doc.toObject();

    //change the dates etc to strings
    category._id = category._id.toString();
    if (category.createdAt) {
      category.createdAt = category.createdAt.toString();
    }
    if (category.updatedAt) {
      category.updatedAt = category.updatedAt.toString();
    }
    return category;
  });

  return {
    props: {
      categories,
    },
    revalidate: 10, // In seconds
  };
}

export default Categories;
