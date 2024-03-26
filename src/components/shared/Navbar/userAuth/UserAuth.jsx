import { adminIcon } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

const UserAuth = () => {
  return (
    <div className="inline-flex items-center gap-1 md:gap-2 lg:gap-3 xl:gap-x-[15px]">
      <div className="h-[25px] w-[25px] lg:h-[30px] lg:w-[30px]">
        <Image src={adminIcon} alt="admin" />
      </div>
      <Link href="/sign-in" className="text-nowrap">
        Sign in
      </Link>
    </div>
  );
};

export default UserAuth;
