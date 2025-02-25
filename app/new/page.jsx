import Nav from "../../components/Nav";
import MainSectuon from "../../components/MainSection";

const page = () => {
  return (
    <main className="relative min-h-screen w-full bg-primary-color ">
      <div className="padding-x w-full">
        <Nav />
        <MainSectuon />
      </div>
    </main>
  );
};

export default page;
