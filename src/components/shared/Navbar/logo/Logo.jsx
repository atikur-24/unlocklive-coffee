import logo from "@/assets/images/logo/unlocklive.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="hidden sm:block">
      <Link href="/">
        <Image src={logo} alt="unlocklive" />
      </Link>
    </div>
  );
};

export default Logo;
