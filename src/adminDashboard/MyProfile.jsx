import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";

function MyProfile() {
  const { profile } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
        <div className="relative">
          <img
            src={profile?.photo?.url}
            alt="profile photo"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-x-0 bottom-5 transform translate-y-1/2">
            <img
              src={profile?.photo?.url}
              alt="avatar"
              className="w-24 h-24 rounded-full mx-auto border-4 border-gray-400"
            />
          </div>
        </div>
        <div className="px-6 py-8 mt-2 text-center">
          <h2 className="text-2xl font-semibold">{profile?.name}</h2>
          <p className="text-gray-800 mt-2">{profile?.email}</p>
          <p className="text-gray-800 mt-2">{profile?.phone}</p>
          <p className="text-gray-800 mt-2">{profile?.role}</p>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
