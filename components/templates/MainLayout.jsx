import Footer from "../organisms/Footer";
import Nav from "../organisms/Nav";

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
