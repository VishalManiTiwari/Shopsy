import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleBuyNow = (item) => {
    alert(`Proceeding to buy: ${item.title}`);
  };

  const toggleDescription = (productId) => {
    setSelectedProductId(selectedProductId === productId ? null : productId);
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl text-center font-bold mb-8 text-violet-700 dark:text-violet-300 capitalize">
        Your Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-700 dark:text-gray-300">
          Your cart is empty
        </p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border-b pb-4 border-gray-300 dark:border-gray-700 cursor-pointer"
              onClick={() => toggleDescription(item.id)}
            >
              <div className="flex flex-col sm:flex-row items-center sm:justify-between">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 sm:w-16 sm:h-16 object-cover rounded-md"
                />
                <div className="flex-1 ml-0 sm:ml-4 mt-4 sm:mt-0">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">${item.price}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
                  <button
                    onClick={() => handleBuyNow(item)}
                    className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-all duration-200 ease-in-out"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-200 ease-in-out"
                  >
                    X
                  </button>
                </div>
              </div>
              {selectedProductId === item.id && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-md">
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}
          <button
            onClick={clearCart}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full w-[12rem] mt-6 font-semibold transition-all duration-200 ease-in-out mx-auto block"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
