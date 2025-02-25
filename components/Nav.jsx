"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const pathname = usePathname();
  const active = "text-primary-black";
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);

  const links = [
    {
      link: "/about-us",
      title: "About",
    },
    {
      link: "/news",
      title: "News",
    },
    {
      link: "/come-join-us-2",
      title: "Come join us",
    },
    {
      link: "/make-a-donation-2",
      title: "Make a donation",
    },
    {
      link: "/make-a-donation-2",
      title: "gratitude",
    },
    {
      link: "/contact-us-2",
      title: "Contact",
    },
  ];

  return (
    <header className="w-full">
      <div className="py-2 border-b-1 border-brown flex justify-end max-md:hidden">
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
      <div className="w-full md:py-8 py-4 flex items-center justify-between gap-10 border-b-1 border-brown">
        <Link href="/">
          <Image
            src="/assets/images/RMOA-Logo.png"
            width={140}
            height={80}
            alt="logo"
            className=" object-contain"
          />
        </Link>
        <p className=" lg:max-w-3xl  md:max-w-xl max-md:hidden text-primary-brown">
          "God is not removing you from your environment. He is not taking you
          away from the world, or from your condition in life, or from your
          noble human ambitions, or from your professional work ... But he wants
          you to be a saint - right there!”{" "}
          <span className=" italic">Saint Josemaría</span>
        </p>
        <button
          className="md:hidden"
          onClick={() => setIsActiveDropdown((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {isActiveDropdown && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 220 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden p-4 flex flex-col w-full bg-primary-black ${
              isActiveDropdown
                ? " max-md:translate-y-0 max-xl:pointer-events-auto"
                : "max-md:translate-y-full max-xl:pointer-events-none"
            }`}
          >
            {" "}
            {links?.map((link) => (
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, duration: 0.3 }}
                exit={{ opacity: 0, duration: 0.2 }}
                href={link?.link}
                key={link?.link}
                className={`${
                  pathname === "/about-us" ? active : ""
                } text-lg uppercase font-semibold text-brown hover:text-primary-brown transition-all duration-300`}
              >
                {link?.title}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <nav className="w-full py-4 flex items-center justify-between  gap-4 border-b-1 border-brown max-md:hidden">
        <Link href="/" className="text-primary-brown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
        </Link>
        {links?.map((link) => (
          <Link
            href={link?.link}
            key={link?.link}
            className={`${
              pathname === "/about-us" ? active : ""
            } text-lg uppercase font-semibold text-primary-brown hover:text-primary-black transition-all duration-300`}
          >
            {link?.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
