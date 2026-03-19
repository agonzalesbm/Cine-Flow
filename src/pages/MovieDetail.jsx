import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";
import { movieService } from "@/features/movies";
import { useCallback } from "react";

const IMG_URL = import.meta.env.VITE_TMDB_IMG_URL;

export function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchDetail = useCallback(
    (signal) => {
      return movieService.getMovieDetails(id, { signal });
    }, [id]
  );

  const { data: movie, loading, error } = useFetch(fetchDetail);

  if (loading) return <div className="text-center mt-20">Loading details</div>;
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;
  if (!movie) return null;

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-red-600 font-bold"
        >
          Go back
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={`${IMG_URL}/${movie.poster_path}`}
            alt={movie.title}
            className="w-full md:w-80 rounded-xl shadow-2xl"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-black mb-4">{movie.title}</h1>
            <p className="text-gray-400 italic mb-6">{movie.talline}</p>
            <p className="text-lg leading-relaxed mb-6">{movie.overview}</p>
            <div className="flex gap-4">
              <span className="bg-gray-800 px-4 py-2 rounded-full">{movie.release_date}</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full">{movie.vote_average.toFixed(1)}</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
