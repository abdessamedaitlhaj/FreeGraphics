import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const Product_Page = ({ graphicList, loading }) => {
  
  const [graphic, setGraphic] = useState();
  const param = useParams();

  
  
  useEffect(() => {
    if (graphicList.length > 0) {
      const allGraphics = graphicList.flatMap(category => category.graphics);
      const new_graphic = allGraphics.find(graphic => graphic.id === ((param.id ? +param.id : undefined)))
      
      // const new_graphic = new_graphics.find(item => item.id === +param.id);

      if (new_graphic) {
        setGraphic(new_graphic);       
      } else {
        // Handle the case where the category is not found
      }
    }
  }, [graphicList, param.vectors]);




  return (
    <div className="container mx-auto">
      <section className="flex flex-col md:flex-row mt-20 bg-primary w-full items-center p-6 space-x-6">
        <div className="w-1/2 flex flex-col items-center">
          <img
            src={graphic?.image}
            alt="img1"
            className="object-cover rounded-lg"
          />
          <div className="flex flex-col space-y-4 md:flex-row w-full items-center p-2 justify-between">
            <p className="text-center">{graphic?.title}</p>
            <div>
              <i className="ri-heart-3-line text-2xl p-3 hover:bg-tertiary hover:text-white hover:cursor-pointer rounded-full"></i>
            </div>
          </div>
        </div>
        <div className="space-y-8 w-1/2">
          <button className="p-2 w-full bg-tertiary rounded-lg text-white">
            <i className="ri-download-2-line text-lg md:text-xl"></i>
            Download
          </button>
          <div className="flex flex-col space-y-4">
            <div>
              <i className="ri-check-line text-lg md:text-xl"></i>
              <strong className="text-sm md:text-lg">Free license</strong>
            </div>
            <div>
              <i className="ri-file-list-fill text-lg md:text-xl"></i>
              <strong className="text-sm md:text-lg">File type: </strong>
              <span className="text-sm md:text-lg border-2 border-black rounded-lg p-1">
                PNG
              </span>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
};

export default Product_Page;
