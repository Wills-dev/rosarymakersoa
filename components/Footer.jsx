import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-primary-black">
      <div className="padding-x">
        <div className="grid grid-cols-8 gap-10 py-28">
          <div className=" md:col-span-2 sm:col-span-4 col-span-8">
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
          <div className="md:col-span-2 sm:col-span-4 col-span-8 flex flex-col gap-6">
            <h6 className="sm:text-xl text-lg text-white font-light">
              Contact Info
            </h6>
            <ul className="flex flex-col gap-4 text-[#868c98]">
              <li className="font-light">
                Rosary Makers of America 2300 West Park Place Blvd., Ste 142
                Stone Mountain, Georgia 30087
              </li>
              <li className="font-light">Telephone. Fax.Text: 678-345-0788</li>
              <li className="font-light">Email: info@rosarymakersoa.org</li>
            </ul>
          </div>
          {footerLinks?.map((heading) => (
            <div
              key={heading?.heading}
              className="md:col-span-2 sm:col-span-4 col-span-8 flex flex-col gap-6"
            >
              <h6 className="sm:text-xl text-lg text-white font-light">
                {heading?.heading}
              </h6>
              <ul className="flex flex-col gap-4 ">
                {heading?.subLinks?.map((link) => (
                  <li className="font-light text-[#868c98] hover:text-blue-950 transition-all duration-300 ease-in-out">
                    <Link href={link?.link}>{link?.title} lies</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex sm:items-center justify-between border-t-1 border-[#868c98] py-4 flex-wrap gap-6 max-sm:flex-col-reverse">
          <p className="text-[#868c98]">
            Copyright ©2025 All rights reserved | Rosary Markers of America
          </p>
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
      </div>
    </footer>
  );
};

export default Footer;
