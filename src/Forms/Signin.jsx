import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, Navigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const Signin = () => {
  const { user, signinWithEmailPassword, signinWithGoogle, setLoading } =
    useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const navigate = useNavigate();

  if (user) {
    return <Navigate to={"/"} />;
  }
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    setError("");
    signinWithEmailPassword(email, password)
      .then((res) => {
        console.log(res.user);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleLogin = () => {
    setLoading(true);

    signinWithGoogle()
      .then((res) => {
        console.log(res.user);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Log In</h1>
      {error && <p className="text-red-500">{error}</p>}
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
  );
};

export default Signin;
