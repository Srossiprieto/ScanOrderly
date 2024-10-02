import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface MenuResponsiveProps {
  isMenuOpen: boolean;
  handleMenuClose: () => void;
}

function MenuResponsive({ isMenuOpen, handleMenuClose }: MenuResponsiveProps) {
  if (!isMenuOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex"
      onClick={handleMenuClose}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
      <div
        className="relative min-h-dvh inset-y-0 right-0 w-64 bg-black text-gray-300 z-50 flex flex-col transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-3 border-b border-[#25252B]">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={handleMenuClose}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <X className="w-6 h-6" />
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
    </div>
  );
}

export default MenuResponsive;