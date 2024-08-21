import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = ({ mode }) => {
  return (
    <footer className={`w-full relative top-[2rem] py-8 ${mode === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'} shadow-md`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold text-yellow-500">
              Onio-Shop
            </Link>
            <p className="mt-2">
              Your one-stop shop for the best products. Shop with us and experience the difference.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className={`hover:${mode === 'light' ? 'text-gray-700' : 'text-yellow-400'}`}>Home</Link>
              <Link to="/about" className={`hover:${mode === 'light' ? 'text-gray-700' : 'text-yellow-400'}`}>About</Link>
              <Link to="/contact" className={`hover:${mode === 'light' ? 'text-gray-700' : 'text-yellow-400'}`}>Contact</Link>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <nav className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`hover:${mode === 'light' ? 'text-gray-700' : 'text-yellow-400'}`}>
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`hover:${mode === 'light' ? 'text-gray-700' : 'text-yellow-400'}`}>
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`hover:${mode === 'light' ? 'text-gray-700' : 'text-yellow-400'}`}>
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`hover:${mode === 'light' ? 'text-gray-700' : 'text-yellow-400'}`}>
                <FaLinkedin size={24} />
              </a>
            </nav>
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={`p-2 rounded ${mode === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'}`}
              />
              <button type="submit" className="p-2 rounded bg-yellow-500 text-white hover:bg-yellow-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-4 text-center ${mode === 'light' ? 'border-gray-300' : 'border-gray-700'}">
          <p>&copy; 2024 Onio-Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

