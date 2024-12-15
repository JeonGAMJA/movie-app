import { useEffect, useState } from "react";
import { tmdbClient } from "../../../f_shared/api/fetchMovies";
import MovieCastingCard from "./MovieCastingCard";

const MovieCastingList = ({
  movieId,
  movieType,
}: {
  movieId?: string;
  movieType?: string;
}) => {
  const [movieCredit, setMovieCredit] = useState(null);
  const fetchMovieDetail = async () => {
    try {
      const response = await tmdbClient.get(
        `${movieType ? `/${movieType}` : ""}/${movieId}/credits`
      );
      console.log(response.data);
      setMovieCredit(response.data.cast);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [movieId]);

  return (
    <div className="w-full flex flex-col gap-7">
      <span className="text-2xl font-semibold">캐스팅</span>
      <div className="w-full overflow-x-scroll flex gap-3">
        {movieCredit && (
          <>
            {movieCredit.map((cast) => (
              <MovieCastingCard key={cast.id} caster={cast} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MovieCastingList;
