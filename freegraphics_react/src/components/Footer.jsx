import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="container mx-auto ">
      <footer className="bg-primary p-8 flex flex-col space-y-12 md:flex-row justify-between items-center mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <span className="hover:text-secondary">
            <Link to="/">Home</Link>
          </span>
          <span className="hover:text-secondary">
          <Link to="/contact">Contact Us</Link>
          </span>
          <span className="hover:text-secondary">
          <Link to="/about">About Us</Link>
          </span>
        </div>
        <hr className="border-1 border-secondary w-full md:hidden" />
        <div className="flex flex-col space-y-4 items-center">
          <img src={logo} alt="logo" width="200" />
          <p>&copy; 2024 FreeGraphics. All rights reserved.</p>
        </div>
        <div className="flex space-x-8">
          <a href="#">
            <i className="ri-facebook-box-fill text-3xl text-secondary"></i>
          </a>
          <a href="#">
            <i className="ri-instagram-fill text-3xl text-secondary"></i>
          </a>
          <a href="#">
            <i className="ri-twitter-fill text-3xl text-secondary"></i>
          </a>
          <a href="#">
            <i className="ri-youtube-fill text-3xl text-secondary"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
