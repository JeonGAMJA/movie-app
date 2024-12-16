import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieListButtons from "./MovieListButtons";
import { tmdbClient } from "../../../f_shared/api/fetchMovies";

const MovieList = ({ title, buttons }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (endpoint) => {
    try {
      const response = await tmdbClient.get(`${endpoint}`);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(buttons[0].endpoint[0]);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex gap-10 items-center">
        <span className="font-bold text-[30px]">{title}</span>
        <MovieListButtons buttons={buttons} fetchMovies={fetchMovies} />
      </div>
      <div className="flex gap-[15px] overflow-x-scroll pt-[20px]">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
