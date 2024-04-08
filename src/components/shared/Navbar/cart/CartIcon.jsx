import { FiShoppingCart } from "react-icons/fi";

const CartIcon = () => {
  return (
    <div className="relative cursor-pointer">
      <FiShoppingCart className="text-2xl text-black lg:text-3xl" />
      <p className="absolute -top-1 left-4 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white md:left-5 lg:h-5 lg:w-5 lg:text-sm">
        4
      </p>
    </div>
  );
};

export default CartIcon;
