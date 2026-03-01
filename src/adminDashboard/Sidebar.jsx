import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa6";
import axios from "axios";

function Sidebar({ component, setComponent }) {
  const { profile, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  console.log(profile);

  const handleComponent = (value) => {
    setComponent(value);
  };

  const goToHome = () => {
    navigate("/");
  };

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
    <>
      <div
        className="sm:hidden fixed top-4 left-4 z-50"
        onClick={() => setShow(!show)}
      >
        <GiHamburgerMenu className="text-2xl" />
      </div>
      <div
        className={`w-64 h-full p-6 shadow-lg fixed top-0 left-0 bg-gray-50 transition-transform duration-300 transform sm:translate-x-0 ${
          show ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div
          className="sm:hidden absolute top-4 right-4 text-xl"
          onClick={() => setShow(!show)}
        >
          <FaArrowLeft className="text-2xl" />
        </div>
        <div className="text-center mb-6">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-2"
            src={profile?.photo?.url}
            alt="profile photo"
          />
          <p className="text-lg font-semibold">{profile?.name}</p>
        </div>
        <ul className="space-y-6">
          <button
            onClick={() => handleComponent("My Blogs")}
            className="w-full px-4 py-2 bg-green-500 rounded-lg hover:bg-green-700 transition duration-300"
          >
            MY BLOGS
          </button>
          <button
            onClick={() => handleComponent("Create Blog")}
            className="w-full px-4 py-2 bg-blue-400 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            CREATE BLOG
          </button>
          <button
            onClick={() => handleComponent("My Profile")}
            className="w-full px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-700 transition duration-300"
          >
            MY PROFILE
          </button>
          <button
            onClick={goToHome}
            className="w-full px-4 py-2 bg-red-500 rounded-lg hover:bg-red-700 transition duration-300"
          >
            HOME
          </button>
          <button
            onClick={loggingOut}
            className="w-full px-4 py-2 bg-yellow-500 rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            LOGOUT
          </button>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
