import { useState } from "react";
import SearchIcon from "../../../assets/SearchIcon";
import { X } from "lucide-react";

function LabelSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        className="text-gray-300 hover:text-white focus:outline-none"
      >
        <SearchIcon className="w-5 h-5 text-gray-300 hover:text-white" />
      </button>
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="card text-white rounded-md p-4 w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Search</h2>
              <button
                onClick={handleClose}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
              <X />
              </button>
            </div>
            <input
              type="search"
              className="w-full bg-transparent text-white rounded-md py-2 px-4 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Search..."
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default LabelSearch;