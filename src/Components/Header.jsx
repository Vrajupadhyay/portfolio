import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from '../Redux/Slices/AuthSlice';

import Logo from "../assets/Vraj_logo.png";
import MyImage from "../assets/Photo/vraj.jpg";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for checking if user is logged in
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  // for displaying the options acc to role
  const role = useSelector((state) => state?.auth?.role);

  // for logging out
  async function handleLogout(e) {
    e.preventDefault();

    const res = await dispatch(logout());
    if (res?.payload?.success) {
      navigate("/");
    }
  }

  return (
    <>
      <header>
        <div className="navbar bg-base-100 fixed z-50">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
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
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/myprojects">My Porjects</Link>
                </li>
                <li>
                  <Link to="/techstack">Tech Stack</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">
              <img src={Logo} alt="logo" className="h-10 w-10" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/myprojects">My Porjects</Link>
              </li>
              <li>
                <Link to="/techstack">Tech Stack</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end px-2">
            {isLoggedIn && role === "ADMIN" && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={MyImage} />
                  </div>
                </div>
                <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      <Link to="/user/profile">Profile</Link>
                    </a>
                  </li>
                  {/* <li>
                    <a>Settings</a>
                  </li> */}
                  <li>
                    <Link onClick={handleLogout}>Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
