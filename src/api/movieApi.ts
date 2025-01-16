// const str = "c7a1fd85";
// const BASE_URL = "http://www.omdbapi.com/";


// export const searchMovies = async (query: string, page: number) => {
//   console.log(query);

//   const response = await fetch(
//     `${BASE_URL}?s=${encodeURIComponent(
//       query
//     )}&page=${page}&apikey=${str}`
//   );
//   if (!response.ok) {
//     throw new Error("Failed to fetch movies");
//   }
//   const data = await response.json();
//   if (data.Response === "False") {
//     throw new Error(data.Error);
//   }
//   return data.Search;
// };

// export const getMovieDetails = async (id: string) => {
//   const response = await fetch(`${BASE_URL}?apikey=${str}&i=${id}`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch movie details");
//   }
//   const data = await response.json();
//   if (data.Response === "False") {
//     throw new Error(data.Error);
//   }
//   return data;
// };
// const url = "http://www.omdbapi.com/?s=Batman&page=4&apikey=c7a1fd85";

const str = "c7a1fd85";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query: string, page: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}?s=${query}&page=${page}&apikey=${str}`
    );
    console.log(query);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    if (data.Response === "False") {
      throw new Error(data.Error);
    }
    return data.Search || [];
  } catch (error) {
    throw new Error(`Error fetching movies: ${error}`);
  }
};
export const searchWebSeries = async (query: string, page: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}?t=${query}&page=${page}&apikey=${str}`
    );
    console.log(query);
    if (!response.ok) {
      throw new Error("Failed to fetch Web Series.");
    }
    const data = await response.json();
    if (data.Response === "False") {
      throw new Error(data.Error);
    }
    return data.Search || [];
  } catch (error) {
    throw new Error(`Error fetching Web Series: ${error}`);
  }
};

export const getMovieDetails = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${str}&i=${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }
    const data = await response.json();
    if (data.Response === "False") {
      throw new Error(data.Error);
    }
    return data;
  } catch (error) {
    throw new Error(`Error fetching movie details: ${error}`);
  }
};
