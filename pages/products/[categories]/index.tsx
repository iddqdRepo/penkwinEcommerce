/* eslint-disable @next/next/no-img-element */
import NavbarComponent from "../../../components/NavbarComponent/NavbarComponent";
import OurProducts from "../../../components/OurProductsComponent/OurProductsComponent";
import styles from "./categories.module.css";
import FooterComponent from "../../../components/FooterComponent/FooterComponent";
import dbConnect from "../../../utils/dbConnect";
import categoryModel from "../../../Models/categoryModel";
import productsModel from "../../../Models/productsModel";
import { stringifyIdsAndDates } from "../../../utils/stringifyIdsAndDates";
import InfoComponant from "../../../components/InfoComponent/InfoComponent";
interface dataProps {
  data: {
    _id?: number;
    category: string;
    slug: string;
    heroImage: string;
    title: string;
    subTitle: string;
    description: string;
    cardTitle: string;
    cardImage: string;
    cardBullets: [];
    _v?: number;
  }[];
  productsData: [];
}

function Categories(props: dataProps) {
  const data: dataProps["data"] = props.data;
  const products = props.productsData;
  console.log("products = ", products);

  const productCategory = data[0];
  return (
    <>
      <NavbarComponent />
      <div className={styles.heroImageContainer}>
        <img src={productCategory.heroImage} alt="" />
      </div>
      <div className={styles.titleDescContainer}>
        <div className={styles.headerTitle}>{productCategory.title}</div>
        <div className={styles.subtitle}>{productCategory.subTitle}</div>
        <div className={styles.headerDescription}>
          {productCategory.description}
        </div>
      </div>
      <InfoComponant
        title={productCategory.cardTitle}
        desc={productCategory.cardBullets}
        image={productCategory.cardImage}
        imageSide="right"
      />

      <div className={styles.titleDescContainer}>
        <div className={styles.headerTitle}>Featured Products</div>
      </div>
      <OurProducts products={products} />

      <FooterComponent />
    </>
  );
}
export async function getStaticPaths() {
  //console.log("CALLING getStaticPaths ");
  dbConnect();
  const data = await categoryModel.find();
  const paths = data.map((obj: { slug: String }) => {
    return {
      params: { categories: obj.slug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { categories: any } }) {
  const category = context.params.categories;
  dbConnect();
  // Find and return the page to be rendered (in this case, with the correct slug that we used to build the paths)
  const categoryData = await categoryModel.find({ slug: category }).lean();
  const productsData = await productsModel
    .find({
      productCategory: { $elemMatch: { $eq: category } },
    })
    .lean();

  stringifyIdsAndDates(categoryData);
  stringifyIdsAndDates(productsData);

  return {
    props: {
      data: categoryData,
      productsData: productsData,
    },
    revalidate: 10, // In seconds
  };
}

export default Categories;
