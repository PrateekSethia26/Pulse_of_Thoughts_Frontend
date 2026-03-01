import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blogs, setBlogs] = useState();
  const [profile, setProfile] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(localStorage.getItem("role") || ""); // Retrieve stored role

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        let token = localStorage.getItem("jwt");
        console.log(token);
        if (token) {
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/users/my-profile`,
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Secure API call
              },
            },
          );
          console.log(response);
          setProfile(response.data); // taking the profile data and setting the response(profile) in the profile state
          setIsAuthenticated(true);

          if (response.data.role) {
            setRole(response.data.role); // Set role in state
            localStorage.setItem("role", response.data.role); // Store role
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/blog/all-Blogs`,
        );
        console.log(response);
        setBlogs(response.data); // taking the blogs and setting the response(blog) in the blogs state
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        blogs,
        profile,
        isAuthenticated,
        setProfile,
        setIsAuthenticated,
        role,
        setRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // using the context that we have prerpared
