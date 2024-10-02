import { ChevronDown, ChevronUp, Box, CircleDollarSign } from "lucide-react";
import ListNavLinks from "./NavLink/ListNavLinks";

interface CardNavProps {
  text: string;
}

const navLinks = [
  {
    to: "/services",
    icon: <Box className="h-3 w-3" />,
    text: "Services",
    description: "Lorem ipsum dolor sit. lorem lorem.",
  },
  {
    to: "/pricing",
    icon: <CircleDollarSign className="h-3 w-3" />,
    text: "Pricing",
    description: "Lorem ipsum dolor sit. lorem lorem.",
  },
];

function CardNav({ text }: CardNavProps) {
  return (
    <div className="relative group">
      <button className="flex items-center justify-center text-center focus:outline-none">
        {text}
        <div className="relative">
          <ChevronDown className="pt-1 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
          <ChevronUp className="pt-1 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100 absolute top-0 left-0" />
        </div>
      </button>
      <div className="absolute z-50 left-[-10px] top-full w-[300px] pointer-events-none opacity-0 origin-top-left duration-200 transform group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:transform-none border border-[#25252B] card rounded-md shadow-lg bg-[rgb(21 21 25 / 82%)] ">
        <ListNavLinks  links={navLinks} />
      </div>
    </div>
  );
}

export default CardNav;