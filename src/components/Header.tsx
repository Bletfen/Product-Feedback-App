import { useState } from "react";
import FilterByCategory from "./FilterByCategory";
import Roadmap from "./Roadmap";
import { useSort } from "../context/FeedBacksContext";
export default function Header() {
  const { setSortIsOpen } = useSort();
  const [isHamburgerMenu, setIsHamburgerMenu] = useState<boolean>(false);
  return (
    <div
      className="relative md:grid grid-cols-3 gap-[1rem]
        md:px-[4rem] md:pt-[5.6rem]"
      onClick={() => setSortIsOpen(false)}
    >
      <div
        className="bg-[radial-gradient(166.82%_166.82%_at_103.9%_-10.39%,_#E84D70_0%,_#A337F6_53.09%,_#28A7ED_100%)]
      flex items-center justify-between py-[1.6rem] px-[2.4rem]
      md:rounded-[1rem] md:items-end md:py-[unset] md:pb-[2.4rem]"
      >
        <div className="text-white">
          <h1 className="text-[1.5rem] font-bold">Frontend Mentor</h1>
          <p className="text-[1.3rem] font-medium">Feedback Board</p>
        </div>
        {!isHamburgerMenu ? (
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer md:hidden"
            onClick={() => setIsHamburgerMenu(true)}
          >
            <rect width="20" height="3" fill="white" />
            <rect y="7" width="20" height="3" fill="white" />
            <rect y="14" width="20" height="3" fill="white" />
          </svg>
        ) : (
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer md:hidden"
            onClick={() => setIsHamburgerMenu(false)}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.99989 6.37857L2.98948 0.368164L0.868164 2.48948L6.87857 8.49989L0.868164 14.5103L2.98948 16.6316L8.99989 10.6212L15.0103 16.6316L17.1316 14.5103L11.1212 8.49989L17.1316 2.48948L15.0103 0.368164L8.99989 6.37857Z"
              fill="white"
            />
          </svg>
        )}
      </div>
      {isHamburgerMenu && (
        <div
          className="absolute top-29.5 bg-black/50 inset-0 w-full min-h-screen
          flex justify-end md:hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsHamburgerMenu(false);
            }
          }}
        >
          <div
            className="p-[2.4rem] bg-[#f7f8fd]
            max-w-[27.1rem] flex flex-col gap-[2.4rem]
            "
          >
            <FilterByCategory />
            <Roadmap />
          </div>
        </div>
      )}
      <FilterByCategory />
      <Roadmap />
    </div>
  );
}
