"use client";

import { bakilda } from "@/assets/Fonts/font";
import { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import NavItem from "../NavItem";
import Cart from "../cart/Cart";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import UserAuth from "../userAuth/UserAuth";
import Wishlist from "../wishlist/Wishlist";

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState("-ml-[400px]");
  const menuRef = useRef();

  useEffect(() => {
    const handelOutsideClose = (e) => {
      if (!menuRef?.current?.contains(e?.target)) {
        setIsOpen("-ml-[400px]");
      }
    };
    document.addEventListener("mousedown", handelOutsideClose);

    return () => {
      document.removeEventListener("mousedown", handelOutsideClose);
    };
  }, []);

  return (
    <div className="">
      <div className="flex w-full items-center justify-between gap-1 py-4">
        <div onClick={() => setIsOpen("")}>
          <RiMenu2Line className="h-5 w-5 cursor-pointer text-my-secondary md:h-6 md:w-6" />
        </div>
        <Logo />
        <div className="flex items-center gap-16">
          <div className="inline-flex gap-x-7 sm:gap-x-5 md:gap-x-6">
            <Search />
            <Wishlist />
            <Cart />
          </div>
          <UserAuth />
        </div>
      </div>

      <div
        className={`border-gray-3 fixed left-0 top-0 z-50  w-[40%]  rounded-lg border-2 bg-white shadow-2xl md:w-[40%] ${isOpen} transition-all duration-500`}
        ref={menuRef}
      >
        <div className="pt-6 md:pt-8">
          <div className="mb-5 flex items-center justify-between px-4">
            <div>
              <p
                className={`${bakilda.className} font-semibold tracking-wide text-my-primary md:font-bold`}
              >
                Unlocklive <span className="text-my-secondary">Coffee</span>
              </p>
            </div>
            <div className="rounded-full border-2 border-my-primary p-1 text-2xl">
              <div onClick={() => setIsOpen("-ml-[400px]")}>
                <MdClose className="h-4 w-4 cursor-pointer text-my-primary" />
              </div>
            </div>
          </div>

          <hr className="border-[#101113] border-opacity-10 shadow-md" />
          <div className="h-[100vh] list-none space-y-4 rounded-lg bg-white px-4 py-6 drop-shadow-xl md:space-y-5">
            <NavItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
