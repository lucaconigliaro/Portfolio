import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function DefaultLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}