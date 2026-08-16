import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { Outlet } from "react-router";

const Layout = () => (
  <>
    <Navbar />
    <main className="flex flex-col items-center px-4">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
