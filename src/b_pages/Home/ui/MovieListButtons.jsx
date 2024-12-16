import { useState } from "react";
import MovieListButton from "./MovieListButton";

const MovieListButtons = ({ buttons, fetchMovies }) => {
  const [activeButton, setActiveButton] = useState(buttons[0].title);

  const handleClick = (title) => {
    setActiveButton(title);
  };

  return (
    <div className="flex gap-3">
      {buttons.map((button) => (
        <div
          onClick={() => handleClick(button.title)}
          className={`${
            activeButton === button.title ? "text-red-500" : "text-white"
          }`}
          key={button.title}
        >
          <MovieListButton
            title={button.title}
            endpoint={button.endpoint}
            fetchMovies={fetchMovies}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieListButtons;
