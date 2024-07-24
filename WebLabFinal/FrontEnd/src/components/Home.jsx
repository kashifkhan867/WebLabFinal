import React from "react"; // Don't forget to import React
import FrontPics from "./FrontPics";
import ImageSlider from "./ImageSlider";
import Images from "./Images";
import TopPics from "./TopPics";
export default function Home() {
  return (
    <>
      {/* <Search /> */}
      <h2
      
        className="text-white font-skill font-bold   mb-9 text-center  text-6xl pt-32 px-64"
      >
        Fornite Experiences
      </h2>

      <FrontPics />

      <div>
        <ImageSlider images={Images} />
      </div>

      <TopPics />
    </>
  );
}
