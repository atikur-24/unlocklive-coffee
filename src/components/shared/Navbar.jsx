"use client";

import avatar from "@/assets/images/icon/Admin.svg";
import logo from "@/assets/images/logo/unlocklive.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import Container from "../ui/Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", value: false },
    { name: "Pages", path: "pages", value: true },
    { name: "Menu", path: "menu", value: true },
    { name: "Contact Us", path: "contact-us", value: false },
  ];

  return (
    <Container className="pt-3 md:pt-5 lg:pt-[27px]">
      <div className="flex items-center justify-between gap-x-6 pb-4 font-medium">
        {/* large device navbar and nav item */}
        <nav className="inline-flex items-start justify-start gap-[50px]">
          {navItems?.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="inline-flex items-center justify-start gap-3"
            >
              {item.name} {item.value === true && <FaAngleDown />}
            </Link>
          ))}
        </nav>
        {/* small device navbar and nav item */}
        {isMenuOpen && (
          <div className="absolute left-0 top-20 z-10 w-full transition-all">
            <div className="bg-bgSecondary rounded border border-secondary p-4">
              {/* Mobile Nav Items Section */}
              <nav className="flex flex-col gap-y-2.5 text-sm">
                {navItems?.map((item) => (
                  <Link key={item.path} href={item.path}>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center gap-x-[117px]">
          <div className="inline-flex gap-x-[30px]"></div>
          <div className="inline-flex items-center gap-x-[15px]">
            <div className="inline-flex h-[30px] w-[30px] items-start justify-start gap-2.5">
              <Image src={avatar} alt="admin" />
              <div className="flex h-[18px] w-[18px] items-center justify-center">
                <div className="relative h-[18px] w-[18px]"></div>
              </div>
            </div>
            <Link href="/sign-in">Sign in</Link>
          </div>
        </div>
        {/* Bar icons for mobile device */}
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-4 md:hidden"
        >
          {/* dropdown for mobile devices */}
          <span>
            {isMenuOpen === true ? (
              <HiXMark className="h-6 w-6 cursor-pointer" />
            ) : (
              <HiBars3BottomRight className="h-6 w-6 cursor-pointer" />
            )}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
