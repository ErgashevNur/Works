import { Outlet } from "react-router-dom";

import Navbar from "../components/navabar";
import Footer from "../components/footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
