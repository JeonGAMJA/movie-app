const MovieListButton = ({ title, endpoint, fetchMovies }) => {
  return (
    <button
      className="p-[5px] rounded-[50px] border-[0px] hover:text-red-200"
      onClick={() => fetchMovies(endpoint)}
    >
      {title}
    </button>
  );
};

export default MovieListButton;
