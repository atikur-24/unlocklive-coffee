import avatar from "@/assets/images/icon/Admin.svg";
import logo from "@/assets/images/logo/unlocklive.svg";
import { navMenu } from "@/data/navMenu";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import Container from "../ui/Container";

const Navbar = () => {
  const navItems = (
    <Fragment>
      {navMenu?.map((name) => {
        return name?.submenu ? (
          <li key={name.path}>
            <details>
              <summary>{name?.name}</summary>
              <ul>
                {name?.submenu?.map((submenuItem) => {
                  return (
                    <li key={submenuItem.path}>
                      <Link href={submenuItem.path} className="text-nowrap">
                        {submenuItem?.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        ) : (
          <li key={name.path} className="text-nowrap">
            <Link href={name.path}>{name.name}</Link>
          </li>
        );
      })}
    </Fragment>
  );

  return (
    <Container className="pt-3 md:pt-5 lg:pt-[27px]">
      <div className="flex items-center justify-between gap-x-6 pb-4 font-medium">
        <nav className="inline-flex list-none items-start justify-start gap-[50px]">
          {navItems}
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
              <Image src={avatar} alt="admin" />
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
