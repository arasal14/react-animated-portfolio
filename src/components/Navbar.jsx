import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-8">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-10" src={logo} alt="logo"></img>
      </div>
      <div className="flex mx-auto justify-center gap-4">
        <h1 className="cursor-pointer">Home</h1>
        <h1 className="cursor-pointer">About</h1>
        <h1 className="cursor-pointer">Technologies</h1>
        <h1 className="cursor-pointer">Education</h1>
        <h1 className="cursor-pointer">Project</h1>
      </div>
      <div className="m-4 flex items-center justify-center gap-4 text-xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaFacebook />
      </div>
    </nav>
  );
};
