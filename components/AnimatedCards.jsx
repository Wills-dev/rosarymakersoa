

const AnimatedCards = ({ whatWeDo, i }) => {
  return (
    <div
      key={i}
      className="lg:col-span-2 sm:col-span-3 col-span-6 w-full min-w-full py-16 px-8 flex flex-col gap-8 bg-white justify-center items-center rounded-lg  relative group shadow overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary-color to-transparent transition-all duration-500 transform translate-y-full group-hover:translate-y-0 w-full h-full rounded-lg"/>
      <div className="h-24 w-24 bg-primary-color rounded-full z-10 group-hover:bg-white transition-all duration-500 flex justify-center items-center">
        <div className="h-10 w-10 text-white group-hover:text-primary-color">
          {whatWeDo?.imgUrl}
        </div>
      </div>
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
