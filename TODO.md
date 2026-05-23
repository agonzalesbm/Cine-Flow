### 🚀 Roadmap

#### **Phase 1: Foundation (Completed)**

* [x] Project Initialization (Vite + JS + ESLint + Prettier).
* [x] Feature-based folder structure and Public API setup.
* [x] TMDB API integration and centralized `tmdbClient`.
* [x] **Hooks practiced:** `useState`, `useEffect`, `useRef` (AbortController), and `useCallback`.
* [x] Base UI: `MovieGrid` and `MovieCard`.
* [x] Install and setup Tailwindcss on project

#### **Phase 2: Interaction & Search**

* [x] **Create the `Search` Feature:** Implement a search bar that updates the grid.
* [x] **Custom Hook `useDebounce`:** Practice logic to delay API calls while typing.
* [x] **`useRef` Practice:** Auto-focus the search input on mount or via shortcut.
* [x] **Pagination logic:** Update the `useTrendingMovies` to handle page changes.

#### **Phase 3: Global State & Persistence**

* [x] **Favorites System:** Implement `useContext` + `useReducer`.
* [x] **Persistence:** Keep favorites after a refresh with `localStorage`.
* [x] **Performance Audit:** Use `useMemo` and `React.memo` to optimize the `MovieCard` inside the grid.

#### **Phase 4: Routing & Navigation**

* [x] Install & Configure React Router.
* [x] Dynamic Routing: Create a `/movie/:id` route for movie details.
* [x] `useParams` Practice: Fetch specific movie data based on the URL ID.
* [x] Navigation logic: `<Link />` component used on `MovieCard` to the details page.
* [x] Event bubbling fix: e.preventDefault added on favorite handler to prevent redirection on card component.
* [ ] Favorites gallery: Create a dedicated route/view to show only saved movies.

#### **Phase 5: Details & Polish (Final)**

* [ ] **Dynamic Routing:** Use `react-router-dom` (or simple state) to show movie details.
* [ ] **Skeleton Loaders:** Improve UX by replacing the "Loading..." text with animated shapes.
* [ ] **Vitest Mastery:** Write unit tests for the `useReducer` logic in the Favorites feature.
