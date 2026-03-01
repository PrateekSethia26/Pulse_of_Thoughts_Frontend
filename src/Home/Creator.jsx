import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Creator() {
  const [admin, setAdmin] = useState([]); // As all admins are recieving in array form(Check Postman)
  useEffect(() => {
    const fetchAdmin = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/get-admin`,
        {
          withCredentials: true, // in index.js we have set the credentials true so here we are using that only
        },
      );
      console.log(data);
      setAdmin(data);
    };
    fetchAdmin();
  }, []);
  return (
    <div className="container mx-auto p-4 mb-4">
      <h1 className="font-semibold text-2xl mb-8">Popular Creators</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
        {admin && admin.length > 0 ? (
          admin.slice(0, 4).map((element) => {
            // Array data mapping
            return (
              <div key={element._id}>
                <div className="transform hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
                  <img
                    src={element.photo.url}
                    alt="admin"
                    className="md:w-56 md:h-56 object-cover rounded-full items-center border border-black"
                  />
                </div>
                <div className="text-center md:ml-[-130px] mt-2">
                  <p>{element.name}</p>
                  <p className="text-gray-600 text-xs">Author</p>
                </div>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Creator;
