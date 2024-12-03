import { Link, NavLink } from "react-router";

const Navbar = () => {
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

  return (
    <div className="navbar max-w-[1300px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </ul>
        </div>
        <Link to={'/'} className="font-bold text-xl">CrowdCube</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{publicLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn">Sign Up</Link>
        <Link className="btn">Sign In</Link>
      </div>
    </div>
  );
};

export default Navbar;
