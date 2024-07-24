import axios from "axios";
import React from "react";

const Card = ({ name, price, imageSrc }) => {
  return (
    <>
      <div
        style={{ marginLeft: "70px" }}
        className=" m-4 bg-white transition-transform transform hover:scale-105
     p-0.5 shadow-md duration-300    w-3/12 inline-grid"
      >
        <img src={imageSrc} className="      p-0" />
        <div className="">
          <h3 className="text-lg  from-neutral-950  font-bold font-skill pt-6">{name}</h3>
          <p className="text-gray-600 font-skill pb-6">{price}</p>
          <button onClick={async()=>{
            console.log(name, price, imageSrc);
            await axios.post("http://localhost:3000/cartItems", { name, price, imageSrc }).then(()=>{
              console.log("Data Delivered!");
            }).catch((e)=>{
              console.log("error",e);
            })
            
          }} className=" hover:bg-black hover:text-white hover:border-white duration-500 px-8 py-5 font-extrabold text-xl border-black w-full   border-b-8 border-r-8 text-black font-skill">Get Now</button>

        </div>
      </div>
    </>
  );
};

export default Card;
