import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
export const social = [
  {
    name: "GitHub",
    icon: (
      <FaGithub className="group-hover:text-black group-hover:bg-white rounded-full transition-all" />
    ),
    url: "https://github.com/DeepanshuPratik",
  },
  // {
  //   name: "Facebook",
  //   icon: (
  //     <FaFacebook className="group-hover:text-blue-700 group-hover:bg-white rounded-full transition-all" />
  //   ),
  //   url: "",
  // },
  {
    name: "Instagram",
    icon: (
      <FaInstagram className="group-hover:text-pink-800 group-hover:bg-white rounded-full transition-all" />
    ),
    url: "https://www.instagram.com/deepanshu_pratik/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="group-hover:text-blue-500 transition-all" />,
    url: "https://www.linkedin.com/in/deepanshupratik/",
  },
];

export default social;
