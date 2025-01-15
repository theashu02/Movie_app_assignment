import React, { useState } from "react";
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

  // const handleClear = () => {
  //   setQuery("");
  //   onSearch("");
  // };

  return (
    <div className="max-w-2xl mx-auto px-4 w-full">
      <div
        className={`
          relative flex items-center w-full overflow-hidden
          bg-white rounded-lg shadow-md transition-all duration-200
          ${isFocused ? "ring-2 ring-blue-500 shadow-lg" : "hover:shadow-lg"}
        `}
      >
        {/* Search Input */}
        <Input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="
            w-full px-4 py-3 text-gray-700 dark:bg-[#2a2b35] dark:text-[#e0e0e0] dark:placeholder-[#6b6b6b]
            placeholder-gray-400 bg-transparent dark:border-[#3a3b45] dark:focus:border-[#4a4b55] dark:focus:bg-[#3a3b45]
            focus:outline-none
          "
        />
      </div>
    </div>
  );
};

export default SearchBar;
