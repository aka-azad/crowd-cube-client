import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Root() {
  return (
    <>
      <Navbar />
      <hr className="border-2" />
      <div className="max-w-[1280px] mx-auto">
        <Outlet />
      </div>
      <ToastContainer position="top-center" />
      <Footer />
    </>
  );
}

export default Root;
