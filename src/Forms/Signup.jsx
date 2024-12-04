import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router";

const Signup = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to={"/"} />;
  }
  return <div>signup form</div>;
};

export default Signup;
