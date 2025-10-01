import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

export default function DefaultLayout() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
}
