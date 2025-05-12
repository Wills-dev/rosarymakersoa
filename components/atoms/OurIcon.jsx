const OurIcon = ({ children }) => {
  return (
    <div className="w-14 h-14 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white transition-all duration-300 ease-out flex justify-center items-center">
      {children}
    </div>
  );
};

export default OurIcon;
