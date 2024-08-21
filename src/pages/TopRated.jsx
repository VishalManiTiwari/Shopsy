import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Loading from './Loading';

const TopRated = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch products', err);
        setLoading(false);
      });
  }, []);

  const { addToCart } = useContext(CartContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-6 bg-gray-100  dark:bg-gray-900
     min-h-[20rem]">
      {categories.map((category) => (
        <div key={category} className="mb-16">
          <h2 className="text-4xl text-center font-bold 
          mb-12
           bg-gradient-to-r from-orange-400 to-pink-500
            text-white dark:text-violet-300 w-fit
             mx-auto
             p-3 rounded-sm px-10 capitalize shadow-lg">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2
           md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-300 
                  dark:border-gray-700 p-6 rounded-lg 
                  shadow-xl bg-white dark:bg-gray-800
                   hover:shadow-2xl transition-shadow 
                   duration-300 ease-in-out transform 
                   hover:scale-105"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain 
                    mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-3
                   text-gray-800 dark:text-gray-200 
                   line-clamp-2">
                    {product.title}
                  </h3>
                  <div className="flex justify-between 
                  items-center">
                    <div>
                      <p className="text-lg text-gray-700
                       dark:text-gray-300 font-medium">
                        ${product.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500
                       dark:text-gray-400 capitalize">
                        {product.category}
                      </p>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-orange-400 dark:bg-orange-500
                       hover:bg-orange-500 dark:hover:bg-orange-500
                        px-5 py-2 rounded-sm text-white md:text-sm 
                        font-semibold shadow-md transition-all
                         duration-200 ease-in-out flex items-center"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopRated;
