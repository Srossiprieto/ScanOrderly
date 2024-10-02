import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface LabelSearchProps {
  isSearchOpen: boolean;
  handleSearchClose: () => void;
}

function LabelSearch({ isSearchOpen, handleSearchClose }: LabelSearchProps) {
  if (!isSearchOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={handleSearchClose}
    >
      <div
        className="card text-white rounded-lg p-6 w-full max-w-md mx-4 bg-[#1E1E23] border border-gray-600 shadow-lg transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Search</h2>
          <button
            onClick={handleSearchClose}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <input
          type="search"
          className="w-full bg-transparent text-white rounded-md py-2 mb-4 px-4 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          placeholder="Search..."
        />
        <Link to="/" onClick={handleSearchClose} className="mt-4 text-gray-500 cursor-pointer hover:text-blue-500">&copy; ScanOrderly</Link>
      </div>
    </div>
  );
}

export default LabelSearch;