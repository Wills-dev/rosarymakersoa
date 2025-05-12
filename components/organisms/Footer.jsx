import Link from "next/link";
import Logo from "../atoms/Logo";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-black  padding-y">
        <div className="padding-y padding-ctn text-gray-300">
          <div className="grid grid-cols-6 gap-10">
            <div className="md:col-span-2 sm:col-span-3 col-span-6 space-y-4">
              <Logo />
              <ul className="flex flex-col gap-4">
                <li className="font-light">
                  Rosary Makers of America 2300 West Park Place Blvd., Ste 142
                  Stone Mountain, Georgia 30087
                </li>
                <li className="font-light">
                  Telephone. Fax.Text: 678-345-0788
                </li>
                <li className="font-light">Email: info@rosarymakersoa.org</li>
              </ul>
            </div>
            <div className="md:col-span-2 sm:col-span-3 col-span-6 flex flex-col gap-6">
              <h6 className="sm:text-xl text-lg  font-medium">Quick Links</h6>
              <ul className="flex flex-col gap-4 ">
                <li className="font-light">
                  <Link href="/">Home</Link>
                </li>
                <li className="font-light">
                  <Link href="/about-us">About us</Link>
                </li>
                <li className="font-light">
                  <Link href="/come-join-us-2">Join us</Link>
                </li>
                <li className="font-light">
                  <Link href="/contact-us-2">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="md:col-span-2 sm:col-span-3 col-span-6 flex flex-col gap-6">
              <h6 className="sm:text-xl text-lg font-medium">Others</h6>
              <ul className="flex flex-col gap-4">
                <li className="font-light">
                  <Link href="/news">News</Link>
                </li>
                <li className="font-light">
                  <Link href="/make-a-donation-2">Donate</Link>
                </li>
                <li className="font-light">
                  <Link href="/the-holy-rosary">The Holy Rosary</Link>
                </li>
                <li className="font-light">
                  <Link href="/our-rosary-makers">Our Rosary markers</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="padding-ctn bg-black">
        <div className="flex sm:items-center justify-between border-t-1  py-4 flex-wrap gap-6 max-sm:flex-col-reverse">
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
