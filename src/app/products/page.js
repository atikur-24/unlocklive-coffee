import { productImg } from "@/assets/images";
import Coming from "@/components/shared/Coming";
import PageBanner from "@/components/shared/pageBanner/PageBanner";

const ProductsPage = () => {
  return (
    <>
      <PageBanner image={productImg} title="Our Products" />
      <Coming />
    </>
  );
};

export default ProductsPage;
