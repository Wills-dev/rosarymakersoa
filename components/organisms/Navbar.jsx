import { useNavbarScroll } from "../../lib/hooks/useNavbarScroll";

import Logo from "../../components/atoms/Logo";
import DesktopNavbar from "../../components/molecules/DesktopNavbar";
import MobileNav from "../../components//molecules/MobileNav";

const Navbar = ({ toggle }) => {
  const { visible, isHeightGreaterThanScreen } = useNavbarScroll();

  return (
    <header className="w-full">
      <div
        className={`fixed w-full backdrop-blur-xl bg-black transition-transform duration-700 z-20 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${isHeightGreaterThanScreen && "shadow"}`}
      >
        <div className="py-6 flex-c-b relative sm:px-[2rem] px-3">
          <Logo />
          <DesktopNavbar />
          <MobileNav toggle={toggle} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
