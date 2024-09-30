import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">ScanOrderly</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
          <div className="relative group">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              More
            </button>
            <div className="absolute -left-5 top-full w-[300px] pt-5 pointer-events-none opacity-0 origin-top-left transition-[opacity,transform] duration-200 transform group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:transform-none">
              <Link to="/services" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">
                Services
              </Link>
              <Link to="/pricing" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">
                Pricing
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-700 text-gray-300">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">
            About
          </Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">
            Contact
          </Link>
          <Link to="/services" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">
            Services
          </Link>
          <Link to="/pricing" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">
            Pricing
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;