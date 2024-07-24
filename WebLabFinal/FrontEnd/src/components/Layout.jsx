import { Link } from "react-router-dom";
"react-router-dom";
export default function Layout() {
  return (
    <nav
      style={{ backgroundColor: "#101014"}}
      className="   hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:shadow-outline  flex justify-center items-center h-20 overflow-hidden space-x-5    text-2xl "
    >
      <Link
        
        className="  hover:text-3xl duration-200 font-skill text-white text-2xl"
        to="/"
      >
        HOME
      </Link>
      <Link
        
        className="  hover:text-3xl duration-200 font-skill text-white"
        to="/services "
      >
        SERVICES
      </Link>
      <Link
        
        className="  hover:text-3xl duration-200 font-skill text-white"
        to="/form"
      >
        FORM
      </Link>
      <Link
        
        className="  hover:text-3xl duration-200 font-skill text-white"
        to="/about"
      >
        ABOUT
      </Link>
      <Link
        
        className="  hover:text-3xl duration-200 font-skill text-white"
        to="/gallery"
      >
        Gallery
      </Link>
      <Link
        
        className="  hover:text-3xl duration-200 font-skill text-white"
        to="/cart"
      >
        Cart
      </Link>
    
    </nav>
  );
}
