import { ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import ScanOrderly from "../../../assets/ScanOrderly";
import ButtonPrimary from "../../Ui/ButtonPrimary/ButtonPrimary";

interface MenuResponsiveProps {
  isMenuOpen: boolean;
  handleMenuClose: () => void;
}

function MenuResponsive({ isMenuOpen, handleMenuClose }: MenuResponsiveProps) {
  if (!isMenuOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleMenuClose}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
      <div
        className="relative w-full h-full bg-gray-black text-gray-300 z-50 flex flex-col transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-3 py-3 border-b border-[#25252B]">
          <div className="flex justify-center items-center gap-2">
            <ScanOrderly className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Menu</h2>
          </div>
          <button
            onClick={handleMenuClose}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col space-y-2 justify-start w-full text-xl flex-grow">
          <Link
            to="/"
            className="flex justify-between items-center px-4 py-2 hover:bg-gray-600 hover:text-white border-b border-[#25252B]"
          >
            <span>Home</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
          <Link
            to="/about"
            className="flex justify-between items-center px-4 py-2 hover:bg-gray-600 hover:text-white border-b border-[#25252B]"
          >
            <span>About</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="flex justify-between items-center px-4 py-2 hover:bg-gray-600 hover:text-white border-b border-[#25252B]"
          >
            <span>Contact</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
          <Link
            to="/services"
            className="flex justify-between items-center px-4 py-2 hover:bg-gray-600 hover:text-white border-b border-[#25252B]"
          >
            <span>Services</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
          <Link
            to="/pricing"
            className="flex justify-between items-center px-4 py-2 hover:bg-gray-600 hover:text-white border-b border-[#25252B]"
          >
            <span>Pricing</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="p-4">
          <ButtonPrimary text="Contactanos"/>
        </div>
      </div>
    </div>
  );
}

export default MenuResponsive;