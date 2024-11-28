// RRD import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/navabar";

// pages
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Work from "./pages/work";
import MainLayout from "./Layout/MainLayout";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "/work",
          element: <Work />,
        },

        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};
export default App;
