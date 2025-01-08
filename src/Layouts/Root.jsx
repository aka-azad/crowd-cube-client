import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Root() {
  return (
    <div className="">
      <Navbar />

      <div className="max-w-[1280px] w-full min-h-[70vh] mx-auto  sm:p-0 px-2 ">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Root;
