const VITE_TMDB_IMG_URL = import.meta.env.VITE_TMDB_IMG_URL;
export function MovieCard({ movie }) {
  const { title, poster_path: posterPath, release_date: releaseDate, vote_average: voteAverage } = movie;

  return (
    <div className="flex flex-col bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform">
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
