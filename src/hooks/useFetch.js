import { useState, useEffect, useRef } from "react";

export const useFetch = (apiCall) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortContollerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      abortContollerRef.current = new AbortController();
      setLoading(true);
      setError(null);

      try {
        const result = await apiCall(abortContollerRef.current.signal);
        setData(result);
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      if (abortContollerRef.current) abortContollerRef.current.abort();
    };
  }), [apiCall];

  return { data, loading, error };
};
