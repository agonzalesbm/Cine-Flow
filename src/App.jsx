import { Home } from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-red-600 tracking-tighter">CINEFLOW</h1>
      </header>

      <main className="max-w-7xl mx-auto">
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie">
            <Route path=":id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </main>
    </div >
  );
}

export default App;
