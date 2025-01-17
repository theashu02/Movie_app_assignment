// const url = "http://www.omdbapi.com/?s=Batman&page=4&apikey";
// const str = "c7a1fd85";
const str = "6160503e";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query: string, page: number) => {
  try {
    const cacheKey = `${query}_page_${page}`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      console.log("Using cached data for query:", query);
      return JSON.parse(cachedData);
    }

    const response = await fetch(
      `${BASE_URL}?s=${query}&page=${page}&apikey=${str}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();
    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    // Cache the fetched data for future use
    localStorage.setItem(cacheKey, JSON.stringify(data.Search || []));
    return data.Search || [];
  } catch (error) {
    throw new Error(`Error fetching movies: ${error}`);
  }
};

export const getMovieDetails = async (id: string) => {
  try {
    const cacheKey = `${id}_details`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      console.log("Using cached data for movie details ", id);
      return JSON.parse(cachedData);
    }
    const response = await fetch(`${BASE_URL}?apikey=${str}&i=${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }

    const data = await response.json();
    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    // Cache the fetched movie details
    localStorage.setItem(cacheKey, JSON.stringify(data));
    return data;
  } catch (error) {
    throw new Error(`Error fetching movie details- ${error}`);
  }
};

// export const searchWebSeries = async (query: string, page: number) => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}?t=${query}&page=${page}&apikey=${str}`
//     );
//     console.log(query);
//     if (!response.ok) {
//       throw new Error("Failed to fetch Web Series.");
//     }
//     const data = await response.json();
//     if (data.Response === "False") {
//       throw new Error(data.Error);
//     }
//     return data.Search || [];
//   } catch (error) {
//     throw new Error(`Error fetching Web Series: ${error}`);
//   }
// };