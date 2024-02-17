import logo from "../assets/logo.png";
import image1 from "../assets/image1.webp";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = ({ mobileMenu }) => {
  const [userPannel, setUserPannel] = useState(false);

  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState(false);

 

  return (
    <nav className="bg-primary p-4 flex justify-between items-center relative">
      <div className="flex md:hidden">
        <i
          onClick={() => {
            mobileMenu[1](!mobileMenu[0]);
          }}
          className="ri-menu-line text-3xl text-secondary md:hidden"
        ></i>
        <Link to="/">
          <img src={logo} alt="logo" width="200" />
        </Link>
      </div>
      <Link to="/">
        <img src={logo} alt="logo" width="200" className="hidden md:inline" />
      </Link>
      <div className="hidden md:flex space-x-8">
        <Link to="/vectors" className="hover:text-secondary">
          Vectors
        </Link>
        <Link to="/icons" className="hover:text-secondary">
          Icons
        </Link>
        <Link to="/photos" className="hover:text-secondary">
          Photos
        </Link>
      </div>
      {/* visitor home */}
      { !isLogged ? 
                  <div className="flex space-x-4 md:space-x-8">
                  <Link to={"/signup"}
                        className="text-xs p-2 bg-tertiary md:px-3 md:py-2 rounded-lg text-white"
                      >
                        Sign up
                      </Link>

                      <Link to={"/login"}
                        className="text-xs p-2 border-2 border-tertiary md:px-3 md:py-2 rounded-lg"
                      >
                        Log in
                      </Link>
                    </div> : null
      }
      {/* end visitor home */}

      {/* logged user home */}

      { isLogged ?
          <div>
            <div
              onClick={() => setUserPannel(!userPannel)}
              className="flex cursor-pointer"
            >
              <i className="ri-user-3-line text-lg"></i>
              <i className="ri-arrow-down-s-line text-lg"></i>
            </div>

          {/* end logged user home */}

          {/* logged user pannel */}

          <section
            className={
              userPannel
                ? "flex bg-white flex-col rounded-lg shadow-md space-y-8 p-8 md:w-1/4 absolute right-0 top-14 z-10"
                : "hidden"
            }
          >
            <div className="flex space-x-6">
              <img src={image1} alt="search" className="rounded-full w-10" />
              <div className="flex flex-col space-y-4">
                <span className=" text-sm md:text-md">{email}</span>
                <a
                  href="#"
                  className="bg-secondary p-2 text-white rounded-lg text-sm md:text-md"
                >
                  Edit profile
                </a>
              </div>
            </div>
            <hr className="border-1 border-secondary" />
            <div>
              <a href="my_favorites.html">
                <i className="ri-heart-fill mr-2 text-sm md:text-md"></i>
                <span className=" text-sm md:text-md">My Favorites</span>
              </a>
            </div>
            <div>
              <a href="my_downloads.html">
                <i className="ri-download-2-line mr-2 text-sm md:text-md"></i>
                <span className=" text-sm md:text-md">My Downloads</span>
              </a>
            </div>
            <hr className="border-1 border-secondary" />
            <div>
              <a href="#">
                <i className="ri-logout-circle-line mr-2 text-sm md:text-md"></i>
                <span className=" text-sm md:text-md">Log out</span>
              </a>
            </div>
          </section>
          {/* end logged user pannel */}
          </div> : null
      }
    </nav>
  );
};

export default Navbar;
