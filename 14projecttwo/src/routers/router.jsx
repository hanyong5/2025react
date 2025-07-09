import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import companyRoutes from "./compnayRoutes";
import memberRoutes from "./memberRoutes";

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
  {
    path: "/member",
    element: <RootLayout />,
    children: memberRoutes,
  },
]);

export default root;
