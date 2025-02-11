import Image from "next/image";
import Link from "next/link";

const MakeDonation = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-10 h-full w-full">
        <div className="flex flex-col gap-16 justify-center items-center min-h-screen">
          <Image
            src="/assets/images/RMOA-D.png"
            width={200}
            height={200}
            alt="donate"
            className="w-96 h-96"
          />
          <div className="max-w-lg text-[#64676c]">
            <h6 className="font-semibold sm:text-xl text-lg text-center">
              Make a Donation
            </h6>
            <p className="text-center leading-8 py-8">
              Please support our work. Our Mission is to get special needs
              adults employed, to enrich and improve their lives. Rosary Makers
              of America is a 501(c)(3) nonprofit organization.
            </p>
            <div className="flex justify-center">
              <Link
                href="/make-a-donation-2"
                className="bg-primary-color py-3 px-8 text-white hover:bg-blue-900  transition-all duration-300 max-w-fit"
              >
                MAKE A DONATION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeDonation;
