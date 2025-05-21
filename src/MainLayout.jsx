import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const MainLayout = () => {
  return (
    <div className="primary-font">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
