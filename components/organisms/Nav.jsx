"use client";

import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Nav = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggle = () => {
    setOpenSideBar((prev) => !prev);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <AnimatePresence>
        {openSideBar && <Sidebar toggle={toggle} />}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
