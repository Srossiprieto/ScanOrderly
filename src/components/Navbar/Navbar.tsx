import { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import ScanOrderlyL from "../../assets/ScanOrderlyL.png";
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
            <NavLink to="/">
              <div className="flex items-center gap-2">
                <img src={ScanOrderlyL} alt="ScanOrderly" className="w-7 h-7" />
                <p className="font-bold text-[1rem] text-[#edeef1]">ScanOrderly</p>
              </div>
            </NavLink>
            <div className="hidden md:flex space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#c4c4c4] font-bold " : "hover:text-white"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-[#c4c4c4]  font-bold " : "hover:text-white"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-[#c4c4c4]  font-bold " : "hover:text-white"
                }
              >
                Contact
              </NavLink>
              <CardNav text="More" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Buscar"
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
      <Suspense fallback={<h3>Loading....</h3>}>
        <Outlet />
      </Suspense>

      <LabelSearch isSearchOpen={isSearchOpen} handleSearchClose={handleSearchClose} />
      <MenuResponsive isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} />
    </>
  );
}

export default Navbar;