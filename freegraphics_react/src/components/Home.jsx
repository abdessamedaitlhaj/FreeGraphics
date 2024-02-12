import image1 from "../assets/image1.webp";
import image2 from "../assets/image1.webp";
import image3 from "../assets/image1.webp";
import image4 from "../assets/image1.webp";
import image5 from "../assets/image1.webp";
import image6 from "../assets/image1.webp";
import thousands from "../assets/svg_thousands.svg";
import quality from "../assets/svg_quality.svg";
import search from "../assets/svg_search.svg";
import { Dispatch, SetStateAction, useState } from "react";


const Home = ({ mobileMenu, enableAssests}) => {
  return (
    <>
      {/* mobile menu */}
      <section
        className={
          mobileMenu[0]
            ? "flex bg-white flex-col rounded-lg shadow-md space-y-6 p-8 items-center absolute z-10 w-full"
            : "hidden"
        }
      >
        <div>
          <a href="#">
            <span className="text-lg hover:border-b-2 hover:border-secondary">
              Vectors
            </span>
          </a>
        </div>
        <div>
          <a href="#">
            <span className="text-lg hover:border-b-2 hover:border-secondary">
              Icons
            </span>
          </a>
        </div>
        <div>
          <a href="#">
            <span className="text-lg hover:border-b-2 hover:border-secondary">
              Photos
            </span>
          </a>
        </div>
        <div className="flex space-x-4 md:space-x-8">
          <a
            href="sign_up.html"
            className="text-md p-1 bg-tertiary md:px-3 md:py-2 rounded-lg text-white"
          >
            Sign up
          </a>

          <a
            href="login.html"
            className="text-md p-1 border-2 border-tertiary md:px-3 md:py-2 rounded-lg"
          >
            Log in
          </a>
        </div>
      </section>
      {/* end mobile menu */}
      <section className="bg-primary p-4 h-[50vh] flex flex-col items-center justify-center space-y-10 text-center">
        <p className="font-light text-lg md:text-4xl">
          Download Free Vectors, Photos, Icons, Unveal Your Creativity Today!
        </p>

        <div className="flex items-center relative max-w-screen-md w-full bg-white rounded-lg justify-around hover:cursor-pointer">
          <div
            onClick={() => enableAssests[1](!enableAssests[0])}
            className="flex items-center"
          >
            <p className="text-sm md:text-md ml-4">Assests</p>
            <i className="ri-arrow-drop-down-line text-3xl relative"></i>
          </div>
          <input
            type="text"
            name="search_field"
            className="p-4 w-3/4 outline-none"
            placeholder="Search all assets..."
          />
          <i className="ri-search-line mr-4 bg-tertiary px-4 py-2 rounded-2xl text-xl text-white"></i>
          {/* list of assests */}
          <div
            className={
              enableAssests[0] ? "bg-white absolute left-0 top-10 rounded-lg shadow-md space-y-4 p-4 text-left md:w-1/6"
                : "hidden"
            }
          >
            <div>
              <i className="ri-shape-2-fill mr-2 text-xs md:text-sm text-left"></i>
              <a href="#">
                <span className="text-xs md:text-sm">Vectors</span>
              </a>
            </div>
            <div>
              <i className="ri-remixicon-line mr-2 text-xs md:text-sm"></i>
              <a href="#">
                <span className="text-xs md:text-sm">Icons</span>
              </a>
            </div>
            <div>
              <i className="ri-image-fill mr-2 text-xs md:text-sm"></i>
              <a href="#">
                <span className="text-xs md:text-sm">Photos</span>
              </a>
            </div>
          </div>
          {/* end list of assests */}
        </div>
      </section>

      <section className="flex flex-col space-y-8 p-4 rounded-2xl text-center">
        <p className="font-light text-lg md:text-4xl">
          Download Free Vectors, Photos, Icons, Unveal Your Creativity Today!
        </p>
        <div className="flex flex-col space-y-8 md:grid grid-rows-2 grid-cols-3 place-items-start text-center">
          <img src={image1} className="object-cover rounded-lg w-3/4" alt="" />
          <img src={image2} className="object-cover rounded-lg w-3/4" alt="" />
          <img src={image3} className="object-cover rounded-lg w-3/4" alt="" />
          <img src={image4} className="object-cover rounded-lg w-3/4" alt="" />
          <img src={image5} className="object-cover rounded-lg w-3/4" alt="" />
          <img src={image6} className="object-cover rounded-lg w-3/4" alt="" />
        </div>
      </section>
      <section className="bg-primary p-4 flex flex-col items-center justify-center space-y-4 mt-20 rounded-2xl">
        <p className="font-light text-4xl">
          Let’s make your ideas break through
        </p>
        <span>
          Find the most up-to-date vocabulary of vectors, icons, photos, fun fun
          fun!
        </span>
        <div className="flex flex-col space-y-12 md:flex-row items-end p-10">
          <div className="flex flex-col space-y-4 items-center">
            <img src={quality} alt="quality" className="w-1/2 md:w-3/4" />
            <div className="my-20">
              <strong>Best quality or nothing</strong>
              <p>
                Download scroll-stopping images of the highest quality to make
                professional designs.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 items-center">
            <img src={thousands} alt="quality" className="w-1/2 md:w-3/4" />
            <div className="p-4">
              <strong>Ready-to-use everything</strong>
              <p>
                From thousands of ready-to-publish images to our online editor,
                we work to get your project ready double-quick.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 items-center">
            <img src={search} alt="quality" className="w-1/2 md:w-3/4" />
            <div className="my-20">
              <strong>Fresh content every day</strong>
              <p>
                Our library is updated on a daily basis so you can find the
                newest and trendiest photos and designs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
