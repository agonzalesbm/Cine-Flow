### 🚀 Roadmap

#### **Phase 1: Foundation (Completed)**

* [x] Project Initialization (Vite + JS + ESLint + Prettier).
* [x] Feature-based folder structure and Public API setup.
* [x] TMDB API integration and centralized `tmdbClient`.
* [x] **Hooks practiced:** `useState`, `useEffect`, `useRef` (AbortController), and `useCallback`.
* [x] Base UI: `MovieGrid` and `MovieCard`.
* [x] Install and setup Tailwindcss on project

#### **Phase 2: Interaction & Search (Current)**

* [ ] **Create the `Search` Feature:** Implement a search bar that updates the grid.
* [ ] **Custom Hook `useDebounce`:** Practice logic to delay API calls while typing.
* [ ] **`useRef` Practice:** Auto-focus the search input on mount or via shortcut.
* [ ] **Pagination logic:** Update the `useTrendingMovies` to handle page changes.

#### **Phase 3: Global State & Persistence (Upcoming)**

* [ ] **Favorites System:** Implement `useContext` + `useReducer`.
* [ ] **Persistence:** Create a `useLocalStorage` hook to keep favorites after a refresh.
* [ ] **Performance Audit:** Use `useMemo` and `React.memo` to optimize the `MovieCard` inside the grid.

#### **Phase 4: Details & Polish (Final)**

* [ ] **Dynamic Routing:** Use `react-router-dom` (or simple state) to show movie details.
* [ ] **Skeleton Loaders:** Improve UX by replacing the "Loading..." text with animated shapes.
* [ ] **Vitest Mastery:** Write unit tests for the `useReducer` logic in the Favorites feature.
