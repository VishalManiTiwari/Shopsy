import React from "react";

const BannerImg = {
  backgroundImage: `url(${'https://imgs.search.brave.com/4G6kMeZwBvjHOfEWamPA1fMtcbgZkf0MdbaHi0r48zk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC80MS8wNi9z/dW1tZXItc2FsZS1i/YW5uZXItb25saW5l/LXNob3BwaW5nLW9u/LWJlYWNoLXZlY3Rv/ci0xNDQ3NDEwNi5q/cGc'})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;