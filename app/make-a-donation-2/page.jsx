import MainLayout from "../../components/MainLayout";

const MakeDonation = () => {
  return (
    <MainLayout>
      {" "}
      <section className="bg-cream py-6 w-full">
        {" "}
        <div className="padding-x w-full space-y-6">
          <div className="section-bg text-primary-brown space-y-4">
            <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              Make a Donation
            </h3>
            <div className="py-6 text-primary-brown space-y-4">
              <p>
                Rosary Makers of America is a 501(c)(3) nonprofit organization.
                Please support our work. Our Mission is to get special needs
                adults employed, to enrich and improve their lives. Be part of
                the Rosary Makers of America family.
              </p>
              <p className="font-bold sm:text-lg">
                Volunteer, make a donation or pray for us.
              </p>
              <p>
                Donating to a Catholic Appeal or Church? Consider a
                tax-deductible donation to support us!
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default MakeDonation;
