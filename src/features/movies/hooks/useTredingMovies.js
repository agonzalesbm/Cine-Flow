import { useCallback } from "react";
import { useFetch } from "@/hooks/useFetch";
import { movieService } from "../services/movieService";

export const useTrendingMovies = (page = 1) => {
  const fetchCallBack = useCallback(
    (signal) => movieService.getTrending(page, { signal }),
    [page]
  );

  const { data, loading, error } = useFetch(fetchCallBack);

  return {
    movies: data?.results || [],
    loading,
    error,
  };
};
