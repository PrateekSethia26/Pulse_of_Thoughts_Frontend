import React, { useState } from "react";
import { IoMdMailOpen } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    reset, // Import reset function
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userData = {
      access_key: "193bf89b-ed17-4fda-a6f3-61e02eab4972",
      name: data.username,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://api.web3forms.com/submit", userData);
      toast.success("Form submitted successfully");

      reset();
    } catch (error) {
      toast.error("Error occurred");
    }
  };

  return (
    // <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
    //     <div className="text-center">
    //       <h2 className="text-3xl font-semibold">Contact Us</h2>
    //     </div>
    //     <div className="flex flex-col md:flex-row justify-between">
    //       <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
    //         <h3 className="text-lg font-medium text-gray-700 mb-5 pl-1">
    //           Send Message
    //         </h3>
    //         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    //           <div>
    //             <input
    //               type="text"
    //               name="username"
    //               placeholder="Your Name"
    //               className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
    //               {...register("username", { required: true })}
    //             />
    //             {errors.username && (
    //               <span className="text-sm text-red-600 font-semibold">
    //                 This field is required
    //               </span>
    //             )}
    //           </div>
    //           <div>
    //             <input
    //               type="text"
    //               name="email"
    //               placeholder="Your Email"
    //               className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
    //               {...register("email", {
    //                 required: true,
    //                 pattern: {
    //                   value:
    //                     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    //                   message: "Enter a valid email address",
    //                 },
    //               })}
    //             />
    //             {errors.email && (
    //               <span className="text-sm text-red-600 font-semibold">
    //                 Enter a valid email address
    //               </span>
    //             )}
    //           </div>
    //           <div>
    //             <textarea
    //               name="message"
    //               placeholder="Enter Message"
    //               className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
    //               {...register("message", { required: true })}
    //             />
    //             {errors.message && (
    //               <span className="text-sm text-red-600 font-semibold">
    //                 This field is required
    //               </span>
    //             )}
    //           </div>
    //           <div>
    //             <button
    //               type="submit"
    //               className="text-white bg-black rounded-lg px-4 py-2 w-full hover:bg-blue-500 duration-300"
    //             >
    //               Submit
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //       <div className="w-full md:w-1/2 md:pl-4">
    //         <h3 className="text-lg font-medium text-gray-700 mb-4">
    //           Get in Touch
    //         </h3>
    //         <ul className="space-y-4">
    //           <li className="flex items-center space-x-2">
    //             <IoMdMailOpen className="shrink-0" />
    //             <span>pulseofthoughts@gmail.com</span>
    //           </li>
    //           <li className="flex items-center space-x-2">
    //             <FaMapLocationDot />
    //             <span>Delhi,India</span>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl w-full bg-white p-10 rounded-xl shadow-xl border border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-blue-600">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            We'd love to hear from you! Send us a message.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold text-gray-800 mb-5">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="text-sm text-red-500 font-medium">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500 font-medium">
                    Enter a valid email address
                  </span>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Enter Message"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="text-sm text-red-500 font-medium">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-700">
                <IoMdMailOpen className="text-blue-500 text-xl" />
                <span>pulseofthoughts@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <FaMapLocationDot className="text-blue-500 text-xl" />
                <span>Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
