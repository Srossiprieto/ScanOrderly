import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  icon: ReactNode;
  text: string;
  description: string;
}

function NavLink({ to, icon, text, description }: NavLinkProps) {
  return (
    <Link
      to={to}
      className="block px-4 py-2 hover:bg-[#4a4a4a38] hover:rounded-md"
    >
      <div className="flex gap-2">
        <div className="flex-shrink-0 mt-1">{icon}</div>
        <div className="flex flex-col">
          <p className="font-bold text-[#edeef1]">{text}</p>
          <span className="text-[12px] text-gray-400">{description}</span>
        </div>
      </div>
    </Link>
  );
}

export default NavLink;
