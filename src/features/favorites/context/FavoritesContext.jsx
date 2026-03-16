import { createContext, useReducer, useContext, useEffect } from "react";
import { favoritesReducer, initialState } from "./favoritesReducer";

const FavoritesConext = createContext();

function init(initialValue) {
  const saved = localStorage.getItem("cineflow_favorites");
  return saved ? JSON.parse(saved) : initialValue;
}

export function FavoritesProvider({ children }) {
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("cineflow_favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addFavorite(movie) {
    dispatch({ type: "ADD_FAVORITE", payload: movie });
  }

  function removeFavorite(movieId) {
    dispatch({ type: "REMOVE_FAVORITE", payload: movieId });
  }

  function isFavorite(movieId) {
    return favorites.some((m) => m.id === movieId);
  }

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  };

  return (
    <FavoritesConext.Provider value={value}>
      {children}
    </FavoritesConext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesConext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
}
