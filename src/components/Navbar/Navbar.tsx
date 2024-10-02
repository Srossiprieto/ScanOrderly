import { Link } from "react-router-dom";
import ScanOrderly from "../../assets/ScanOrderly";
import CardNav from "./OpenComponents/CardNav";
import LabelSearch from "./OpenComponents/LabelSearch";
import MenuResponsive from "./OpenComponents/MenuResponsive";


function Navbar() {
  return (
    <>
      <nav className="p-3 relative top-0 border-b border-[#25252B] mx-auto">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Link to="/">
              <ScanOrderly width={35} height={35} />
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
              <CardNav text="More"/>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LabelSearch />
            <MenuResponsive />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;