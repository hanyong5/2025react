import ListPageComp from "../pages/tour/ListPageComp";
import ViewPageComp from "../pages/tour/ViewPageComp";

const tourRouter = () => {
  return [
    {
      path: "list",
      element: <ListPageComp />,
    },
    {
      path: "view",
      element: <ViewPageComp />,
    },
  ];
};

export default tourRouter;
