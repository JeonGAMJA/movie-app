import { useEffect, useState } from "react";
import MovieCard from "../Home/ui/MovieCard";
import { getWishlist } from "../../f_shared/lib/supabaseService";
import { useAuth } from "../../app/providers/AuthContext";
import { tmdbClient } from "../../f_shared/api/fetchMovies";

const Like = () => {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovieDetails = async (movie) => {
    try {
      const movieRequests = movie.map((id) =>
        tmdbClient.get(`/movie/${id.item_id}`).then((res) => res.data)
      );

      const movies = await Promise.all(movieRequests);
      return movies;
    } catch (error) {
      console.error("영화 세부 정보 요청 실패:", error.message);
      return [];
    }
  };

  useEffect(() => {
    const loadWishlist = async () => {
      if (!user) return;

      try {
        const itemIds = await getWishlist(user.id);
        const movies = await fetchMovieDetails(itemIds);

        setWishlist(movies);
      } catch (error) {
        console.error("찜 목록 로드 실패:", error.message);
      } finally {
        setLoading(false);
      }
    };

    loadWishlist();
  }, [user]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center px-[150px]">
      <div className="py-[30px] w-[500px] flex justify-center text-2xl">
        찜목록
      </div>
      <div className="max-w-[1300px] flex justify-center">
        <div className="w-full flex flex-wrap gap-5">
          {wishlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Like;
