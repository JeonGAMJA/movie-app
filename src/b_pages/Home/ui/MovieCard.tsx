import { Link } from "react-router-dom";
import { formatDate } from "../../../f_shared/lib/\bformatDate";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`${movie.media_type}/${movie.id}`}>
      <div className="flex flex-col gap-[20px] hover:-translate-y-[20px] duration-100">
        <div className="relative w-[150px] h-[225px] rounded-lg bg-gray-300 overflow-hidden">
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="w-full h-full object-cover"
            />
          )}
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
