/* eslint-disable @next/next/no-img-element */
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import InfoComponant from "../../components/InfoComponent/InfoComponent";
import TitleHeaderComponent from "../../components/TitleHeaderComponent/TitleHeaderComponent";
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";

function Sebs() {
  return (
    <>
      <NavbarComponent />
      <HeroImageComponent imageSource="https://cdn.shopify.com/s/files/1/1225/6296/files/Banner_1_1280x267.png?v=1569947692" />

      <TitleHeaderComponent
        title="What is Styrene Ethylene Butylene Styrene (SEBS)?"
        subtitle="SEBS is used in everything from Toothbrushes and Mouth Guards to
        Nappies and Teethers."
        description=""
      />

      <InfoComponant
        title={"Quick Summary:"}
        desc={[
          "Styrene Ethylene Butylene Styrene is a type of TPE (Thermoplastic Elastomer) classed by Green Peace as an acceptable alternative to PVC in delicate products like children's toys.",
          "The most common building blocks for SEBS are PE (Polyethylene) and PP (Polypropylene). PE and PU don't need additives like lead and plasticizers for flexibility, which makes SEBs a safe, non-toxic material for the whole family.",
        ]}
        image="https://cdn.shopify.com/s/files/1/1225/6296/files/Long_image_test.png?v=1569947704"
        imageSide="left"
        imageType=""
      />

      <FooterComponent />
    </>
  );
}

export default Sebs;
