import { createContext, useState } from "react";
import { tmdbClient } from "../../f_shared/api/fetchMovies";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (endpoint) => {
    try {
      const response = await tmdbClient.get(`${endpoint}`);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  return (
    <MovieContext.Provider value={{ movies, fetchMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
