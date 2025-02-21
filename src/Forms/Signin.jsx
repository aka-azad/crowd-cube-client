import { useContext } from "react";
import AuthContext from "../Provider/AuthContext";
import { Link, Navigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { toast } from "react-toastify";
import loginSVG from "../assets/login.svg";
import { Fade } from "react-awesome-reveal";
import axios from "axios";

const Signin = () => {
  const { user, signinWithEmailPassword, signinWithGoogle, setLoading } =
    useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (user) {
    return <Navigate to={"/"} />;
  }

  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return null;
  };

  const handleSubmit = (e) => {
    const passwordError = validatePassword(password);
    if (passwordError) {
      toast.error(passwordError);

      return;
    }
    setLoading(true);
    e.preventDefault();
    setError("");
    signinWithEmailPassword(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    setLoading(true);

    signinWithGoogle()
      .then((res) => {
        setLoading(false);
        axios
          .post(
            "http://localhost:5000/users",
            {
              displayName: res.user.displayName,
              email: res.user.email,
              photoURL: res.user.photoURL,
            },
            { withCredentials: true }
          )
          .then((data) => {
            data.data.insertedId &&
              toast.success("Account Registered Successfully");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="container mx-auto p-4 grid sm:grid-cols-2 overflow-hidden">
      <Fade direction="left">
        <div className="sm:pt-16">
          <h1 className="text-2xl font-bold text-center mb-4">Log In</h1>
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <button type="submit" className="btn btn-primary w-full">
                Log In
              </button>
            </div>
          </form>
          <div className="divider max-w-sm mx-auto">OR</div>
          <div className="flex flex-col items-center mt-4">
            {error && <p className="text-red-500">{error}</p>}
            <button
              onClick={handleGoogleLogin}
              className="btn btn-primary btn-circle"
            >
              <FcGoogle className="text-2xl" />
            </button>
            <p className="mt-2">
              {"Don't have an account? "}
              <Link to="/signup" className="text-blue-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </Fade>
      <Fade direction="right">
        <div className="hidden sm:flex">
          <img src={loginSVG} alt="" />
        </div>
      </Fade>
    </div>
  );
};

export default Signin;
