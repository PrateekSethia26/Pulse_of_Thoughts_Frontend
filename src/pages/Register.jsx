import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Register() {
  const { isAuthenticated, setIsAuthenticated, setProfile } = useAuth();
  const navigate = useNavigate();

  // creating a state to store the user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [education, setEducation] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");

  // For reading the photo and setting the state in
  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPhotoPreview(reader.result);
      setPhoto(file);
    };
  };

  // function is triggered on the form is submit
  const handleRegister = async (e) => {
    e.preventDefault(); // To prevent browser from getting bydefault refresh
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("education", education);
    formData.append("photo", photo);

    try {
      // Post request to the server to register the user
      const { data } = await axios.post(
        `${process.env.VITE_BACKEND_URL}/api/users/register`,
        formData,
        {
          // Defining the headers that the data is the form data
          headers: {
            "Content-Type": "multipart/form-data", // sending form data in Postman also through our api as our multipart is form data
          },
        },
      );
      console.log(data); // either directly give response or destructure it as response.data as data is present in response
      toast.success(data.message || "User registered successfully");

      // setProfile(data);
      // setIsAuthenticated(true);

      // after data recieved then empty the field
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRole("");
      setEducation("");
      setPhoto("");
      setPhotoPreview("");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Please fill required fields");
    }
  };

  return (
    // <div className="min-h-screen flex items-center justify-center">
    //   <div className="w-full max-w-md bg-white shadow-md rounded-sm p-8">
    //     <form onSubmit={handleRegister}>
    //       {/* Logo */}
    //       <div className="font-bold text-lg items-center text-center">
    //         Pulse of <span className="text-blue-400">Thoughts</span>
    //       </div>
    //       <h1 className="text-xl font-semibold my-6">Register</h1>

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

    //       {/* Entering name */}
    //       <div className="mb-4">
    //         <input
    //           type="text"
    //           placeholder="Enter your name"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //           className="w-full p-2 border rounded-md mb-2"
    //         />
    //       </div>

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

    //       {/* Entering phone number */}
    //       <div className="mb-4">
    //         <input
    //           type="number"
    //           placeholder="Enter your phone number"
    //           value={phone}
    //           onChange={(e) => setPhone(e.target.value)}
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

    //       {/* Selecting the education from dropdown */}
    //       <select
    //         value={education}
    //         onChange={(e) => setEducation(e.target.value)}
    //         className="w-full p-2 mb-4 border rounded-md"
    //       >
    //         <option value="" defaultChecked>
    //           Select your education
    //         </option>
    //         <option value="MCA">MCA</option>
    //         <option value="BCA">BCA</option>
    //         <option value="B.Tech">B.Tech</option>
    //         <option value="M.Tech">M.Tech</option>
    //         <option value="MBA">MBA</option>
    //         <option value="BBA">BBA</option>
    //       </select>

    //       {/* Photo Preview and the input photo */}
    //       <div className="flex items-center mb-4 ">
    //         {/* Photo Preview Section */}
    //         <div className="photo w-28 h-20 mr-4">
    //           <img
    //             src={photoPreview ? `${photoPreview}` : "photo"}
    //             alt="photo"
    //           />
    //         </div>

    //         {/* Giving input photo */}
    //         <input
    //           type="file"
    //           onChange={changePhotoHandler}
    //           className="w-full p-2 mb-4 border rounded-md"
    //         />
    //       </div>

    //       <p className="text-center mb-4">
    //         Already Registered?
    //         <Link className="text-blue-600 pl-1" to="/login">
    //           Login Now
    //         </Link>
    //       </p>
    //       <button
    //         type="submit"
    //         className="w-full p-2 bg-blue-500 hover:bg-blue-800 duration-300 rounded-md text-white"
    //       >
    //         Register
    //       </button>
    //     </form>
    //   </div>
    // </div>

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleRegister}>
          {/* Logo */}
          <div className="font-bold text-2xl text-center text-indigo-600 mb-6">
            Pulse of <span className="text-blue-400">Thoughts</span>
          </div>

          <h1 className="text-2xl font-semibold text-gray-700 mb-6">
            Register
          </h1>

          {/* Form Entries */}

          {/* Selecting Role */}
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-600"
            >
              Select Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a role</option>
              <option value="user">User</option>
              {/* <option value="admin">Admin</option> */}
            </select>
          </div>

          {/* Entering Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Enter your name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Entering Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Enter your email address
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email address"
            />
          </div>

          {/* Entering Phone Number */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Enter your phone number
            </label>
            <input
              id="phone"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Entering Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Enter your password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Selecting Education */}
          <div className="mb-4">
            <label
              htmlFor="education"
              className="block text-sm font-medium text-gray-600"
            >
              Select your education
            </label>
            <select
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select your education</option>
              <option value="MCA">MCA</option>
              <option value="BCA">BCA</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="MBA">MBA</option>
              <option value="BBA">BBA</option>
            </select>
          </div>

          {/* Photo Preview and the Input Photo */}
          <div className="flex items-center mb-4">
            <div className="w-24 h-24 rounded-full border border-gray-200 mr-4 overflow-hidden">
              <img
                src={photoPreview ? photoPreview : "photo"}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="file"
              onChange={changePhotoHandler}
              className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Link to Login */}
          <p className="text-center mb-4 text-sm text-gray-600">
            Already Registered?{" "}
            <Link className="text-blue-600 font-medium" to="/login">
              Login Now
            </Link>
          </p>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 hover:bg-indigo-700 duration-300 rounded-md text-white font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
