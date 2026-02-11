// import MovieGrid from "./features/movies/components/MovieGrid";
import { MovieGrid } from "./features/movies/index";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-red-600 tracking-tighter">CINEFLOW</h1>
      </header>

      <main className="max-w-7xl mx-auto">
        <h2 className="px-6 pt-8 text-xl font-semibold">Trending Today</h2>
        <MovieGrid />
      </main>
    </div >
  );
}

export default App;
