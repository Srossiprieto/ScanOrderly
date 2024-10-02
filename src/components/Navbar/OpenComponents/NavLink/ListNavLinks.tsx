import { ReactNode } from "react";
import NavLink from "./NavLink";

interface NavLinkItem {
  to: string;
  icon: ReactNode;
  text: string;
  description: string;
}

interface ListNavLinksProps {
  links: NavLinkItem[];
}

function ListNavLinks({ links }: ListNavLinksProps) {
  return (
    <div className="p-2 text-[#edeef1]">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          icon={link.icon}
          text={link.text}
          description={link.description}
        />
      ))}
    </div>
  );
}

export default ListNavLinks;