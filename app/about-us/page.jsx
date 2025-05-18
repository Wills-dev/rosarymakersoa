import MainLayout from "../../components/templates/MainLayout";
import AboutUsMainImage from "../../components/atoms/AboutUsMainImage";
import AboutUsPageContent from "../../components/organisms/AboutUsPageContent";

const page = () => {
  return (
    <MainLayout>
      <AboutUsMainImage />
      <AboutUsPageContent />
    </MainLayout>
  );
};

export default page;
