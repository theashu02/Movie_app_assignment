import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { RxCross2 } from "react-icons/rx";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(`"${newQuery}"`); // Send query in double quotes
  };

  const handleClear = () => {
    setQuery("");
    onSearch(""); // Clear search
  };

  return (
    <div className="max-w-2xl mx-auto px-4 w-full">
      <div
        className={`
          relative flex gap-4 items-center w-full overflow-hidden
          bg-white dark:bg-[#1c1d25] rounded-lg shadow-md transition-all duration-200
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
          className={`
            w-full px-4 py-3 text-gray-700 dark:bg-[#2a2b35] dark:text-[#e0e0e0] dark:placeholder-[#6b6b6b]
            placeholder-gray-400 bg-transparent dark:border-[#3a3b45] 
            ${isFocused ? "dark:border-[#4a4b55]" : "dark:border-[#3a3b45]"} 
            dark:focus:bg-[#3a3b45] focus:outline-none
          `}
        />
        <Button variant="outline" onClick={handleClear}>
          {/* Clear */}
          <RxCross2 />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
