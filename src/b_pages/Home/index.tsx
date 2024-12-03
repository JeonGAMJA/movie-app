const Home = () => {
  return (
    <div>
      <div>
        <div className="flex gap-3">
          <span>Title</span>
          <div className="flex gap-3 bg-white border-[1px] rounded-[50px] border-red-300">
            <button className="bg-white text-black border-[30px] p-[5px] rounded-[50px] border-[0px]">
              Button
            </button>
            <button className="bg-white text-black border-[30px] p-[5px] rounded-[50px] border-[0px]">
              Button
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-[5px]">
            <div className="relative w-[150px] h-[225px] rounded-lg bg-white">
              <div>Card Image</div>
              <div className="w-[34px] h-[34px] bg-blue-300 rounded-full absolute b-[5px]"></div>
            </div>
            <div>Title</div>
            <div>Date</div>
          </div>
        </div>
      </div>
      <div>Latest Trailers</div>
      <div>What's Popular</div>
      <div>Free To Watch</div>
      <div>Leaderboard</div>
    </div>
  );
};

export default Home;
