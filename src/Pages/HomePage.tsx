import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import { searchMovies } from "../api/movieApi";
import { Film, Loader, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (query.trim() === "") {
        setMovies([]);
        setHasSearched(false);
        return;
      }

      setLoading(true);
      setError(null);
      setHasSearched(true);

      try {
        const results = await searchMovies(query);
        setMovies(results);
      } catch (err) {
        setError(
          "An error occurred while searching for movies. Please try again."
        );
        console.error(err);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  return (
    <div className="min-h-screen bg-blue-300 text-gray-900 dark:bg-[#1c1d25] dark:text-gray-100">
      <div className=" text-white py-16 px-4 bg-blue-500 dark:bg-[#1c1d25] dark:text-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Film className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Discover Your Next Favorite Movie
            </h1>
          </div>
          {/* <p className="text-blue-100 text-center text-lg mb-8 max-w-2xl mx-auto dark:text-gray-300">
            Search through millions of movies, from classic masterpieces to the
            latest blockbusters
          </p> */}

          {/* Search Section */}
          <div className="max-w-3xl mx-auto">
            <SearchBar onSearch={debouncedSearch} />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Error Alert */}
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader className="h-8 w-8 animate-spin text-blue-600 dark:text-gray-200 mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              Searching for movies...
            </p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && movies.length === 0 && hasSearched && (
          <div className="text-center py-12">
            <Film className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No movies found
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search terms or explore our trending movies
              below
            </p>
          </div>
        )}

        {/* Initial State */}
        {!loading && !error && movies.length === 0 && !hasSearched && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Film className="h-8 w-8 text-blue-600 dark:text-gray-200" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {i === 1
                    ? "Search Anything"
                    : i === 2
                    ? "Discover Movies"
                    : "Save Favorites"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {i === 1
                    ? "Find movies by title, actor, or genre"
                    : i === 2
                    ? "Explore our curated collections"
                    : "Build your watchlist"}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Results */}
        {!loading && !error && movies.length > 0 && (
          <div className="mt-6">
            <MovieList movies={movies} loading={loading} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
