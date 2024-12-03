import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Campaigns from "../Pages/Campaigns";
import ErrorPage from "../Pages/ErrorPage";

const Router = new createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "campaigns",
        element: <Campaigns />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Router;
