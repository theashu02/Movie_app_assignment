import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/movieApi";
import LoadingPage from "./LoadingPage";

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    // return <div className="text-center">Loading...</div>;
    return <LoadingPage />
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!movie) {
    return <div className="text-center">Movie not found.</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Poster"
          }
          alt={movie.Title}
          className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
          <p className="text-gray-600 mb-2">
            {movie.Year} | {movie.Runtime} | {movie.Genre}
          </p>
          <p className="mb-4">{movie.Plot}</p>
          <p className="mb-2">
            <strong>Director:</strong> {movie.Director}
          </p>
          <p className="mb-2">
            <strong>Writers:</strong> {movie.Writer}
          </p>
          <p className="mb-2">
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p className="mb-2">
            <strong>IMDb Rating:</strong> {movie.imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
