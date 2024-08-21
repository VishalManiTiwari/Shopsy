import React from 'react'
import { FaStar } from 'react-icons/fa6'


const ProductsData = [
    {
      id: 1,
      img:'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/1/a/x/m-men-regular-slim-fit-solid-button-down-collar-formal-shirt-original-imagf4nfgwghhzph.jpeg?q=70',
      title: "Casual Wear",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, cum. Similique obcaecati repudiandae nam quia sunt facilis eos, inventore laboriosam, sint corporis necessitatibus saepe amet?"
    },
    {
        id: 2,
        img:'https://imgs.search.brave.com/81beM3UXG6ehKSkV4AxojgYwU3579cPS9jyA9mTaJFo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ncS5jb20vcGhv/dG9zLzY2N2IwZjY1/M2VhNjNkNjEwMjJl/Y2YxNC8zOjQvd183/NDgsY19saW1pdC90/YXlsb3JzdGl0Y2gx/LmpwZw',
        title: "Printed Shirt",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, cum. Similique obcaecati repudiandae nam quia sunt facilis eos, inventore laboriosam, sint corporis necessitatibus saepe amet?"
    },
    {
        id: 3,
        img:'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/e/z/3/xxl-4868-70-funday-fashion-original-imagqrj5xjuzhhqd.jpeg?q=70',
        title: "Women shirt",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, cum. Similique obcaecati repudiandae nam quia sunt facilis eos, inventore laboriosam, sint corporis necessitatibus saepe amet?"
    },
]

const TopProducts = () => {
  return (
    <div>
      <div className='container'>
       {/* Header Section */}
       <div className='text-left mb-24 '> 
            <p data-aos="fade-up" 
            className='text-sm text-primary'>
              Top Rated Products for you
            </p>
            <h1 data-aos="fade-up" 
            className='text-3xl font-bold'>
             Best Products
            </h1>
            <p data-aos="fade-up" className='text-xs
             text-gray-400'>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. At tempora voluptate 
            iptium
            </p>
        </div>
       {/* Body Section */}

       <div className="grid grid-cols-1 sm:grid-cols-2 
       md:grid-cols-3 gap-20 md:gap-5
        place-items-center">
        {
            ProductsData.map((data) => (
                <div 
                 data-aos="zoom-in"
                className="rounded-2xl bg-white
                 dark:bg-gray-800 hover:bg-black/80
                  dark:hover:bg-primary
                   hover:text-white relative
                    shadow-xl duration-300 
                    group max-w-[300px]"
                 >
                  {/* image section */}
                  <div className='h-[100px] '>
                    <img src={data.img} alt=""
                    className="max-w-[140px]
                     block mx-auto transform -translate-y-20 
                     group-hover:scale-105 duration-300 
                     drop-shadow-md"
                    />
                  </div>
                  {/* Detail section */}
                    <div className='p-4 text-center'>
                     {/* star rating */}
                <div className="w-full flex items-center 
                justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                  <h1 className='text-xl font-bold'>
                  {data.title}
                 </h1>
                 <p className='text-gray-500 
                  group-hover:text-white duration-300
                  text-sm line-clamp-2 '>
                    {data.description}
                 </p>
                 <button
                  className="bg-primary hover:scale-105 
                  duration-300 text-white py-1 px-4
                   rounded-full mt-4 group-hover:bg-white
                    group-hover:text-primary"
                //   onClick={handleOrderPopup}
                >
                  Order Now
                </button>
                </div>
                </div>
            ))
        }
       </div>
      </div>
    </div>
  )
}

export default TopProducts


