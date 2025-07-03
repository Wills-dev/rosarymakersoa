"use client";

import Link from "next/link";

import { useActivePath } from "../../lib/hooks/useActivePath";

const NavLink = ({ href, children }) => {
  const isActive = useActivePath(href);

  return (
    <div className="relative group">
      <Link href={href} className={`font-light text-sm uppercase text-white`}>
        {children}
      </Link>

      {isActive && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
      )}

      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 lg:group-hover:w-full" />
    </div>
  );
};

export default NavLink;
