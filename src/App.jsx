import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Creators from "./pages/Creators";
import { useAuth } from "./context/AuthProvider.jsx";
import UpdateBlog from "./adminDashboard/UpdateBlog.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";

function App() {
  const location = useLocation();
  const hideNavbarandFooter = ["/dashboard", "/login", "/register"].includes(
    location.pathname
  );

  const { blogs } = useAuth();
  console.log(blogs);
  return (
    <div>
      {!hideNavbarandFooter && <Navbar />}
      {/* Defining Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog/update/:id" element={<UpdateBlog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Toaster />
      {!hideNavbarandFooter && <Footer />}
    </div>
  );
}

export default App;
