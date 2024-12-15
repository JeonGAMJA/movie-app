import { useEffect } from "react";

export const useScrollDirection = (
  downFunc: () => void,
  upFunc: () => void
) => {
  useEffect(() => {
    let lastScrollTop = 0;

    const headerVisibleFunc = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        downFunc();
      } else {
        upFunc();
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", headerVisibleFunc);

    return () => {
      window.removeEventListener("scroll", headerVisibleFunc);
    };
  }, []);
};
