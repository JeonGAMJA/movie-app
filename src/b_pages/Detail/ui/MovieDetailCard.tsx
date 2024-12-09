import { useEffect, useState } from "react";
import { tmdbClient } from "../../../f_shared/api/fetchMovies";

const MovieDetailCard = ({
  movieId,
  movieType,
}: {
  movieId?: string;
  movieType?: string;
}) => {
  const [movieDetail, setMovieDetail] = useState(null);
  const fetchMovieDetail = async () => {
    try {
      const response = await tmdbClient.get(`/${movieType}/${movieId}`);
      console.log(response.data);
      setMovieDetail(response.data);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [movieId]);

  return (
    <>
      {movieDetail ? (
        <>
          <div className="flex flex-col w-[300px] overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            />
            <div className="w-full h-[60px] bg-blue-900">Now Streaming</div>
          </div>
          <div className="flex flex-col gap-3">
            <span>
              {movieDetail.title} ({movieDetail.release_date})
            </span>
            <div className="flex gap-3">
              {movieDetail &&
                movieDetail.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
            </div>
            <div>{movieDetail.vote_average}</div>
            <div className="flex gap-3">
              <button>list</button>
              <button>like</button>
              <button>bookmark</button>
              <button>trailer</button>
            </div>
            <div className="flex flex-col gap-1">
              <span>{movieDetail.overview}</span>
              <span>text</span>
            </div>
            <div>
              <div className="flex flex-col gap-1">
                <span>creator</span>
                <span>name</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default MovieDetailCard;
