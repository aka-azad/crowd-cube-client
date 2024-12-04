import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Campaigns from "../Pages/Campaigns";
import ErrorPage from "../Pages/ErrorPage";
import Signin from "../Forms/Signin";
import Signup from "../Forms/Signup";

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
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Router;
