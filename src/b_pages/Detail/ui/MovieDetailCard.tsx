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
          <div
            className="w-full"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full backdrop-blur backdrop-brightness-50 flex justify-center">
              <div className="w-full max-w-[1544px]  flex gap-9 py-[30px] px-[40px]">
                <div className="flex flex-col w-[300px] overflow-hidden rounded-md">
                  <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-5">
                  <span className="text-4xl font-semibold">
                    {movieDetail.title}{" "}
                    <span className="font-thin text-gray-400">
                      ({movieDetail.release_date.split("-")[0]})
                    </span>
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-semibold">장르</span>
                    <div className="flex gap-3 font-light text-gray-300">
                      {movieDetail &&
                        movieDetail.genres.map((genre) => (
                          <span key={genre.id}>{genre.name}</span>
                        ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-semibold">평점</span>
                    <div className="font-light text-gray-300">
                      {movieDetail.vote_average} 점
                    </div>
                  </div>
                  {/* <div className="flex gap-3">
                <button>list</button>
                <button>like</button>
                <button>bookmark</button>
                <button>trailer</button>
              </div> */}
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-semibold">줄거리</span>
                    <span className="font-light text-gray-300">
                      {movieDetail.overview}
                    </span>
                  </div>
                </div>
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
