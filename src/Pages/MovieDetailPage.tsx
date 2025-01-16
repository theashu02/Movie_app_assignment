import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDetails } from "../api/movieApi";
import DotLineLoader from "./Loaders/DotLineLoader";
import { Button } from "../components/ui/button";
import { IoArrowBackSharp } from "react-icons/io5";

interface Movie {
  Title: string;
  Year: string;
  Runtime: string;
  Genre: string;
  Plot: string;
  Director: string;
  Writer: string;
  Actors: string;
  Poster: string;
  imdbRating: string;
  imdbID: string;
  Type: string;
  Language: string;
  Country: string;
}

const MovieDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleBackClick = () => {
    navigate('/');
  };
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(id!);
        setMovie(details);
      } catch (err) {
        setError(
          "An error occurred while fetching movie details. Please try again."
        );
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <DotLineLoader />
  }

  if (error) {
    return <div className="text-center dark:text-[#f4f4f4] text-gray-900">{error}</div>;
  }

  if (!movie) {
    return <div className="text-center">Movie not found.</div>;
  }

  return (
    <div className="bg-[#ecedf2] dark:bg-[#1c1d25] p-6">
      <Button
        variant="outline"
        onClick={handleBackClick}
        className="fixed h-8 w-4 -ml-9 -mt-12 md:-mt-10 md:-ml-8 z-50 bg-[#ecedf2] text-gray-700 dark:bg-gray-800/60 backdrop-blur-sm border-gray-700 hover:bg-gray-300 transition-all duration-300 dark:text-gray-200 dark:hover:text-gray-400"
      >
        <IoArrowBackSharp />
      </Button>
      <div className="flex flex-col md:flex-row">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://placehold.co/300x450"
          }
          alt={movie.Title}
          className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h1 className="text-3xl poppins-bold mb-4 text-gray-900 dark:text-gray-100">
            {movie.Title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            {movie.Year} | {movie.Runtime} | {movie.Genre}
          </p>
          <p className="text-gray-800 dark:text-gray-200 mb-4">{movie.Plot}</p>
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            <strong>Director:</strong> {movie.Director}
          </p>
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            <strong>Writers:</strong> {movie.Writer}
          </p>
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            <strong>IMDb Rating:</strong> {movie.imdbRating}
          </p>
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            <strong>Language:</strong> {movie.Language}
          </p>
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            <strong>Country:</strong> {movie.Country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
