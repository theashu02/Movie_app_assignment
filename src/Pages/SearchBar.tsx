import React, { useState, useEffect } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { RxCross2 } from "react-icons/rx";
import useNavigationStore from "../store/useNavigationStore";

const SearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const query = useNavigationStore((state) => state.query);
  const setQuery = useNavigationStore((state) => state.setQuery);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    // console.log("clicked");
    setQuery("movie");
    setTimeout(() => {
      setQuery("");
    }, 800);
  };
  //handling scroll behaviour
  const handleScroll = () => {
    setIsFixed(window.scrollY > 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`max-w-2xl mx-auto px-4 w-full transition-all duration-300 ${
        isFixed
          ? "fixed top-20 left-0 right-0 bg-transparent shadow-sm dark:shadow-md z-50"
          : ""
      }`}
    >
      <div
        className={`
          relative flex gap-0 items-center w-full overflow-hidden
          bg-[#ecedf2] dark:bg-[#1c1d25] rounded-lg dark:shadow-md transition-all duration-200
        `}
      >
        <Input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full poppins-medium px-4 py-3 text-gray-800 dark:bg-[#2a2b35] dark:text-[#e0e0e0] dark:placeholder-[#6b6b6b]
            placeholder-[#d6d8e1] bg-transparent dark:border-[#3a3b45] border-[#545a75] border-x-4
            ${isFocused ? "dark:border-[#4a4b55]" : "dark:border-[#3a3b45]"} 
            dark:focus:bg-[#3a3b45] focus:outline-none dark:border-[#3a3b45] 
            ${isFocused ? "border-[#69718e]" : "border-[#878da9]"}
          `}
        />
        <Button
          className="absolute right-2 h-7 w-7"
          variant="outline"
          onClick={handleClear}
        >
          <RxCross2 />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
