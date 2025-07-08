import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import companyRoutes from "./compnayRoutes";

const root = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  {
    path: "/company",
    element: <RootLayout />,
    children: companyRoutes,
  },
]);

export default root;
