import { useParams } from "react-router-dom";
import MovieDetailCard from "./ui/MovieDetailCard";
import MovieCastingList from "./ui/MovieCastingList";

const Detail = () => {
  const { id, type } = useParams();

  return (
    <div className="w-full pt-[96px] flex flex-col items-center">
      <MovieDetailCard movieId={id} movieType={type} />
      <div className="w-full overflow-hidden py-[30px] px-[40px] flex">
        <MovieCastingList movieId={id} movieType={type} />
      </div>
    </div>
  );
};

export default Detail;
