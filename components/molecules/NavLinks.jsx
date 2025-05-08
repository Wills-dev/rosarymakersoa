import NavLink from "./../atoms/NavLink";

import { links } from "../../lib/constants";

const NavLinks = () => {
  return (
    <nav className="flex items-center space-x-4">
      {links?.map((link) => (
        <NavLink key={link?.title} href={link?.link}>
          {link?.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinks;
