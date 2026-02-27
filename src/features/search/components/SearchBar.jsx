import { useEffect, useRef } from "react";

export function SearchBar({ query, onSearchChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [query]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search movies..."
        className="w-full bg-gray-600 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-red-600 transition-colors"
        value={query}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
