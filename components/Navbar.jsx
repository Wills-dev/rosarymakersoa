"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const active = "text-primary-color";

  return (
    <header className="w-full font-mulish shadow fixed">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-10 border-b-1 py-4 text-sm text-[#687693]">
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
        <nav className=" px-4 py-6 flex items-center justify-between">
          <div className="font-bold">Logo</div>
          <div className="flex items-center gap-16">
            <ul className="flex items-center gap-10">
              <li className="hover:text-primary-color transition-all duration-300">
                <Link href="/" className={`${pathname === "/" ? active : ""}`}>
                  Home
                </Link>
              </li>

              <li className="hover:text-primary-color transition-all duration-300">
                <Link
                  href="/about"
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
            <button className="bg-primary-color py-3 px-8 text-white hover:bg-green-600  transition-all duration-300">
              Donate
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
