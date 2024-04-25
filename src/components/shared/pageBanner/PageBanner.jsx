import Image from "next/image";

const PageBanner = ({ image, title }) => {
  return (
    <div className="relative">
      <Image
        src={image}
        alt="page banner"
        className="h-full w-full object-fill"
      />
      <h2 className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white md:text-4xl">
        {title}
      </h2>
    </div>
  );
};

export default PageBanner;
