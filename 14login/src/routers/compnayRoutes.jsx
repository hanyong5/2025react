import { Navigate } from "react-router-dom";
import About from "../pages/company/About";
import History from "../pages/company/History";
import RequireAuth from "../components/RequireAuth";

const companyRoutes = [
  {
    index: true,
    element: <Navigate to="about" replace />,
  },
  {
    path: "about",
    element: (
      // <RequireAuth>
      <About />
      // </RequireAuth>
    ),
  },
  {
    path: "history",
    element: (
      // <RequireAuth>
      <History />
      // </RequireAuth>
    ),
  },
];

export default companyRoutes;
