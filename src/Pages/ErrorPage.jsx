import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-3xl my-5">
      <h1 className="text-9xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-4">Oops! Page not found.</p>
      <Link
        to="/"
        className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-black"
      >
        Go Back Home
      </Link>
    
    </div>
  );
};

export default NotFound;
