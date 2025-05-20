import { Navigate } from "react-router-dom";
import TestListComp from "../pages/test/TestListComp";
import TestWriteComp from "../pages/test/TestWriteComp";
import TestViewComp from "../pages/test/TestViewComp";
import TestModiComp from "../pages/test/TestModiComp";

function testRouter() {
  return [
    {
      path: "list",
      element: <TestListComp />,
    },
    {
      path: "",
      element: <Navigate replace to="list" />,
    },
    {
      path: "write",
      element: <TestWriteComp />,
    },
    {
      path: "view/:tno",
      element: <TestViewComp />,
    },
    {
      path: "modi/:tno",
      element: <TestModiComp />,
    },
  ];
}

export default testRouter;
