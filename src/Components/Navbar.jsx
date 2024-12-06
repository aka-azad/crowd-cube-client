import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, loading, signOutUser } = useContext(AuthContext);
  const publicLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/campaigns">All Campaigns</NavLink>
      </li>
    </>
  );

  const privateLinks = (
    <>
      <li>
        <NavLink to="/add-campaign">Add New Campaign</NavLink>
      </li>
      <li>
        <NavLink to="/my-campaigns">My Campaigns</NavLink>
      </li>
      <li>
        <NavLink to="/my-donations">My Donations</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-gray-800 bg-opacity-70 backdrop-blur-lg text-white sticky top-0 z-50">
      <div className="navbar max-w-[1300px] mx-auto">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn pl-0 pr-2 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {publicLinks}
              {user && privateLinks}
            </ul>
          </div>
          <Link to="/" className="font-bold text-xl">
            CrowdCube
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {publicLinks}
            {user && privateLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-2 flex items-center">
            <ThemeToggle />
          </div>
          {loading ? (
            <span className="loading loading-spinner loading-lg flex item-center mx-auto"></span>
          ) : // <span className="loading loading-spinner loading-lg flex item-center mx-auto"></span>
          user ? (
            <div className="dropdown dropdown-hover dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    className="w-full h-full"
                    alt={user.displayName}
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-primary text-primary-content rounded-box z-[10000] mt-3 w-52 p-2 shadow-2xl"
              >
                <li>
                  <p className="justify-between">{user.displayName}</p>
                </li>
                <li>
                  <p onClick={signOutUser}>Logout</p>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/signup" className="btn btn-primary mr-2">
                Register
              </Link>
              <Link to="/signin" className="btn btn-secondary">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
