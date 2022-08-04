import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";
import TitleHeaderComponent from "../../components/TitleHeaderComponent/TitleHeaderComponent";
import InfoComponent from "../../components/InfoComponent/InfoComponent";
import StayInTouchComponent from "../../components/StayInTouchComponent/StayInTouchComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

function About() {
  return (
    <>
      <NavbarComponent />
      <HeroImageComponent imageSource="https://cdn.shopify.com/s/files/1/1225/6296/files/Banner_a95089af-5f50-4a6e-ae9e-0881c894342d_1280x267.jpg?v=1569947791" />
      <TitleHeaderComponent
        title="Small Company, Big Heart"
        subtitle="Discover how Penkwin products can improve your quality of life. We have helped over 50,000 customers worldwide reduce pain and get back on their feet."
        description=""
      />
      <InfoComponent
        title={"You Come First, Every Time."}
        desc={
          "At Penkwin we believe in: \n\nCreating products that reduce suffering and give you a better quality of life.\n\nUsing only the safest and highest quality materials to help you when you need it most. \n\nProviding customer service that is in keeping with our family values, which means that every single customer is important to us. \n\nAll of our products are affordable and priced fairly, so you get great quality and value for money.\n\n"
        }
        image={
          "https://cdn.shopify.com/s/files/1/1225/6296/files/stones.jpg?v=1569947808"
        }
        imageSide={"right"}
        imageType=""
      />
      <StayInTouchComponent />
      <FooterComponent />
    </>
  );
}

export default About;
