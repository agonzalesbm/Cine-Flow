import { MovieGrid } from "@/features/movies";
import { SearchBar } from "@/features/search";
import { SearchResults, useSearchMovies } from "@/features/search";

export function Home() {
  const { query, setQuery, results, loading: searchLoading } = useSearchMovies();
  const isSearching = query.length > 0;

  return (
    <>
      <SearchBar query={query} onSearchChange={setQuery} />
      <div className="px-6 pt-4">
        <h2 className="px-6 pt-8 text-xl font-semibold">
          {isSearching ? `Results for: "${query}"` : "Trending Today"}
        </h2>
      </div>
      {isSearching ? (
        <SearchResults results={results} loading={searchLoading} />
      ) : (
        <MovieGrid />
      )}
    </>
  );
}
