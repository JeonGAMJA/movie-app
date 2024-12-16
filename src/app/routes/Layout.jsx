import { Outlet, useNavigate } from "react-router-dom";
import { useScrollDirection } from "../../f_shared/hooks/useScrollDirection";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabaseLogout } from "../../f_shared/lib/supabaseService";
import { useAuth } from "../providers/AuthContext";

const Layout = () => {
  const { user } = useAuth();
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const currentPath = window.location.pathname;

  useScrollDirection(
    () => setHeaderVisible(false),
    () => setHeaderVisible(true)
  );

  const handleLogout = async () => {
    await supabaseLogout({
      onSuccess: () => navigate("/"),
    });
  };

  const handleMouseEnter = () => {
    setIsMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };

  return (
    <div className="bg-black text-white w-full flex flex-col min-h-screen relative">
      <header
        className={`w-full flex justify-between py-[30px] px-[60px] items-center fixed z-10 transition-transform duration-500 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {currentPath === "/search" ? (
          <button
            onClick={() => navigate(-1)}
            className="p-[10px] cursor-pointer"
          >
            back
          </button>
        ) : (
          <>
            <div className="flex gap-2 text-bold items-center">
              <Link to="/" className="font-extrabold text-2xl text-red-600">
                MOVAPP
              </Link>
            </div>
            <div className="flex gap-5 items-center">
              <>
                <Link to="/search">Search</Link>
                {user ? (
                  <>
                    <div
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src={user.user_metadata.avatar_url}
                        className="w-[40px] h-[40px] rounded-full"
                      />
                      {isMenuVisible && (
                        <div className="absolute bg-red-600 overflow-hidden rounded-md w-[100px] right-1">
                          <button
                            onClick={() => handleLogout()}
                            className="hover:bg-red-100 hover:text-red-600 text-white flex justify-center items-center w-full py-[10px]"
                          >
                            Log out
                          </button>
                          <Link
                            to="/like"
                            className="hover:bg-red-100 hover:text-red-600 text-white flex justify-center items-center w-full py-[10px]"
                          >
                            찜목록
                          </Link>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <Link to="/signup">Sign up</Link>
                    <Link
                      to="/login"
                      className="py-[10px] px-[20px] bg-red-600 rounded-full"
                    >
                      Log in
                    </Link>
                  </>
                )}
              </>
            </div>
          </>
        )}
      </header>
      <div className="flex flex-1 justify-center">
        <Outlet />
      </div>
      <footer className="flex gap-[30px] justify-center w-full py-[100px] border-t-[0.5px] border-gray-600">
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
