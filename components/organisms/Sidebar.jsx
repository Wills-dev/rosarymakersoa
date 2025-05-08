import { AnimatePresence, motion } from "framer-motion";

import Logo from "../../components/atoms/Logo";
import NavLink from "../../components//atoms/NavLink";

import { links } from "../../lib/constants/";

const Sidebar = ({ toggle }) => {
  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="w-full h-full min-h-screen bg-part-transparent absolute z-50 top-0 bottom-0 left-0 right-0 flex justify-end"
    >
      <AnimatePresence>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          exit={{ x: 100 }}
          transition={{ duration: 0.4 }}
          className="max-w-96 sm:w-full w-[90%] bg-black text-white h-full py-6 padding-ctn"
        >
          <div className="flex-c-b">
            <Logo />
            <button className="block float-end text-2xl" onClick={toggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col  pt-12 gap-2">
            {links.map((link) => (
              <li
                key={link?.title}
                className="border-b-1  border-gray-700 py-2"
              >
                <NavLink href={link?.link}>{link?.title}</NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </motion.aside>
  );
};

export default Sidebar;
