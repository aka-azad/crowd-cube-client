import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router";

const Signin = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to={"/"} />;
  }
  return <div>signin form</div>;
};

export default Signin;
