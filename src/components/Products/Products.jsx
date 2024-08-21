import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';  

const ProductsData = [
  {
    id: 1,
    img: 'https://media.istockphoto.com/id/1212679560/photo/indian-mature-woman-shopping-for-clothing-at-outdoor-street-market.jpg?s=612x612&w=0&k=20&c=d4oX8vM2-nfasf5xhyap9TLrozuxiyV0ZLwkfsVK_uI=',
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
    link: "/womenswear"
  },
  {
    id: 2,
    img: 'https://media.istockphoto.com/id/1212679556/photo/late-teen-girl-shopping-for-clothing-at-outdoor-street-market.jpg?s=612x612&w=0&k=20&c=98IJhxv0AplKSD8lajschB6SDF62XHXFyEmk7mUBYUg=',
    title: "Women Western",
    rating: 4.5,
    color: "red",
    aosDelay: "200",
    link: "/womenswear"
  },
  {
    id: 3,
    img: 'https://imgs.search.brave.com/hMzx_j8j5KcKhM-3sAYffa8jjVd2RYG0ew0Ny0gcWIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzIxLzgxLzg2/LzM2MF9GXzEyMTgx/ODY3M182RUlENWlG/NzZWQ0NjNGFHT0xK/a2Q5NFBobmdncmUz/by5qcGc',
    title: "Shoes",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
    link: "/goggles"
  },
  {
    id: 4,  
    img: 'https://media.istockphoto.com/id/2149896622/photo/happy-print-shop-worker-showing-finished-t-shirt-at-the-camera.jpg?s=612x612&w=0&k=20&c=OBtYgA_LGPGZJb-QJkOe8YRQxMJlMoiKad2F5GUuwYE=',
    title: "Printed T-shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
    link: "/menswear"
  },
  {
    id: 5,  
    img: 'https://media.istockphoto.com/id/466312084/vector/t-shirts-fire-lion.jpg?s=612x612&w=0&k=20&c=lR6zE4e__E8wdnuYsVR1Sr7ZU3N0YQTipiVv0PL-lP8=',
    title: "Fashion T-shirt",
    rating: 4.6,
    color: "Pink",
    aosDelay: "800",
    link: "/fashiontshirt"
  },
];

const Products = () => {
  return (
    <div className='mt-12 mb-12'>
      <div className='container'>
        {/* Header Section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary'>
            Top Selling Products for You
          </p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>
            Products
          </h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>
            Discover the best products tailored just for you. Shop 
            now and experience quality like never before.
          </p>
        </div>
        {/* Body Section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {/* Card Section */}
            {ProductsData.map((data) => (
              <Link to={data.link} key={data.id} data-aos="fade-up" data-aos-delay={data.aosDelay} className='space-y-3'>
                <img
                  className='h-[220px] w-[150px] object-cover rounded-md'
                  src={data.img} 
                  alt={data.title} 
                />
                <div>
                  <h3 className='font-semibold'>
                    {data.title}
                  </h3>
                  <p className='text-sm text-gray-600'>
                    {data.color}
                  </p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* View All Button */}
          <div className="flex justify-center">
            <Link to="/toprated" className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
