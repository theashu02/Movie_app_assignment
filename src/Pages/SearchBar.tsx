import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
// import { FaSearch } from "react-icons/fa";
import { Input } from "../components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 w-full">
      <div
        className={`
          relative flex items-center w-full overflow-hidden
          bg-white rounded-lg shadow-md transition-all duration-200
          ${isFocused ? "ring-2 ring-blue-500 shadow-lg" : "hover:shadow-lg"}
        `}
      >
        {/* Search Icon */}
        {/* <FaSearch
          className={`
            h-5 w-5 ml-4 transition-colors duration-200
            ${isFocused ? "text-blue-500" : "text-gray-400"}
          `}
        /> */}

        {/* Search Input */}
        <Input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="
            w-full px-4 py-3 text-gray-700 
            placeholder-gray-400 bg-transparent
            focus:outline-none
          "
        />

        {query && (
          <button
            onClick={handleClear}
            className="
              p-2 mr-2 rounded-full
              text-gray-400 hover:text-gray-600
              hover:bg-gray-100
              transition-colors duration-200
            "
            aria-label="Clear search"
          >
            <RxCross2 className="h-4 w-4" />
          </button>
        )}
      </div>

      {query && isFocused && (
        <div
          className="
          absolute mt-2 w-full max-w-2xl bg-white 
          rounded-lg shadow-lg border border-gray-100
          py-2 px-0 space-y-1 z-10
        "
        >
          <div className="px-4 py-2 text-sm text-gray-500">
            Try searching for...
          </div>
          <button
            className="
            w-full px-4 py-2 text-left text-sm
            hover:bg-gray-50 text-gray-700
            transition-colors duration-200
          "
          >
            Popular Movies
          </button>
          <button
            className="
            w-full px-4 py-2 text-left text-sm
            hover:bg-gray-50 text-gray-700
            transition-colors duration-200
          "
          >
            New Releases
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
