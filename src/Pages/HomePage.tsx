import React, { useState, useCallback, useEffect } from "react";
import { Film, Loader, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { debounce } from "lodash";
import { searchMovies } from "../api/movieApi";
import useNavigationStore from "../store/useNavigationStore";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const query = useNavigationStore((state) => state.query);

  const debouncedSearch = useCallback(
    debounce(async (searchQuery: string, searchPage: number) => {
      if (searchQuery.trim() === "") {
        setMovies([]);
        setHasSearched(false);
        setHasMore(false);
        return;
      }

      setLoading(true);
      setError(null);
      setHasSearched(true);

      try {
        const results = await searchMovies(searchQuery, searchPage);
        setMovies((prevMovies) =>
          searchPage === 1 ? results : [...prevMovies, ...results]
        );
        if (results.length === 0) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      } catch (error) {
        setError(
          "An error occurred while searching for movies. Please try again with more than 2 character."
        );
        console.log(error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 500 &&
        hasMore &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  useEffect(() => {
    // Perform a default search on initial load
    debouncedSearch("movie", page);
  }, [page,debouncedSearch]);

  useEffect(() => {
    if (query) {
      debouncedSearch(query, page);
    }
  }, [page, query, debouncedSearch]);

  // const handleSearch = (searchQuery: string) => {
  //   // Set query using Zustand store
  //   useNavigationStore.getState().setQuery(searchQuery);
  //   setPage(1);
  // };

  return (
    <div className="min-h-screen bg-[#ecedf2] text-gray-900 dark:bg-[#1c1d25] dark:text-gray-100">
      <div className="text-gray-800 py-8 px-4 bg-[#ecedf2] dark:bg-[#1c1d25] dark:text-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Film className="h-20 w-20 md:h-12 md:w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Discover Movies
            </h1>
          </div>

          <div className="max-w-3xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {error && (
          <Alert variant="default" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {loading && !movies.length && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader className="h-8 w-8 animate-spin text-blue-600 dark:text-gray-200 mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              Searching for movies...
            </p>
          </div>
        )}

        {movies.length > 0 && (
          <div className="mt-6">
            <MovieList movies={movies} loading={loading} />
          </div>
        )}

        {!hasMore && hasSearched && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-300">
              No more movies to load.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
