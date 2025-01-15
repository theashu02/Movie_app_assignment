import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import { searchMovies } from "../api/movieApi";

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (query.trim() === "") {
        setMovies([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const results = await searchMovies(query);
        setMovies(results);
      } catch (err) {
        setError(
          "An error occurred while searching for movies. Please try again."
        );
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Search for Movies</h1>
      <SearchBar onSearch={debouncedSearch} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <MovieList movies={movies} loading={loading} />
    </div>
  );
};

export default HomePage;
