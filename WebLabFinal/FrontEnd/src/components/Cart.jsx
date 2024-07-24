import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    async function fetchCartData() {
      try {
        const response = await axios.get("http://localhost:3000/cartItems");
        setCartData(response.data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    }

    fetchCartData();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-extrabold mb-8 text-slate-300">My Shopping Cart</h2>

      {cartData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cartData.map((item) => (
            <div
              key={item._id}
              className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 overflow-hidden"
            >
              <div className="relative mb-6 rounded-md overflow-hidden aspect-w-3 aspect-h-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold mb-2 text-gray-800">{item.name}</p>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-500">Your cart is empty.</p>
      )}

      <button
        className="hover:bg-white mt-10 hover:text-black hover:border-black duration-500 px-8 py-5 font-extrabold text-xl border-white w-full border-b-8 border-r-8 text-white font-skill"
        onClick={() => {
          alert("Items Proceeded Successfully");
        }}
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
