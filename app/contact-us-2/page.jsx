import MainLayout from "../../components/MainLayout";

const ContaactUs = () => {
  return (
    <MainLayout>
      <section className="bg-cream py-6 w-full">
        <div className="padding-x w-full space-y-6">
          <div className="section-bg text-primary-brown space-y-4">
            <h1 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              Contact Us
            </h1>
            <div className="py-6 space-y-3">
              <p className="font-extrabold">Rosary Makers of America,</p>
              <p>2300 W Park Pl. Blvd Ste. 142</p>
              <p>Stone Mountain, GA 30087</p>
              <p>Telephone. Fax . Text: 678-345-0788</p>
              <p>Email: info@rosarymakersoa.org</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContaactUs;
