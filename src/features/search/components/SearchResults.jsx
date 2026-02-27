import { MovieCard } from "@/features/movies";

export function SearchResults({ results, loading }) {
  if (loading) return <div className="text-center p-10">Searching movies...</div>;

  if (results.length === 0) return <div className="text-center p-10 text-gray-400">No movies found for your search.</div>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
      {results.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
}
