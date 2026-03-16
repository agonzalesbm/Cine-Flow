import { useFavorites } from "@/features/favorites";
import { useMemo } from "react";

export function MovieCard({ movie }) {
  const { title, poster_path: posterPath, release_date: releaseDate, vote_average: voteAverage } = movie;
  const { favorites, isFavorite, addFavorite, removeFavorite } = useFavorites();

  const favorited = useMemo(() => {
    console.log(`Checking favorite status for: ${movie.title}`);
    return isFavorite(movie.id);
  }, [movie.id, favorites]);
  const VITE_TMDB_IMG_URL = import.meta.env.VITE_TMDB_IMG_URL;

  function handleFavoriteClick(e) {
    e.stopPropagation();
    if (favorited) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <div className="flex flex-col bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform border border-gray-800 transition-all hover:border-red-600/50">
      <button
        onClick={handleFavoriteClick}
        className={`absolute top-2 right-2 z-10 p-2 rounded-full backdrop-blur-md transition-all ${favorited ? "bg-red-600 text-white" : "bg-black/40 text-gray-300 hover:text-white"
          }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill={favorited ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </button>
      <img
        src={`${VITE_TMDB_IMG_URL}/${posterPath}`}
        alt={title}
        className="w-full aspect-[2/3] object-cover"
        loading="lazy"
      />
      <div className="flex flex-col items-center p-4">
        <h3 className="text-white font-bold truncate">{title}</h3>
        <div className="flex flex-col justify-between items-center mt-2 text-sm">
          <span className="text-gray-400">{releaseDate}</span>
          <span className="text-yellow-400 font-semibold">{voteAverage}</span>
        </div>
      </div>
    </div>
  );
}
