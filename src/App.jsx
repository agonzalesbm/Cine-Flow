import { MovieGrid } from "./features/movies";
import { SearchBar, SearchResults, useSearchMovies } from "./features/search";

function App() {
  const { query, setQuery, results, loading: searchLoading } = useSearchMovies();
  const isSearching = query.length > 0;

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-red-600 tracking-tighter">CINEFLOW</h1>
      </header>

      <main className="max-w-7xl mx-auto">
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
      </main>
    </div >
  );
}

export default App;
