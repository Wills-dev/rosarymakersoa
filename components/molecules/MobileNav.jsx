import HamburgerIcon from "../atoms/HamburgerIcon";

const MobileNav = ({ toggle }) => {
  return (
    <div className="lg:hidden block">
      <HamburgerIcon toggle={toggle} />
    </div>
  );
};

export default MobileNav;
