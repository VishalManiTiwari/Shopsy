import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const MensWear = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  return (
    <div
      className="p-6 bg-gray-100 dark:bg-gray-900 
    min-h-screen"
    >
      <h2
        className="text-4xl text-center font-bold
       mb-12 bg-gradient-to-r from-orange-500 
       to-yellow-500 text-white dark:text-violet-300
        w-fit mx-auto p-3 rounded-sm px-10 capitalize shadow-lg"
      >
        Men's Clothing
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 
            dark:border-gray-700 p-6 rounded-lg shadow-xl
             bg-white dark:bg-gray-800 hover:shadow-2xl
              transition-shadow duration-300 ease-in-out
               transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-contain mb-4 
              rounded-md"
            />
            <h3
              className="text-lg font-semibold mb-3 
            text-gray-800 dark:text-gray-200 line-clamp-2"
            >
              {item.title}
            </h3>
            <div className=" justify-between items-center">
              <p className="flex items-center text-yellow-500">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
                {item.rating?.rate} ({item.rating?.count})
              </p>
              {item.rating?.rate} ({item.rating?.count})
            </div>
            <button
              onClick={() => addToCart(item)}
              className="bg-orange-400 dark:bg-orange-500
                 hover:bg-orange-500 dark:hover:bg-orange-500 
                 px-5 py-2 rounded-sm text-white md:text-sm
                  font-semibold shadow-md transition-all mx-auto
                  duration-200 ease-in-out flex items-center"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MensWear;
