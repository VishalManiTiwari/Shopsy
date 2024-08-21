import React, { useContext } from 'react';
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import { IoMdSearch } from "react-icons/io";
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const Menu = [
    {
       id: 1,
       name: "Home",
       link: "/"
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/toprated"
    },
    {
        id: 3,
        name: "Women Wear",
        link: "/womenswear"
    }, 
    {
        id: 3,
        name: "Mens Wear",
        link: "/menswear"
    },
    {
        id: 3,
        name: "Electronics",
        link: "/electronics"
     },
]

const DropdownLinks = [
    {
    id: 1,    
    name: 'Trending Products',
    link: '/#',
    },
    {
    id: 2,    
    name: 'Best Selling',
    link: '/#',
    },
    {
    id:3,    
    name: 'Top Rated',
    link: '/toprated',
    },
]

const Navbar = () => {

  const { cart } = useContext(CartContext);

  return (
    <div className='shadow-md sticky top-0 bg-white 
    dark:bg-gray-900 dark:text-white
     duration-200   z-40 '>

      {/* upper navbar */}
      <div className='bg-primary/40 py-2'>
        <div className='container flex
        justify-between items-center '>
            <Link to='/'>
            <div>
             <a href="#"
             className='font-bold text-2xl
             sm:text-3xl flex gap-2 ' >
                <img className='w-10 uppercase rounded-full ' 
                src="https://cdn.pixabay.com/photo/2024/05/19/10/10/ai-generated-8772215_640.png" alt="" />
                Shopsy
             </a>
            </div>
            </Link>

            {/* search bar */}
            <div className='flex justify-between items-center
            gap-4'>
                <div className='relative group hidden
                sm:block'>
                    <input type="text"
                    placeholder='Search'
                    className='w-[200px] sm:w-[200px]
                    group-hover:w-[300px] transition-all
                    duration-300 rounded-full border
                     border-gray-300 px-2 py-1 
                     focus:outline-none focus:border-1
                     focus:border-primary dark:border-gray-500
                     dark:bg-gray-800' />
                     <IoMdSearch
                     className='text-gray-500 
                     group-hover:text-primary
                     absolute top-1/2 -translate-y-1/2
                     right-3 '
                     />
                </div>
            </div>

            {/*order button */}
            <Link to='/cart'>
           <button
             className='bg-gradient-to-r from-primary
              to-secondary transition-all duration-200
              text-white py-1 px-4 rounded-full flex
              items-center gap-3 group ' >
                <FaCartShopping
                className='text-xl text-white drop-shadow-sm
                cursor-pointer'
                />
                {/* Display cart count */}
                {cart.length > 0 && (
                  <span className='bg-red-600 text-white rounded-full px-2 text-sm'>
                    {cart.length}
                  </span>
                )}
            </button>
           </Link>
            {/* DarkMode Switch */}
            <DarkMode/>
        </div>
      </div>

      {/*lower Navbar*/}
      <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center
        gap-4'>
        {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link}
             className='inline-block px-4 
             hover:text-primary duration-200' 
              >{data.name}</a>  
            </li>
        ))} 
        {/* Simple Dropdown Links */}
        <li className='group relative'>
        <a href="#"
        className='flex items-center gap-[2px] py-2 '>
            Trending Products
            <span>
            <FaCaretDown
            className='transition-all duration-200
            group-hover:rotate-180' />
            </span>
        </a>
        <div className='absolute z-[9999]
         hidden group-hover:block w-[200px] rounded-md
         bg-white p-2 text-black shadow-md '>
            <ul>
                {DropdownLinks.map((data) => (
               <li key={data.id}>
                <a href={data.link} 
                className='inline-block w-full
                rounded-md p-2 hover:bg-primary/20 '
                >
                    {data.name}
                </a>
               </li>     
                ))}
            </ul>
        </div>
        </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar


