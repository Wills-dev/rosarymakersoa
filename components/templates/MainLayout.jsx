import Nav from "../organisms/Nav";

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
