import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import RootLayout from "../layout/RootLayout";

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
  {
    path: "/about",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <About />,
      },
    ],
  },
]);

export default root;
