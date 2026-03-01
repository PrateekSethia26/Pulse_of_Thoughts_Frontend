import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";

function Navbar() {
  const [show, setShow] = useState(false);
  const { blogs, profile, isAuthenticated, setIsAuthenticated, role } =
    useAuth();
  // console.log(blogs);
  console.log(profile);
  const navigate = useNavigate();

  const loggingOut = async (e) => {
    e.preventDefault(); // Prevent from browser refresh
    try {
      const { data } = await axios.get(
        `${process.env.VITE_BACKEND_URL}/api/users/logout`,
        {
          withCredentials: true,
        },
      );
      setIsAuthenticated(false); // As user log out then set it as false
      toast.success("Logged Out Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error || "Failed to Logout");
    }
  };

  return (
    // <>
    //   <nav className="shadow-lg py-3 px-2">
    //     <div className="flex items-center justify-between container mx-auto">
    //       <div className="font-bold text-lg">
    //         Pulse of <span className="text-blue-400">Thoughts</span>
    //       </div>
    //       {/* Desktop View*/}
    //       <div>
    //         <ul className="hidden md:flex space-x-6">
    //           <Link
    //             to="/"
    //             className="hover:text-blue-600 font-semibold hover:underline hover:underline-offset-4"
    //           >
    //             HOME
    //           </Link>
    //           <Link
    //             to="/blogs"
    //             className="hover:text-blue-600 font-semibold  hover:underline hover:underline-offset-4 "
    //           >
    //             BLOGS
    //           </Link>
    //           <Link
    //             to="/creators"
    //             className="hover:text-blue-600 font-semibold hover:underline hover:underline-offset-4"
    //           >
    //             CREATORS
    //           </Link>
    //           <Link
    //             to="/about"
    //             className="hover:text-blue-600 font-semibold hover:underline hover:underline-offset-4"
    //           >
    //             ABOUT
    //           </Link>
    //           <Link
    //             to="/contact"
    //             className="hover:text-blue-600 font-semibold hover:underline hover:underline-offset-4"
    //           >
    //             CONTACT
    //           </Link>
    //         </ul>
    //         {/* For hamburger menu or dropdown icon */}
    //         <div className="md:hidden" onClick={() => setShow(!show)}>
    //           {show ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
    //         </div>
    //       </div>
    //       <div className="hidden md:flex space-x-2">
    //         {isAuthenticated && profile?.role === "admin" ? (
    //           <Link
    //             to="/dashboard"
    //             className="bg-blue-500 text-white font-semibold hover:bg-blue-700 cursor-pointer duration-300 px-4 py-2 rounded-sm"
    //           >
    //             DASHBOARD
    //           </Link>
    //         ) : (
    //           ""
    //         )}

    //         {!isAuthenticated ? (
    //           <Link
    //             to="/login"
    //             className=" bg-blue-700 text-white font-semibold hover:bg-red-700 cursor-pointer duration-300 px-4 py-2 rounded-sm"
    //           >
    //             LOGIN
    //           </Link>
    //         ) : (
    //           <button
    //             onClick={loggingOut}
    //             className="bg-red-500 text-white font-semibold hover:bg-red-700 cursor-pointer duration-300 px-4 py-2 rounded-sm"
    //           >
    //             LOGOUT
    //           </button>
    //         )}
    //       </div>

    //       {/* Mobile */}
    //       <div>
    //         {show && (
    //           <div className="bg-white">
    //             <ul className="flex flex-col h-screen items-center justify-center space-y-3 md:hidden text-xl">
    //               <Link
    //                 to="/"
    //                 className="hover:text-blue-600 font-semibold hover:underline"
    //                 onClick={() => setShow(!show)}
    //                 smooth="true"
    //                 duration="300"
    //                 offset={-70}
    //                 activeClass="active"
    //               >
    //                 HOME
    //               </Link>
    //               <Link
    //                 to="/blogs"
    //                 className="hover:text-blue-600 font-semibold  hover:underline"
    //                 onClick={() => setShow(!show)}
    //                 smooth="true"
    //                 duration="300"
    //                 offset={-70}
    //                 activeClass="active"
    //               >
    //                 BLOGS
    //               </Link>
    //               <Link
    //                 to="/creators"
    //                 className="hover:text-blue-600 font-semibold hover:underline"
    //                 onClick={() => setShow(!show)}
    //                 smooth="true"
    //                 duration="300"
    //                 offset={-70}
    //                 activeClass="active"
    //               >
    //                 CREATORS
    //               </Link>
    //               <Link
    //                 to="/about"
    //                 className="hover:text-blue-600 font-semibold"
    //                 onClick={() => setShow(!show)}
    //                 smooth="true"
    //                 duration="300"
    //                 offset={-70}
    //                 activeClass="active"
    //               >
    //                 ABOUT
    //               </Link>
    //               <Link
    //                 to="/contact"
    //                 className="hover:text-blue-600 font-semibold hover:underline"
    //                 onClick={() => setShow(!show)}
    //                 smooth="true"
    //                 duration="300"
    //                 offset={-70}
    //                 activeClass="active"
    //               >
    //                 CONTACT
    //               </Link>
    //             </ul>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </nav>
    // </>

    <>
      <nav className="shadow-md py-4 px-6 bg-white fixed w-full top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            Pulse of <span className="text-blue-500">Thoughts</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 transition">
              HOME
            </Link>
            <Link to="/blogs" className="hover:text-blue-600 transition">
              BLOGS
            </Link>
            <Link to="/creators" className="hover:text-blue-600 transition">
              CREATORS
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition">
              ABOUT
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition">
              CONTACT
            </Link>
          </ul>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-3">
            {isAuthenticated && role === "admin" && (
              <Link
                to="/dashboard"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                DASHBOARD
              </Link>
            )}

            {!isAuthenticated ? (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
              >
                LOGIN
              </Link>
            ) : (
              <button
                onClick={loggingOut}
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition"
              >
                LOGOUT
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden" onClick={() => setShow(!show)}>
            {show ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
          </div>
        </div>

        {/* Mobile Navigation */}
        {show && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md py-6 md:hidden">
            <ul className="flex flex-col items-center space-y-6 text-lg font-medium text-gray-800">
              <Link
                to="/"
                onClick={() => setShow(false)}
                className="hover:text-blue-600"
              >
                HOME
              </Link>
              <Link
                to="/blogs"
                onClick={() => setShow(false)}
                className="hover:text-blue-600"
              >
                BLOGS
              </Link>
              <Link
                to="/creators"
                onClick={() => setShow(false)}
                className="hover:text-blue-600"
              >
                CREATORS
              </Link>
              <Link
                to="/about"
                onClick={() => setShow(false)}
                className="hover:text-blue-600"
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                onClick={() => setShow(false)}
                className="hover:text-blue-600"
              >
                CONTACT
              </Link>

              {!isAuthenticated ? (
                <Link
                  to="/login"
                  onClick={() => setShow(false)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
                >
                  LOGIN
                </Link>
              ) : (
                <button
                  onClick={(e) => {
                    loggingOut(e);
                    setShow(false);
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition"
                >
                  LOGOUT
                </button>
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
