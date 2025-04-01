import Nav from "./Nav";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <main className="min-h-screen w-full bg-primary-color relative">
      <div className="padding-x w-full">
        <Nav />
      </div>{" "}
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
