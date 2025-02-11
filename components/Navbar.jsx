"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import DonateButton from "./DonateButton";

const Navbar = () => {
  const pathname = usePathname();
  const active = "text-primary-color";

  const [isActive, setIsActive] = useState(false);

  const handleActiveMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <header className="w-full font-mulish shadow fixed z-50 backdrop-blur">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-10 border-b-1 py-4 text-sm text-[#687693] max-md:hidden">
          <div className="flex items-center gap-6">
            <p className="">Telephone. Fax.Text: 678-345-0788</p> |{" "}
            <p>Email: info@rosarymakersoa.org</p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/rosarymakersoa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:rotate-[360deg] transition-all duration-500"
            >
              <Image
                src="/assets/icons/facebook-app-round-icon.svg"
                width={12}
                height={12}
                alt="facebook"
                className="object-obtain w-5 h-5"
              />
            </a>
            <a
              href="https://x.com/makersrosary"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:rotate-[360deg] transition-all duration-500"
            >
              <Image
                src="/assets/icons/x-social-media-round-icon.svg"
                width={12}
                height={12}
                alt="facebook"
                className="object-obtain w-5 h-5"
              />
            </a>
            <a
              href="https://www.instagram.com/rosarymakersofamerica/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:rotate-[360deg] transition-all duration-500"
            >
              <Image
                src="/assets/icons/black-instagram-icon.svg"
                width={12}
                height={12}
                alt="facebook"
                className="object-obtain w-5 h-5"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/rosary-makers-of-america/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:rotate-[360deg] transition-all duration-500"
            >
              <Image
                src="/assets/icons/linkedin-square-icon.svg"
                width={12}
                height={12}
                alt="facebook"
                className="object-obtain w-5 h-5"
              />
            </a>
          </div>
        </div>
        <nav className=" px-4 py-6 flex items-center justify-between bg-white">
          <div className="font-bold">
            <Link href="/">
              <Image
                src="/assets/images/RMOA-Logo.png"
                width={140}
                height={80}
                alt="logo"
                className=" object-contain"
              />
            </Link>
          </div>
          <div className="flex items-center md:gap-16 gap-4 max-md:hidden">
            <ul className="flex items-center gap-10 text-[#64676c]">
              <li className="hover:text-primary-color  transition-all duration-300">
                <Link href="/" className={`${pathname === "/" ? active : ""}`}>
                  Home
                </Link>
              </li>

              <li className="hover:text-primary-color transition-all duration-300">
                <Link
                  href="/about-us"
                  className={`${pathname === "/about" ? active : ""}`}
                >
                  About
                </Link>
              </li>
              <li className="hover:text-primary-color transition-all duration-300">
                <Link
                  href="/contact"
                  className={`${pathname === "/contact" ? active : ""}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <DonateButton />
          </div>
        </nav>
        <AnimatePresence>
          <motion.div
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            exit={{ y: 10 }}
            transition={{ duration: 0.3 }}
            className=" p-4 bg-slate-700 md:hidden"
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleActiveMenu}
                className="flex items-center gap-2 bg-black px-4 py-2 rounded-lg text-white"
              >
                <span>Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-slate-700 md:hidden"
            >
              <ul className="flex flex-col gap-3 text-white">
                <li className="hover:text-primary-color transition-all duration-300">
                  <Link
                    href="/"
                    className={`${pathname === "/" ? active : ""}`}
                  >
                    Home
                  </Link>
                </li>

                <li className="hover:text-primary-color transition-all duration-300">
                  <Link
                    href="/about-us"
                    className={`${pathname === "/about" ? active : ""}`}
                  >
                    About
                  </Link>
                </li>
                <li className="hover:text-primary-color transition-all duration-300">
                  <Link
                    href="/contact"
                    className={`${pathname === "/contact" ? active : ""}`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
