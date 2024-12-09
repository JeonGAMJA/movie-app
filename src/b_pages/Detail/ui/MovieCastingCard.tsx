const MovieCastingCard = ({ caster }) => {
  return (
    <div className="min-w-[138px] h-[360px] bg-white rounded-md overflow-hidden text-black">
      <div className="min-w-full h-[175px] bg-yellow-200 overflow-hidden">
        <img src={`https://image.tmdb.org/t/p/w500/${caster.profile_path}`} />
      </div>
      <div className="flex flex-col gap-3">
        <span>{caster.name}</span>
        <span>{caster.character}</span>
      </div>
    </div>
  );
};

export default MovieCastingCard;
