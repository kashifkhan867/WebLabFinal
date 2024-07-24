// Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer className=" h-64 flex font-skill bg-[#101014] mt-10  text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-4xl font-bold  mb-2">Contact Us</h3>
          <p className="text-md">Phone: +92 (349) 0203-047</p>
          <p className="text-md">Email: info@abbottgamingstore.com</p>
        </div>
        <div>
          <p className="text-md">
            &copy; 2023 Abbott Gaming Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
