import { motion, AnimatePresence } from "framer-motion";

const AnimatedCards = ({ whatWeDo, i }) => {
  return (
    <div
      key={i}
      className="lg:col-span-2 sm:col-span-3 col-span-6 w-full min-w-full py-16 px-8 flex flex-col gap-8 bg-white justify-center items-center rounded-lg  relative group shadow"
    >
      <AnimatePresence>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3 }}
          className="absolute hidden h-full w-full left-0 bottom-0 top-0 right-0 bg-primary-color group-hover:block rounded-lg "
        ></motion.div>
      </AnimatePresence>
      <div className="h-24 w-24 bg-primary-color rounded-full z-10 group-hover:bg-white transition-all duration-500"></div>
      <h6 className="text-center text-[#002d5b] font-semibold sm:text-xl text-lg z-10 group-hover:text-white transition-all duration-300">
        {whatWeDo?.caption}
      </h6>
      <p className="text-center font-poppins font-light leading-relaxed text-[#464d65] z-10 group-hover:text-white transition-all duration-300">
        {whatWeDo?.writeUp}
      </p>
    </div>
  );
};

export default AnimatedCards;
