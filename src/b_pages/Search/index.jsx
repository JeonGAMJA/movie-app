import { useEffect, useState } from "react";
import useDebounce from "../../f_shared/hooks/useDebounce";
import { tmdbClient } from "../../f_shared/api/fetchMovies";
import MovieCard from "../Home/ui/MovieCard";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debouncedInput = useDebounce(inputValue, 500);

  const handleInput = (value) => {
    setInputValue(value);
  };

  const fetchSearchResults = async (query) => {
    try {
      const response = await tmdbClient.get(
        `search/multi?query=${query}&language=ko-KR`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    if (debouncedInput.trim()) {
      fetchSearchResults(debouncedInput);
    } else {
      setSearchResults([]); // 입력값이 비어 있을 때 결과 초기화
    }
  }, [debouncedInput]);

  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center px-[150px]">
      <div className="py-[30px] w-[500px]">
        <input
          placeholder="검색"
          className="w-full bg-neutral-900 py-[10px] px-[30px] rounded-full"
          value={inputValue}
          onChange={(e) => handleInput(e.target.value)}
        />
      </div>
      <div className="max-w-[1300px] flex justify-center">
        <div className="w-full flex flex-wrap gap-5">
          {searchResults.length !== 0 &&
            searchResults.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
