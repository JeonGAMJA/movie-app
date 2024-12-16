import { tmdbClient } from "../../../f_shared/api/fetchMovies";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const MovieSlide = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await tmdbClient.get(
        "/trending/all/week?language=ko-KR"
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper w-full"
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="h-[550px] w-full bg-blue-300 relative">
            <p className="absolute bottom-[130px] left-[70px] font-semibold text-7xl">
              {movie.title || movie.name}
            </p>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieSlide;
