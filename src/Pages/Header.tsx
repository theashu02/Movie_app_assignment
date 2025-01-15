import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Movie Search
        </Link>
        <nav>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
