import { useEffect, useState } from "react";
import { tmdbClient } from "../../../f_shared/api/fetchMovies";
import { useAuth } from "../../../app/providers/AuthContext";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../../../f_shared/lib/supabaseService";

const MovieDetailCard = ({ movieId, movieType }) => {
  const { user } = useAuth();
  const [movieDetail, setMovieDetail] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const fetchMovieDetail = async () => {
    try {
      const response = await tmdbClient.get(`/${movieType}/${movieId}`);

      setMovieDetail(response.data);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  const fetchWishlist = async () => {
    try {
      const wishlistItems = await getWishlist(user.id);
      setWishlist(wishlistItems);
      console.log(wishlistItems);
      setIsInWishlist(wishlistItems.some((item) => item.item_id === movieId));
      console.log(isInWishlist);
    } catch (error) {
      console.error("Failed to fetch wishlist:", error);
    }
  };

  const toggleWishlist = async () => {
    try {
      if (isInWishlist) {
        await removeFromWishlist(user.id, movieId);
      } else {
        await addToWishlist(user.id, movieId);
      }
      fetchWishlist();
    } catch (error) {
      console.error("위시리스트 업데이트 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    fetchMovieDetail();
    fetchWishlist();
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
                  <div className="flex gap-5 text-4xl items-center">
                    <div className="flex gap-2 items-center">
                      <span className="font-semibold">
                        {movieDetail.title}{" "}
                      </span>
                      <span className="font-thin text-gray-400">
                        (
                        {movieDetail.release_date &&
                          movieDetail.release_date.split("-")[0]}
                        )
                      </span>
                    </div>
                    {user && (
                      <button
                        onClick={() => toggleWishlist()}
                        className={`py-[5px] px-[15px] text-xl border-[1px] rounded-full hover:bg-red-600 hover:border-red-600 ${
                          isInWishlist && "bg-red-600 border-red-600"
                        }`}
                      >
                        찜하기
                      </button>
                    )}
                  </div>
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
