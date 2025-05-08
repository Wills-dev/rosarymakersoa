import Nav from "../organisms/Nav";

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      <Nav />
      {children}
    </div>
  );
};

export default MainLayout;
