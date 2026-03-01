import axios from "axios";
import React, { useEffect, useState } from "react";

function Creators() {
  const [creators, setCreators] = useState([]);
  console.log(creators);
  useEffect(() => {
    const fetchCreators = async () => {
      // Getting the data
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/get-admin`,
        {
          withCredentials: true, // in index.js we have set the credentials true so here we are using that only
        },
      );
      setCreators(data);
    };
    fetchCreators();
  }, []);
  return (
    // <div className="flex flex-wrap justify-between items-center my-20 bg-gray-100">
    //   {creators.map((creator) => (
    //     <div
    //       key={creator._id}
    //       className="bg-white shadow-lg rounded-lg max-w-xs w-full overflow-hidden m-2"
    //     >
    //       <div className="relative">
    //         <img
    //           src={creator.photo.url}
    //           alt=""
    //           className="w-full h-32 object-cover"
    //         />
    //         <div className="absolute inset-0 bottom-0 transform translate-y-1/2">
    //           <img
    //             src={creator.photo.url}
    //             alt=""
    //             className="w-16 h-16 rounded-full mx-auto border-3 border-blue-200"
    //           />
    //         </div>
    //       </div>

    //       <div className="px-4 py-6 mt-4">
    //         <h1 className="text-center text-xl font-semibold text-gray-800">
    //           {creator.name}
    //         </h1>
    //         <p className="text-center text-gray-500 mt-2">{creator.email}</p>
    //         <p className="text-center text-gray-500 mt-2">{creator.phone}</p>
    //         <p className="text-center text-gray-500 mt-2">Author</p>
    //       </div>
    //     </div>
    //   ))}
    //   ;
    // </div>

    <div className="flex flex-wrap justify-center gap-6 my-20 bg-gray-50 p-6">
      {creators.map((creator) => (
        <div
          key={creator._id}
          className="bg-white shadow-lg rounded-xl max-w-xs w-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative">
            <img
              src={creator.photo.url}
              alt=""
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="absolute inset-x-0 -bottom-8 flex justify-center">
              <img
                src={creator.photo.url}
                alt=""
                className="w-20 h-20 rounded-full border-4 border-white shadow-md"
              />
            </div>
          </div>
          <div className="px-6 py-10 mt-4 text-center">
            <h1 className="text-xl font-bold text-gray-800">{creator.name}</h1>
            <p className="text-gray-500 mt-2 text-sm">{creator.email}</p>
            <p className="text-gray-500 mt-2 text-sm">{creator.phone}</p>
            <p className="text-gray-700 mt-3 font-medium">Author</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Creators;
