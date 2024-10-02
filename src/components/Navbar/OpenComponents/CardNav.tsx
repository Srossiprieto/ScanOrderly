import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

interface CardNavProps {
  text: string;
}

function CardNav({ text }: CardNavProps) {
  return (
    <div className="relative group">
      <button className="flex items-center justify-center text-center text-gray-300 hover:text-white focus:outline-none">
        {text}
        <div className="relative">
          <ChevronDown className="pt-1 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
          <ChevronUp className="pt-1 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100 absolute top-0 left-0" />
        </div>
      </button>
      <div
        className="absolute z-50 left-0 top-full w-[300px] pt-5 pointer-events-none opacity-0 origin-top-left duration-200 transform group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:transform-none border border-[#25252B] card rounded-md shadow-lg bg-[rgb(21 21 25 / 82%)]"
      >
        <div className="p-2">
          <Link
            to="/services"
            className="block px-4 py-2 hover:bg-[#4a4a4a38] hover:text-white hover:rounded-md"
          >
            Services
          </Link>
          <Link
            to="/pricing"
            className="block px-4 py-2 mt-2 hover:bg-[#4a4a4a38] hover:text-white hover:rounded-md"
          >
            Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardNav;