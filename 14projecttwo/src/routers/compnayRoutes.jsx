import { Navigate } from "react-router-dom";
import About from "../pages/company/About";
import History from "../pages/company/History";

const companyRoutes = [
  {
    index: true,
    element: <Navigate to="about" replace />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "history",
    element: <History />,
  },
];

export default companyRoutes;
