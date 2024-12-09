import { Link } from "react-router-dom";
import { formatDate } from "../../../f_shared/lib/\bformatDate";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`${movie.media_type}/${movie.id}`}>
      <div className="flex flex-col gap-[20px] hover:-translate-y-[20px] duration-100">
        <div className="relative w-[150px] h-[225px] rounded-lg bg-white overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="w-full h-full object-cover"
          />
          <div className="w-[34px] h-[34px] bg-blue-300 rounded-full absolute b-[5px]"></div>
        </div>
        <div className="w-[150px] flex flex-col">
          <span className="truncate font-bold text-lg">
            {movie.title ? movie.title : movie.name}
          </span>
          <span className="text-gray-400 font-thin">
            {movie.release_date
              ? formatDate(movie.release_date)
              : movie.first_air_date && formatDate(movie.first_air_date)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
