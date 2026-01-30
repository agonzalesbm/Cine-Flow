## 🎬 CineFlow - Media Discovery Dashboard

CineFlow is a media discovery application designed to demonstrate mastery of **Modern React (2026)**. The project focuses on advanced architectural patterns, efficient state management, and performance optimization using the full suite of React Hooks.

### 🏗️ Architecture & Patterns

The project follows a **Feature-Based** organizational structure combined with the **Service-Hook-Component (SHC)** pattern:

* **Component-Based Architecture:** The UI is broken down into small, reusable, and independent building blocks.
* **Services:** Pure JavaScript functions responsible for TMDB API communication.
* **Custom Hooks:** The "brains" of the features, managing state, side effects, and business logic.
* **Public API (Barrel files):** Using `index.js` per feature folder to encapsulate internal logic and expose only necessary interfaces.

### 🛠️ Tech Stack

* **Environment:** [Vite](https://vitejs.dev/) (Build tool).
* **Frontend:** React 18/19 (**JavaScript**).
* **Code Quality:** **ESLint** (Linting) & **Prettier** (Formatting).
* **Styling:** Tailwind CSS.
* **Testing:** [Vitest](https://vitest.dev/) for Unit Testing (Focusing on API Services and Logic).
* **Data Source:** [The Movie Database (TMDB) API](https://www.themoviedb.org/).

### 🪝 Hooks Implementation Goals

This project serves as a sandbox to master the following hooks in real-world scenarios:

1. **`useState` & `useEffect**`: Handling asynchronous data fetching and API lifecycles.
2. **`useContext` & `useReducer**`: Managing a complex global state for "Favorites" and "Watch Later" lists.
3. **`useMemo` & `useCallback**`: Optimizing list rendering and preventing unnecessary re-renders in the `MovieCard` component.
4. **`useRef`**: Managing `AbortController` for request cleanup and handling DOM references for search focus.
5. **Custom Hooks**: Building reusable logic such as `useFetch`, `useLocalStorage`, and `useDebounce`.

### 📂 Feature-Based Structure

```text
src/
├── api/             # Base API configuration (Axios/Fetch)
├── components/      # Global UI Components (Atoms/Molecules)
├── features/        # Domain-driven folders
│   ├── movies/      # List, Grid, and Detail logic
│   ├── search/      # Search logic and filtering
│   └── favorites/   # Global favorites state & persistence
├── hooks/           # Shared utility hooks
├── utils/           # Formatting and helper functions
└── __tests__/       # Critical unit tests (Reducers & Services)

```

### 🧪 Critical Testing Strategy

We focus on testing logic that impacts the user's data and app stability:

* **API Services:** Ensuring data transformation from TMDB is correct.
* **Reducers:** Validating state transitions for the Favorites system.
* **Utilities:** Testing helper functions (e.g., date formatting).
