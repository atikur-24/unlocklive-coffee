import { CiHeart } from "react-icons/ci";

const Wishlist = () => {
  return (
    <div className="relative cursor-pointer">
      <CiHeart className="text-2xl text-black lg:text-3xl lg:font-bold" />
      <p className="absolute -top-1 left-3 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white md:left-5 lg:h-5 lg:w-5 lg:text-sm">
        5
      </p>
    </div>
  );
};

export default Wishlist;
