export const initialState = [];

export function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      if (state.some((movie) => movie.id === action.payload.id)) return state;
      return [...state, action.payload];

    case "REMOVE_FAVORITE":
      return state.filter((movie) => movie.id !== action.payload);

    case "INIT_FAVORITES":
      return action.payload;

    default:
      return state;
  }
}
