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
    await expect(movieService.getTrending()).rejects.toThrow();
  });
});
