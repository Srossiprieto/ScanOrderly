import { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../../../assets/MenuItem";

function MenuResponsive() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          <MenuItem className="w-6 h-6 text-gray-300 hover:text-white" />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-64 bg-gray-700 text-gray-300 z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-600">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
            >
              Contact
            </Link>
            <Link
              to="/services"
              className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md"
            >
              Pricing
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuResponsive;