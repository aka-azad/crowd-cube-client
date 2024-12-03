import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Root() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1280px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Root;
