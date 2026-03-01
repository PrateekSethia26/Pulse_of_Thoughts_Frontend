import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* The carrers and other componenets in footer section will not be visible in mobile view */}
      <footer className="border py-10 hidden md:block">
        <div className="container mx-auto flex justify-between">
          <div>
            <h2 className="font-semibold text-xl mb-3">Products</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-black">
                  Flutter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-black">
                  iOS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-black">
                  Android
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-black">
                  React
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-3">Design to Code</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-black">
                  Figma plugin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-black">
                  Templates
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-3">Comparison</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-black">
                  DhiWise vs Anima
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-black">
                  DhiWise vs Appsmith
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-black">
                  DhiWise vs FlutterFlow
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-black">
                  DhiWise vs Bubble
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-black">
                  DhiWise vs Figma Dev Mode
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-black">
                  Figma vs RedTool
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-3">Company</h2>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-black">
                <a href="#">About Us</a>
              </li>
              <li className="text-gray-400 hover:text-black">
                <a href="#">Contact</a>
              </li>
              <li className="text-gray-400 hover:text-black">
                <a href="#">Carrers</a>
              </li>
              <li className="text-gray-400 hover:text-black">
                <a href="#">Terms of Service</a>
              </li>
              <li className="text-gray-400 hover:text-black">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Logo  */}
      <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:justify-between md:text-left mt-2">
        <div className="font-bold text-lg">
          Pulse of <span className="text-blue-400">Thoughts</span>
        </div>
        <div className="md:mt-0">
          <p>&copy; 2025 Sethia PVT. LTD. All rights reserved</p>
        </div>
        <div className="mt-4 flex md:mt-0 space-x-4">
          <a href="#">
            <FaGithub className="h-6" />
          </a>
          <a href="#">
            <BsYoutube className="h-6" />
          </a>

          <a href="#">
            <FaLinkedin className="h-6" />
          </a>
        </div>
      </div>
    </>
  );
}
