import { productImg } from "@/assets/images";
import PageBanner from "@/components/shared/pageBanner/PageBanner";

const ProductsPage = () => {
  return (
    <>
      <PageBanner image={productImg} title="Our Products" />
      <div className="my-20">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          perferendis impedit aut numquam, voluptates officia deserunt enim!
          Maxime excepturi quos unde cum id nulla alias. In hic officia
          consequatur quis.
        </p>
      </div>
    </>
  );
};

export default ProductsPage;
