import Link from "next/link";

const DonateButton = () => {
  return (
    <>
      {" "}
      <Link
        href="/make-a-donation-2"
        className="bg-primary-color py-3 px-8 text-white hover:bg-blue-900  transition-all duration-300 max-w-fit z-10"
      >
        Donate
      </Link>
    </>
  );
};

export default DonateButton;
