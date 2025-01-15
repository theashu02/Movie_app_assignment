const str = "c7a1fd85";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${str}&s=${encodeURIComponent(query)}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await response.json();
  if (data.Response === "False") {
    throw new Error(data.Error);
  }
  return data.Search;
};

export const getMovieDetails = async (id: string) => {
  const response = await fetch(`${BASE_URL}?apikey=${str}&i=${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }
  const data = await response.json();
  if (data.Response === "False") {
    throw new Error(data.Error);
  }
  return data;
};
