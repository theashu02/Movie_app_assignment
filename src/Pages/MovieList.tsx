import React, { useState } from "react";
import MovieCard from "./MovieCard";
import DotLineLoader from "./Loaders/DotLineLoader";
import { DialogContent, DialogTrigger, Dialog } from "../components/ui/dialog";
import { Button } from "../components/ui/button";

interface MovieListProps {
  movies: { imdbID: string; Title: string; Year: string; Poster: string }[];
  loading: boolean;
}

const MovieList: React.FC<MovieListProps> = ({ movies, loading }) => {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const filteredMovies = selectedYear
    ? movies.filter((movie) => movie.Year === selectedYear)
    : movies;
  const years = Array.from(new Set(movies.map((movie) => movie.Year))).sort();

  if (loading) {
    return (
      <div className="flex justify-center item-center">
        <DotLineLoader />
      </div>
    );
  }

  if (filteredMovies.length === 0) {
    return <div className="text-center">No movies found.</div>;
  }

  const YearFilter = () => {
    return (
      <div className="mb-8 text-center">
        <label
          htmlFor="year"
          className="text-sm font-medium text-gray-800 dark:text-gray-200 mr-2 sm:text-base"
        >
          Year:
        </label>
        <select
          id="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="mt-1 block w-[30%] sm:w-48 mx-auto px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 dark:border-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 dark:focus:ring-[#353745] focus:border-[#b2b6c7] text-sm sm:text-base bg-[#d6d8e1] dark:bg-[#1c1d25] text-gray-700 dark:text-gray-200 transition duration-150 ease-in-out"
        >
          <option value="">All</option>
          {years.map((year) => (
            <option
              key={year}
              value={year}
              className="bg-[#b2b6c7]  dark:bg-[#353745] text-gray-700 dark:text-gray-300 w-[40%] sm:w-48"
            >
              {year}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const Model = () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-20" variant="outline">Filter</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <YearFilter />
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <Model />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
