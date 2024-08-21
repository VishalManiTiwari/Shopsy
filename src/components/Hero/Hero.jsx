import React from 'react';
import Slider from 'react-slick';
import 'animate.css/animate.min.css';


const ImageList = [
  {
    id: 1,
    img: 'https://imgs.search.brave.com/mOSwv5mXkPr6jsn-9vtmtQT9thdTA8hFVjI-379uug4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NC9TaG9wcGluZy1Q/TkctRmlsZS5wbmc',
    Title: "Upto 50% off on all Men's Wear",
    Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi minus ad mollitia nam dignissimos voluptas sed libero laborum, provident assumenda aliquam ea tempore explicabo sit!"
  },
  {
    id: 2,
    img: 'https://imgs.search.brave.com/bk0PpJX48iHrOyxdY9UAm9qRW7XWj5rekoOga_pAfAc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NC9TaG9wcGluZy1E/b3dubG9hZC1QTkcu/cG5n',
    Title: "30% off on all Women's Wear",
    Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi minus ad mollitia nam dignissimos voluptas sed libero laborum, provident assumenda aliquam ea tempore explicabo sit!"
  },
  {
    id: 3,
    img: 'https://imgs.search.brave.com/ZCRDqz3VdP25JKx1Ol76x8ZptOfA3QUXG-x_s14CULs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NC9TaG9wcGluZy5w/bmc',
    Title: "70% off on all Products Sale",
    Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi minus ad mollitia nam dignissimos voluptas sed libero laborum, provident assumenda aliquam ea tempore explicabo sit!"
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='relative overflow-hidden min-h-[550px]
     sm:min-h-[650px] bg-gray-100 flex justify-center
      items-center dark:bg-gray-950 dark:text-white
       duration-200'>
      {/* background pattern */}
      <div className='h-[700px] w-[700px]
       bg-primary/40 absolute -top-1/2
        right-0 rounded-3xl rotate-45'></div>

      {/* hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className='grid grid-cols-1
               sm:grid-cols-2 gap-6'>
                {/* text content section */}
                <div className='flex flex-col 
                justify-center gap-4 pt-12 
                sm:pt-0 text-center sm:text-left 
                order-2 sm:order-1 relative z-10'>
                  <h1
                  data-aos ="zoom-out"
                  data-aos-duration="500"
                  data-aos-once ="true"
                  className='text-5xl 
                  sm:text-6xl lg:text-7xl
                   font-bold animate__animated 
                   animate__fadeInLeft'>
                    {data.Title}
                  </h1>
                  <p
                  data-aos ="fade-up"
                  data-aos-duration="500"
                  data-aos-delay ="100"
                  className='text-sm
                   animate__animated
                    animate__fadeInLeft
                     animate__delay-1s'>
                    {data.Description}
                  </p>
                  <div
                   data-aos ="fade-up"
                   data-aos-duration="500"
                   data-aos-delay ="300"
                  className='animate__animated 
                  animate__fadeInLeft animate__delay-2s'>
                    <button className='bg-gradient-to-r 
                    from-primary to-secondary
                     hover:scale-105 duration-200
                      text-white py-2 px-4
                       rounded-full shadow-lg
                        hover:shadow-2xl'>
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Image section */}
                <div className='order-1 sm:order-2
                 flex justify-center items-center'>
                  <img
                    className='w-[300px] sm:h-[450px] 
                    sm:w-[450px] object-contain mx-auto 
                    lg:scale-125 transform 
                    transition-transform duration-500
                     hover:scale-135'
                    src={data.img}
                    alt={data.Title}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
