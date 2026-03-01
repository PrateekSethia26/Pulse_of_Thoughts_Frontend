import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import Sidebar from "../adminDashboard/Sidebar";
import MyProfile from "../adminDashboard/MyProfile";
import CreateBlog from "../adminDashboard/CreateBlog";
import UpdateBlog from "../adminDashboard/UpdateBlog";
import MyBlogs from "../adminDashboard/MyBlogs";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const [component, setComponent] = useState("My Blogs");
  const { profile, isAuthenticated } = useAuth();
  console.log(profile);
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <Sidebar component={component} setComponent={setComponent} />
      {component === "My Profile" ? (
        <MyProfile />
      ) : component === "Create Blog" ? (
        <CreateBlog />
      ) : component === "Update Blog" ? (
        <UpdateBlog />
      ) : (
        <MyBlogs />
      )}
    </div>
  );
}

export default Dashboard;
