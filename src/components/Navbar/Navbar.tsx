import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScanOrderly from "../../assets/ScanOrderly";
import CardNav from "./OpenComponents/CardNav";
import LabelSearch from "./OpenComponents/LabelSearch";
import MenuResponsive from "./OpenComponents/MenuResponsive";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed-navbar p-3 border-b border-[#25252B] mx-auto ${isScrolled ? "navbar-transparent" : ""}`}>
      <div className="container mx-auto flex justify-between items-center max-w-screen-lg">
        <div className="flex items-center gap-5 text-[14px] text-[#b1b3b6] font-normal">
          <Link to="/">
            <div className="flex items-center gap-2">
              <ScanOrderly width={28} height={28} />
              <p className="font-bold text-[1rem] text-[#edeef1]">ScanOrderly</p>
            </div>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
            <CardNav text="More" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LabelSearch />
          <MenuResponsive />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;