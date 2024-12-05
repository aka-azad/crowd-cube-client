import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Campaigns from "../Pages/Campaigns";
import ErrorPage from "../Pages/ErrorPage";
import Signin from "../Forms/Signin";
import Signup from "../Forms/Signup";
import PrivateRoute from "./PrivateRoute";
import AddCampaign from "../Forms/AddCampaign";
import MyCampaigns from "../Pages/MyCampaigns";
import MyDonations from "../Pages/MyDonations";
import UpdateCampaign from "../Forms/UpdateCampaign";

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
        path: "add-campaign",
        element: (
          <PrivateRoute>
            <AddCampaign />
          </PrivateRoute>
        ),
      },
      {
        path: "update-campaign/:id",
        element: (
          <PrivateRoute>
            <UpdateCampaign />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/my-campaigns/${params.id}`),
      },
      {
        path: "my-campaigns",
        element: (
          <PrivateRoute>
            <MyCampaigns />
          </PrivateRoute>
        ),
      },
      {
        path: "my-donations",
        element: (
          <PrivateRoute>
            <MyDonations />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Router;
