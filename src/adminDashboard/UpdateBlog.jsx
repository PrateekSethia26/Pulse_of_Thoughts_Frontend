import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function UpdateBlog() {
  const { id } = useParams();

  const navigate = useNavigate();

  // creating a state to store the user input
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogImagePreview, setBlogImagePreview] = useState("");

  // For reading the photo and setting the state in
  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBlogImagePreview(reader.result);
      setBlogImage(file);
    };
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Post request to the server to register the user
        const { data } = await axios.get(
          `${process.env.BACKEND_URL}/api/blog/single-Blog/${id}`,
          { withCredentials: true },
          {
            // Defining the headers that the data is the form data
            headers: {
              "Content-Type": "multipart/form-data", // sending form data in Postman also through our api as our multipart is form data
            },
          },
        );
        console.log(data); // either directly give response or destructure it as response.data as data is present in response

        // after data recieved then empty the field
        setCategory(data?.category);
        setTitle(data?.title);
        setAbout(data?.about);
        setBlogImage(data?.blogImage.url);
      } catch (error) {
        console.log(error);
        toast.error(error.message || "Please fill required fields");
      }
    };
    fetchBlog();
  }, [id]);

  const handleUpdateBlog = async (e) => {
    e.preventDefault(); // To prevent browser from getting bydefault refresh
    const formData = new FormData();
    formData.append("category", category);
    formData.append("title", title);
    formData.append("about", about);
    // formData.append("blogImage", blogImage);

    if (blogImage instanceof File) {
      formData.append("blogImage", blogImage); // Append only if a new file is selected
    }

    try {
      // Post request to the server to register the user
      const { data } = await axios.put(
        `${process.env.VITE_BACKEND_URL}/api/blog/updateBlog/${id}`,
        formData,
        { withCredentials: true },
        {
          // Defining the headers that the data is the form data
          headers: {
            "Content-Type": "multipart/form-data", // sending form data in Postman also through our api as our multipart is form data
          },
        },
      );
      console.log(data); // either directly give response or destructure it as response.data as data is present in response
      toast.success(data.message || "Blog updated successfully");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || "Please fill required fields");
    }
  };

  return (
    <div>
      <div className="min-h-screen py-10">
        <div className="max-w-4xl mx-auto border p-6 rounded shadow-lg">
          <h1 className="text-3xl font-semibold mb-6">Update Blog</h1>
          <form className="space-y-6">
            {/* Form Entries */}

            {/* Selecting Category */}
            <div className="space-y-4">
              <label className="block text-lg">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-2 py-3 border border-gray-400 rounded-md outline-none"
              >
                <option value="" defaultChecked>
                  Select a category
                </option>
                <option value="Devotion">Devotion</option>
                <option value="Sports">Sports</option>
                <option value="Coding">Coding</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Business">Business</option>
              </select>
            </div>

            {/* Entering title */}
            <div className="space-y-3">
              <label className="block text-lg">Title</label>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-2 py-3 border border-gray-400 rounded-md outline-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-lg">Blog Image</label>
              {/* Photo Preview and the Blog photo */}
              <div className="flex items-center mb-4 ">
                {/* Photo Preview Section */}
                <div className="photo w-full max-w-sm h-auto rounded-md object-cover">
                  <img
                    src={
                      blogImagePreview
                        ? blogImagePreview
                        : blogImage
                          ? blogImage
                          : "/imgPL.webp"
                    }
                    alt="Blog Main"
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                </div>

                {/* Giving input photo */}
                <input
                  type="file"
                  onChange={changePhotoHandler}
                  className="w-full p-2 mb-4 border rounded-md"
                />
              </div>
            </div>

            {/* Givng description of Blog */}
            <div className="space-y-2">
              <label className="block text-lg">Description</label>
              <textarea
                rows={5}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="w-full px-2 py-4 border border-gray-400 rounded-md outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 hover:bg-blue-800 duration-300 rounded-md text-white"
              onClick={handleUpdateBlog}
            >
              Update Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateBlog;
