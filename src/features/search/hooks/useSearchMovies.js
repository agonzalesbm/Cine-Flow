import { useState, useCallback } from "react";
import { useFetch } from "@/hooks/useFetch";
import { useDebounce } from "@/hooks/useDebounce";
import { movieService } from "@/features/movies";

export function useSearchMovies() {
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query, 600);

  const fetchCallback = useCallback(
    (signal) => debounceQuery ? movieService.searchMovies(debounceQuery, 1, { signal })
      : Promise.resolve({ results: [] })
    , [debounceQuery]);

  const { data, loading, error } = useFetch(fetchCallback);

  return {
    query,
    setQuery,
    results: data?.results || [],
    loading,
    error,
  };
}
