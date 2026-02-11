import { useTrendingMovies } from "../hooks/useTredingMovies";
import { MovieCard } from "./MovieCard";

export function MovieGrid() {
  const { movies, loading, error } = useTrendingMovies();

  if (loading) return <div className="text-center py-10 text-white">Loading movies...</div>;
  if (error) return <div className="text-center py-10 text-red-500 underline">{error}</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );

}
