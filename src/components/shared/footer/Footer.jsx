import { footerBg } from "@/assets/images";
import logoWhite from "@/assets/images/logo/logo-white.png";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className={`relative h-[190px] lg:h-[110px]`}>
        <Image
          src={footerBg}
          alt="footer-bg"
          className="h-full w-full object-fill"
        />
        <div className="absolute inset-0 text-white md:top-1/3">
          <Container className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="">
              <Image src={logoWhite} alt="unlocklive" />
            </div>
            <div className="flex items-center gap-3 lg:gap-8">
              <p>Terms</p>
              <p>Privacy</p>
              <p>Cookies</p>
            </div>
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="flex h-[35px] w-[35px] border-spacing-1.5 items-center justify-center rounded-full border border-stone-2">
                <FaLinkedinIn className="text-[11px]  " />
              </div>
              <div className="flex h-[35px] w-[35px] border-spacing-1.5 items-center justify-center rounded-full border border-stone-2">
                <FaFacebookF className="text-[11px]  " />
              </div>
              <div className="flex h-[35px] w-[35px] border-spacing-1.5 items-center justify-center rounded-full border border-stone-2">
                <FaTwitter className="text-[11px]  " />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;
