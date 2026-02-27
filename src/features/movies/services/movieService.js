import { tmdbClient } from "../../../api/tmdbClient";

export const movieService = {
  getTrending: async (page = 1, options = {}) => {
    return await tmdbClient(`/trending/movie/day?language=en-US&page=${page}`, options);
  },
  getMovieDetails: async (movieId) => {
    return await tmdbClient(`/movie/${movieId}?language=en-US`);
  },
  searchMovies: async (query, page = 1, options = {}) => {
    return await tmdbClient((`/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=${page}`), options);
  }
};
