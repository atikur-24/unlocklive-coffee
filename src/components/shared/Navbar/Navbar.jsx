import { adminIcon } from "@/assets/images";
import logo from "@/assets/images/logo/unlocklive.svg";
import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import Container from "../../ui/Container";
import NavItem from "./NavItem";

const Navbar = () => {
  // TODO: use tailwind config file this border
  return (
    <Container className="border-b border-[#101113] border-opacity-10 py-3 pb-5 md:py-5 xl:py-6">
      <div className="flex items-center justify-between gap-x-6 pb-4 font-medium">
        <nav className="inline-flex list-none items-start justify-start gap-[50px]">
          <NavItem />
        </nav>
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center gap-x-[80px]">
          <div className="inline-flex gap-x-[30px]">
            <CiSearch className="cursor-pointer text-3xl font-bold text-black" />
            <div className="relative cursor-pointer">
              <CiHeart className="text-3xl font-bold text-black" />
              <p className="absolute -top-1 left-5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-sm text-white">
                5
              </p>
            </div>
            <div className="relative cursor-pointer">
              <FiShoppingCart className="text-3xl text-black" />
              <p className="absolute -top-1 left-5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-sm text-white">
                4
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-x-[15px]">
            <div className="inline-flex h-[30px] w-[30px] items-start justify-start gap-2.5">
              <Image src={adminIcon} alt="admin" />
            </div>
            <Link href="/sign-in" className="text-nowrap">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
