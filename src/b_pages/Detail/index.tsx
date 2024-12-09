import { useParams } from "react-router-dom";
import MovieDetailCard from "./ui/MovieDetailCard";
import MovieCastingList from "./ui/MovieCastingList";

const Detail = () => {
  const { id, type } = useParams();

  return (
    <div>
      <div className="flex gap-9">
        <MovieDetailCard movieId={id} movieType={type} />
      </div>
      <div className="w-[70%] px-[100px] overflow-hidden">
        <MovieCastingList movieId={id} movieType={type} />
        <div className="flex flex-col">
          <div className="flex">
            <span>Current Season</span>
            <span>Original Air Date</span>
          </div>
          <div className="text-black">
            <div className="flex rounded-md">
              <div className="w-[130px] h-[195px] bg-green-200">Image</div>
              <div className="p-[20px] bg-white flex-1">
                <div>Season</div>
                <div className="flex">
                  <div>Score</div>
                  <span> year . Eposodes</span>
                </div>
                <div>overview</div>
                <div className="flex">
                  <div>calender</div>
                  <span>손톱밑의때가 뭐여</span>
                </div>
                <span>(2x9, November 23, 2024)</span>
                <button>Season Finale</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
