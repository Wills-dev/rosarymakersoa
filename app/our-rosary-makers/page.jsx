import MainLayout from "../../components/MainLayout";

const page = () => {
  return (
    <MainLayout>
      {" "}
      <section className="bg-cream py-6 w-full">
        <div className="padding-x w-full space-y-6">
          <div className="section-bg text-primary-brown space-y-4">
            <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              Our Rosary Makers
            </h3>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
