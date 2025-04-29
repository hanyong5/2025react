import { createBrowserRouter } from "react-router-dom";
import MainPageComp from "../pages/MainPageComp";
import AboutPageComp from "../pages/AboutPageComp";
import IndexPageComp from "../pages/tour/IndexPageComp";
import tourRouter from "./tourRouter";

const root = createBrowserRouter([
  {
    path: "/",
    element: <MainPageComp />,
  },
  {
    path: "/about",
    element: <AboutPageComp />,
  },
  {
    path: "/tour",
    element: <IndexPageComp />,
    children: tourRouter(),
  },
  //   {
  //     path:"/food",
  //     element:<FoodIndexPageComp />,
  //     children:foodRouter()
  //   }
]);

export default root;
