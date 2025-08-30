import type { ReactNode } from "react";
import AddFeedBackButton from "./AddFeedBackButton";

export default function MainHeader({
  setSortIsOpen,
  sortIsOpen,
  sort,
  children,
}: {
  setSortIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sortIsOpen: boolean;
  sort: string;
  children: ReactNode;
}) {
  return (
    <div
      className="px-[2.4rem] py-[0.8rem] bg-[#373f68]
            flex items-center justify-between"
    >
      <div className="relative">
        <div
          className="flex items-center gap-[0.8rem]
                text-[#f2f4fe] text-[1.3rem]"
          onClick={() => setSortIsOpen((prev) => !prev)}
        >
          <p className="font-bold">
            <span className="font-normal">Sort By : </span> {sort}
          </p>
          <svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L5 5L9 1" stroke="white" stroke-width="2" />
          </svg>
        </div>
        {sortIsOpen ? children : null}
      </div>
      <AddFeedBackButton />
    </div>
  );
}
