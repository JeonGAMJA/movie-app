const MovieCastingCard = ({ caster }) => {
  return (
    <div className="min-w-[138px] bg-white rounded-md overflow-hidden text-black">
      <div className="min-w-full h-[195px] bg-gray-300 overflow-hidden">
        {caster.profile_path ? (
          <img src={`https://image.tmdb.org/t/p/w500/${caster.profile_path}`} />
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex flex-col gap-3 p-[10px]">
        <span className="font-bold">{caster.name}</span>
        <span className="text-xs">{caster.character}</span>
      </div>
    </div>
  );
};

export default MovieCastingCard;
