import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function MyBlogs() {
  const [blogs, setBlogs] = useState([]); // By default we set it as empty array
  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/blog/my-Blogs`,
          {
            withCredentials: true,
          },
        );
        console.log(data.myblogs);
        setBlogs(data.myblogs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyBlogs();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/blog/deleteBlog/${id}`, {
        withCredentials: true,
      })
      // handling promises
      .then((res) => {
        toast.success(res.data.message || "Blog deleted successfully");
        setBlogs((value) => value.filter((blog) => blog._id !== id)); // To understand
      })
      .catch((error) => {
        toast.error(error.response.message || "Failed to delete blog");
      });
  };

  return (
    <div className="container mx-auto my-12 p-6">
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:ml-40">
        {blogs && blogs.length > 0 ? (
          blogs.map((element) => {
            // Array data mapping
            return (
              <div
                className="w-full bg-white shadow-lg rounded-lg overflow-hidden"
                key={element._id}
              >
                {element?.blogImage && (
                  <img
                    src={element?.blogImage?.url}
                    alt="blogImage"
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-4">
                  <span className="text-sm text-gray-600">
                    {element?.category}
                  </span>
                  <h4 className="text-xl font-semibold my-2">
                    {element?.title}
                  </h4>
                  <div className="flex justify-between mt-4">
                    <Link
                      to={`/blog/update/${element._id}`}
                      className="text-red-600 bg-white rounded-lg shadow-lg px-3 py-1 border border-gray-500 hover:underline"
                    >
                      UPDATE
                    </Link>
                    <button
                      onClick={() => handleDelete(element._id)}
                      className="text-red-600 bg-white rounded-lg shadow-lg px-3 py-1 border border-gray-500 hover:underline"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">
            You have created No Blogs!!!
          </p>
        )}
      </div>
    </div>
  );
}

export default MyBlogs;
