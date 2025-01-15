import React from "react";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Poster"
          }
          alt={movie.Title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 truncate">{movie.Title}</h2>
          <p className="text-gray-600">{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
