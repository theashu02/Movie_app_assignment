// import React from "react";
// import MovieCard from "./MovieCard";

// interface MovieListProps {
//   movies: { imdbID: string; title: string; year: string; poster: string }[];
//   loading: boolean;
// }

// const MovieList: React.FC<MovieListProps> = ({ movies, loading }) => {
//   if (loading) {
//     return <div className="text-center">Loading...</div>;
//   }

//   if (movies.length === 0) {
//     return <div className="text-center">No movies found.</div>;
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {movies.map((movie) => (
//         <MovieCard key={movie.imdbID} movie={movie} />
//       ))}
//     </div>
//   );
// };

// export default MovieList;


import React from "react";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: { imdbID: string; Title: string; Year: string; Poster: string }[];
  loading: boolean;
}

const MovieList: React.FC<MovieListProps> = ({ movies, loading }) => {
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (movies.length === 0) {
    return <div className="text-center">No movies found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
