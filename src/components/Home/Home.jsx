import React,{useEffect} from 'react'
import Hero from '../Hero/Hero'
import Products from '../Products/Products'
import TopProducts from '../TopProducts/TopProducts'
import Banner from '../Banner/Banner'
import Subscribe from '../Subscribe/Subscribe'
import Testimonials from '../Testimonials/Testimonials'
import AOS from 'aos';
import "aos/dist/aos.css";



const Home = () => {
 
    useEffect(() => {
        AOS.init({
          offset:100,
          duration:800,
          easing:"ease-in-sine",
          delay: 100,
        });
      },[] )

  return (
    <div className='bg-white dark:bg-gray-900 
    dark:text-white duration-200 '>
      <Hero/>
      <Products/>
      <TopProducts/>
       <Banner/> 
      <Subscribe/>
      <Products/>
      <Testimonials/> 
    </div>
  )
}

export default Home
