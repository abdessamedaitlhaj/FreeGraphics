import { useEffect, useRef, useState } from "react";
import image1 from "../assets/image1.webp";
import { Link, Navigate, redirect, useNavigate, useParams } from "react-router-dom";



const Results = ( { graphicList, enableAssests }) => {

    const [graphics, setGraphics] = useState([]);
    const [loading, setLoading] = useState(false);
    const param = useParams();
    
    
    useEffect(() => {
      if (graphicList.length > 0) {
        const category = graphicList.find(
          (item) => item.name.toLowerCase() === param.vectors
        );
        if (category) {
          setGraphics(category.graphics);
        } else {
        }
      }
    }, [graphicList, param.vectors]);
  
  return (
    <div className="container mx-auto">
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
            className={enableAssests[0] ? "bg-white absolute left-0 top-10 rounded-lg shadow-md space-y-4 p-4 text-left md:w-1/6" : "hidden"}
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
      <section className="p-4 flex flex-col md:grid grid-cols-3 gap-x-4">
        {graphics.map( (item) => {
          return (
            <div
            className="w-full h-full mt-10 hover:brightness-75 hover:transition-transform duration-300 relative" key={item.id}>
              <Link to={"/graphic/" + item.id}>
                <img
                  src={item.image}
                  alt="img1"
                  className="w-full h-full object-cover hover:brightness-75 hover:transition-transform duration-300 rounded-lg"
                />
              </Link>
              <div className="flex justify-between items-center mt-9 p-2">
                <p>{item.title}</p>
                <div>
                  <i className="ri-heart-3-line text-xl p-3 hover:bg-secondary hover:text-white hover:cursor-pointer rounded-full"></i>
                </div>
              </div>
            </div>
          )
        })}
        {/* <div className="mt-10 hover:brightness-75 hover:transition-transform duration-300 relative">
          <img
            src={image1}
            alt="img1"
            className="w-full object-cover rounded-lg"
          />
          <div className="flex justify-around items-center absolute bottom-4 w-full">
            <p className="">This is a title</p>
            <div>
              <i className="ri-heart-3-line text-xl p-3 hover:bg-tertiary hover:text-white hover:cursor-pointer rounded-full"></i>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Results;
