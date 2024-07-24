import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Import the styles

const ImageSlider = ({ images }) => {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    height: "600px",
    backgroundSize: "cover",
    widhth: "100px",
    
  };
  const slideProperties = {
    duration: 3000,
    transitionDuration: 1500,
    infinite: true,
    indicators: true,
    arrows: false, // Set to false to disable arrows
  };

  return (
    <div className="flex w-full justify-center">
      <div className="w-3/4 p-5 rounded-sm duration-300 transitionDuration: 500  ">
        <Slide {...slideProperties}>
          {images.map((image, index) => (
            <div key={index}>
              <div
                style={{ ...divStyle, backgroundImage: `url(${image.url})` } }
               className=" px-64 rounded-xl"></div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default ImageSlider;
