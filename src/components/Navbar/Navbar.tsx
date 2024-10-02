import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ScanOrderly from "../../assets/ScanOrderly";
import CardNav from "./OpenComponents/CardNav";
import SearchIcon from "../../assets/SearchIcon";
import MenuItem from "../../assets/MenuItem";
import LabelSearch from "./OpenComponents/LabelSearch";
import MenuResponsive from "./OpenComponents/MenuResponsive";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  }, [location]);

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed-navbar p-3 border-b border-[#25252B] mx-auto ${isScrolled ? "navbar-transparent" : ""}`}>
        <div className="container mx-auto flex justify-between items-center max-w-screen-lg">
          <div className="flex items-center gap-5 text-[14px] text-[#b1b3b6] font-normal">
            <Link to="/">
              <div className="flex items-center gap-2">
                <ScanOrderly width={25} height={25} />
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
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <SearchIcon className="w-5 h-5 text-gray-300 hover:text-white" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none md:hidden"
            >
              <MenuItem className="w-6 h-6 text-gray-300 hover:text-white" />
            </button>
          </div>
        </div>
      </nav>

      <LabelSearch isSearchOpen={isSearchOpen} handleSearchClose={handleSearchClose} />
      <MenuResponsive isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} />
    </>
  );
}

export default Navbar;