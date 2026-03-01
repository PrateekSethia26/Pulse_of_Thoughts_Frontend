import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Post request to the server to register the user
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/blog/single-Blog/${id}`,
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
        setBlogs(data);
      } catch (error) {
        console.log(error);
        toast.error(error.message || "Please fill required fields");
      }
    };
    fetchBlog();
  }, [id]);

  return (
    // <div>
    //   <div>
    //     {blogs && (
    //       <section className="conatiner mx-auto p-6">
    //         <div className="text-blue-400 uppercase text-lg font-bold mb-4">
    //           {blogs?.category}
    //         </div>
    //         <h1 className="font-bold text-4xl my-6">{blogs?.title}</h1>

    //         {/* Author photo and name display */}
    //         {/* <div className="flex items-center mb-6">
    //           <img src={blogs?.adminPhoto} alt="admin Photo" className="w-12 h-12 rounded-full mr-4"/>
    //           <p className="text-lg font-semibold">{blogs?.adminName}</p>
    //         </div> */}

    //         <div className="flex flex-col md:flex-row">
    //           {blogs?.blogImage && (
    //             <img
    //               src={blogs?.blogImage?.url}
    //               alt="blog image"
    //               className="w-full md:w-1/2 h-[500px] rounded-lg shadow-lg cursor-pointer border mb-6"
    //             />
    //           )}
    //           <div className="md:w-1/2 w-full md:pl-6">
    //             <p className="text-lg ml-6">{blogs?.about}</p>
    //           </div>
    //         </div>
    //       </section>
    //     )}
    //   </div>
    // </div>

    <div className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      {blogs && (
        <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="text-blue-500 uppercase text-sm font-bold mb-2">
            {blogs?.category}
          </div>
          <h1 className="font-bold text-3xl md:text-4xl text-gray-800 my-4">
            {blogs?.title}
          </h1>

          {/* <div className="flex items-center gap-4 mb-6">
            <img
              src={blogs?.adminPhoto}
              alt="Admin"
              className="w-12 h-12 rounded-full border-2 border-gray-200 shadow-sm"
            />
            <p className="text-lg font-semibold text-gray-700">
              {blogs?.adminName}
            </p>
          </div> */}

          <div className="flex flex-col md:flex-row gap-6">
            {blogs?.blogImage && (
              <img
                src={blogs?.blogImage?.url}
                alt="Blog"
                className="w-full md:w-1/2 h-[400px] rounded-lg shadow-md object-cover border"
              />
            )}
            <div className="md:w-1/2 w-full">
              <p className="text-gray-600 text-lg leading-relaxed">
                {blogs?.about}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogDetail;
