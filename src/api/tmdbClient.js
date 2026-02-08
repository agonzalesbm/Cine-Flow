const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const tmdbClient = async (endPoint, options = {}) => {
  const defaultOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(`${BASE_URL}/${endPoint}`, defaultOptions);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  return response.json();
};
