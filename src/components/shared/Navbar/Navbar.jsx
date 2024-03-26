import Container from "../../ui/Container";
import NavItem from "./NavItem";
import Cart from "./cart/Cart";
import Logo from "./logo/Logo";
import ResponsiveNavbar from "./responsive/ResponsiveNavbar";
import Search from "./search/Search";
import UserAuth from "./userAuth/UserAuth";
import Wishlist from "./wishlist/Wishlist";

const Navbar = () => {
  return (
    <Container className="border-[#101113] border-opacity-10 py-3 pb-5 md:py-5 lg:border-b xl:py-6">
      <div className="hidden items-center justify-between gap-x-6 pb-4 font-medium lg:flex">
        <nav className="inline-flex list-none items-start justify-start gap-7 xl:gap-10">
          <NavItem />
        </nav>
        <Logo />
        <div className="flex items-center gap-x-16 xl:gap-x-20">
          <div className="inline-flex gap-x-6 xl:gap-x-[30px]">
            <Search />
            <Wishlist />
            <Cart />
          </div>
          <UserAuth />
        </div>
      </div>
      {/* navbar for mobile and tablet devices */}
      <div className="lg:hidden">
        <ResponsiveNavbar />
      </div>
    </Container>
  );
};

export default Navbar;
