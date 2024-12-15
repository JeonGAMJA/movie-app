import MovieList from "./ui/MovieList";
import MovieSlide from "./ui/MovieSlide";

const Home = () => {
  const LIST_CONFIGS = [
    {
      title: "오늘의 콘텐츠",
      buttons: [
        { title: "오늘", endpoint: ["/trending/movie/day"] },
        { title: "이번 주", endpoint: ["/trending/movie/week"] },
      ],
    },
    {
      title: "인기 콘텐츠",
      buttons: [
        {
          title: "영화관",
          endpoint: ["/movie/now_playing?region=KR&language=ko-kr&page=1"],
        },
        {
          title: "스트리밍",
          endpoint: [
            "/discover/movie?sort_by=popularity.desc&with_watch_monetization_types=flatrate&region=ko-kr",
          ],
        },
        { title: "TV", endpoint: ["/discover/tv?sort_by=popularity.desc"] },
        {
          title: "대여",
          endpoint: ["/discover/movie?watch_region=KR&include_video=true"],
        },
      ],
    },
    {
      title: "무료 콘텐츠",
      buttons: [
        {
          title: "TV",
          endpoint: [
            "/discover/tv?with_watch_monetization_types=free&region=KR&language=ko-kr&sort_by=popularity.desc",
          ],
        },
        {
          title: "영화",
          endpoint: [
            "/discover/movie?with_watch_monetization_types=free&region=KR&language=ko-kr&sort_by=popularity.desc",
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-[30px] w-full pb-[100px]">
      <MovieSlide />
      <div className="flex flex-col gap-[30px] px-[60px]">
        {LIST_CONFIGS.map((config) => (
          <MovieList
            title={config.title}
            buttons={config.buttons}
            key={config.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
