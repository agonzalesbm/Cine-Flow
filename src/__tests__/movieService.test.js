import { describe, it, expect, vi, afterEach } from "vitest";
import { movieService } from "../features/movies/services/movieService.js";

afterEach(() => {
  vi.restoreAllMocks();
});

vi.stubGlobal("fetch", vi.fn());

describe("movieService", () => {
  it("getTrending should return movie data on success", async () => {
    const mockData = {
      "results": [{ id: 1, title: "Test Movie" }]
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData
    });

    const result = await movieService.getTrending();

    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalled();
    expect(result.results[0].title).toBe("Test Movie");
  });

  it("getTreding should throw an error when the API response is not ok", async () => {
    fetch.mockResolvedValueOnce({
      ok: false
    });

    expect(fetch).toHaveBeenCalled();
    await expect(movieService.getTrending()).rejects.toThrowError();
  });

  it("getMovieDetails should return movie details based on Id", async () => {
    const mockData = {
      "id": 19,
      "overview": "In a futuristic city sharply divided...",
      "title": "Metropolis",
      "vote_average": 8.103,
      "vote_count": 3023
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData
    });

    const result = await movieService.getMovieDetails(19);

    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalled();
  });

  it("getMovieDetails should throw an error when API response not ok", async () => {
    fetch.mockResolvedValueOnce({
      ok: false
    });

    expect(fetch).toHaveBeenCalled();
    await expect(movieService.getMovieDetails()).rejects.toThrowError();
  });

  it("searchMovies shoudl return a movie based on a query", async () => {
    const mockData = {
      "results": [
        {
          "id": 195833,
          "overview": "Vicente and Abigail run a banana...",
          "title": "Caribe",
          "vote_average": 5.7,
        },
        {
          "id": 294244,
          "overview": "Prepare to get tangled in the jungles of...",
          "title": "Caribe",
          "vote_average": 2.7,
        },
      ]
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData
    });

    const result = await movieService.searchMovies("Caribe");

    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalled();
  });

  it("searchMovies should throw an error when API response not ok", async () => {
    fetch.mockResolvedValueOnce({
      ok: false
    });

    await expect(movieService.searchMovies("Query")).rejects.toThrowError();
  });
});
