import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { motion } from "framer-motion";

import Lottie from "lottie-react";
import animationData from "../assets/animation.json";

function Login() {
  const { isAuthenticated, setIsAuthenticated, setProfile } = useAuth();

  // creating a state to store the user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  // function is triggered on the form is submit
  const handleLogin = async (e) => {
    e.preventDefault(); // To prevent browser from getting bydefault refresh

    if (!email || !password || !role) {
      toast.error("Please fill all the fields");
    }

    try {
      // Post request to the server to register the user
      const { data } = await axios.post(
        `${process.env.VITE_BACKEND_URL}/api/users/login`,
        { email, password, role },
        { withCredentials: true }, // This is used to send cookies with the request
        {
          // Defining the headers that the data is the form data
          headers: {
            "Content-Type": "multipart/form-data", // sending form data in Postman also through our api as our multipart is form data
          },
        },
      );
      console.log(data); // either directly give response or destructure it as response.data as data is present in response
      localStorage.setItem("jwt", data.token);
      localStorage.setItem("role", data.role);

      toast.success(data.message || "User Logged in successfully");

      setIsAuthenticated(true);
      setProfile(data);
      setRole(data.role); // Store role in context

      // after data recieved then empty the field
      setEmail("");
      setPassword("");
      setRole("");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Please fill required fields");
    }
  };

  return (
    // <div className="min-h-screen flex items-center justify-center">
    //   <div className="w-full max-w-md bg-white shadow-md rounded-sm p-8">
    //     <form onSubmit={handleLogin}>
    //       {/* Logo */}
    //       <div className="font-bold text-lg items-center text-center">
    //         Pulse of <span className="text-blue-400">Thoughts</span>
    //       </div>
    //       <h1 className="text-xl font-semibold my-6">Login</h1>

    //       {/* Form Entries */}

    //       {/* Selecting Role */}
    //       <select
    //         value={role}
    //         onChange={(e) => setRole(e.target.value)}
    //         className="w-full p-2 mb-4 border rounded-md"
    //       >
    //         <option value="" defaultChecked>
    //           Select a role
    //         </option>
    //         <option value="user">User</option>
    //         <option value="admin">Admin</option>
    //       </select>

    //       {/* Entering email */}
    //       <div className="mb-4">
    //         <input
    //           type="text"
    //           placeholder="Enter your email address"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           className="w-full p-2 border rounded-md"
    //         />
    //       </div>

    //       {/* Entering password */}
    //       <div className="mb-4">
    //         <input
    //           type="password"
    //           placeholder="Enter your password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           className="w-full p-2 border rounded-md"
    //         />
    //       </div>

    //       <p className="text-center mb-4">
    //         New User?
    //         <Link className="text-blue-600 pl-1" to="/register">
    //           Register Now
    //         </Link>
    //       </p>
    //       <button
    //         type="submit"
    //         className="w-full p-2 bg-blue-500 hover:bg-blue-800 duration-300 rounded-md text-white"
    //       >
    //         Login
    //       </button>
    //     </form>
    //   </div>
    // </div>

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 relative">
      {/* Animated Illustration */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 w-48"
      >
        <Lottie animationData={animationData} loop={true} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-8"
      >
        {/* Logo */}
        <div className="font-extrabold text-2xl text-center text-gray-700">
          Pulse of <span className="text-blue-500">Thoughts</span>
        </div>
        <h1 className="text-2xl font-semibold my-6 text-center text-gray-800">
          Login
        </h1>

        {/* Form Entries */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Selecting Role */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select a role
            </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          {/* Entering email */}
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          {/* Entering password */}
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <p className="text-center text-gray-600">
            New User?
            <Link
              className="text-blue-600 font-semibold pl-1 hover:underline"
              to="/register"
            >
              Register Now
            </Link>
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full p-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-lg text-white font-semibold shadow-md"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
