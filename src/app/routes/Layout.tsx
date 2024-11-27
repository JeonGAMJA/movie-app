import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="bg-black text-white w-full flex flex-col min-h-screen">
      <header className="w-full flex justify-between p-[20px] items-center">
        <div className="flex gap-2 text-bold">
          <div>Back</div>
          <div>movie-app</div>
          <div>Movies</div>
          <div>TV Shows</div>
          <div>People</div>
          <div>More</div>
        </div>
        <div className="flex gap-2">
          <div>+</div>
          <div>Language</div>
          <div>Login</div>
          <div>Join</div>
          <div>Search</div>
        </div>
      </header>
      <div className="flex flex-1">{children}</div>
      <footer className="flex gap-10 justify-center">
        <div className="flex flex-col">
          <span>Movie-app</span>
          <p>c 2024 Movie-app 어쩌구</p>
        </div>
        <div className="flex flex-col">
          <span>About Us</span>
          <a>어떤걸</a>
          <a>넣어야지</a>
          <a>잘했다고</a>
          <a>소문이</a>
          <a>날까</a>
        </div>
        <div className="flex flex-col">
          <span>For Users</span>
          <a>도대체</a>
          <a>뭘</a>
          <a>넣어야할지</a>
          <a></a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
