import { useState } from "react";
import SortFilter from "../components/SortFilter";
import {
  useDataContext,
  useFilterContext,
  useUpVoteHandler,
  useSort,
} from "../context/FeedBacksContext";
import MainHeader from "../components/MainHeader";
import Empty from "../components/Empty";
import { Link } from "react-router-dom";
export default function Suggestions() {
  const { data } = useDataContext();
  const { filter } = useFilterContext();
  const { upVoteHandler, upVotedIds } = useUpVoteHandler();
  const { sortIsOpen, setSortIsOpen } = useSort();
  const [sort, setSort] = useState<string>("Most Upvotes");
  const FilteredData = data.productRequests.filter((item) => {
    return filter.toLowerCase() === "all"
      ? true
      : item.category.toLowerCase() === filter.toLocaleLowerCase();
  });
  const finalData = FilteredData.sort((a, b) => {
    const commentsA = a.comments?.length ?? 0;
    const commentsB = b.comments?.length ?? 0;
    switch (sort.toLowerCase()) {
      case "most upvotes":
        return b.upvotes - a.upvotes;
      case "least upvotes":
        return a.upvotes - b.upvotes;
      case "most comments":
        return commentsB - commentsA;
      case "least comments":
        return commentsA - commentsB;
      default:
        return 0;
    }
  });
  console.log(finalData.length);

  return (
    <>
      {finalData.length === 0 ? (
        <Empty />
      ) : (
        <div>
          <MainHeader
            setSortIsOpen={setSortIsOpen}
            sortIsOpen={sortIsOpen}
            sort={sort}
          >
            <SortFilter
              setSort={setSort}
              sort={sort}
              setSortIsOpen={setSortIsOpen}
            />
          </MainHeader>
          <div
            className="flex flex-col gap-[1.6rem]
      pt-[3.3rem] pb-[5.5rem]
      px-[2.4rem]"
            onClick={() => setSortIsOpen(false)}
          >
            {finalData.map((suggestion) => (
              <Link
                to={`/suggestion/${suggestion.id}`}
                className="flex flex-col p-[2.4rem] bg-white
            gap-[1.6rem] rounded-[1rem]"
              >
                <div>
                  <div className="hidden">
                    <svg
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 6L4 2L8 6" stroke="#4661E6" strokeWidth="2" />
                    </svg>
                    <span>{suggestion.upvotes}</span>
                  </div>
                  <div
                    className="flex flex-col gap-[0.8rem]
                text-[1.3rem] "
                  >
                    <h1
                      className="text-[#3a4374] font-bold
                  tracking-[-0.181px]"
                    >
                      {suggestion.title}
                    </h1>
                    <p className="text-[#647196]">{suggestion.description}</p>
                    <div>
                      <span
                        className="
                      px-[1.6rem] py-[0.6rem]
                      inline-block capitalize text-[1.3rem]
                      font-semibold text-[#4661e6]
                      bg-[#f2f4ff] rounded-[1rem]"
                      >
                        {suggestion.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div
                    className={`flex items-center gap-[1rem]
                pl-[1.6rem] pr-[1.3rem] py-[0.7rem] rounded-[1rem]
                cursor-pointer hover:bg-[#cfd7ff]
                transition-all duration-300
                ${
                  upVotedIds.includes(suggestion.id)
                    ? "bg-[#4661e6]"
                    : "bg-[#f2f4f3]"
                }`}
                    onClick={() => upVoteHandler(suggestion.id)}
                  >
                    <svg
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        upVotedIds.includes(suggestion.id)
                          ? "stroke-white"
                          : "stroke-[#4661E6]"
                      }`}
                    >
                      <path d="M0 6L4 2L8 6" strokeWidth="2" />
                    </svg>
                    <span
                      className={`text-[1.3rem] font-bold
                  tracking-[-0.181px]
                  ${
                    upVotedIds.includes(suggestion.id)
                      ? "text-white"
                      : "text-[#3a4374]"
                  }`}
                    >
                      {suggestion.upvotes}
                    </span>
                  </div>
                  <div className="flex items-center gap-[0.2rem]">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z"
                        fill="#CDD2EE"
                      />
                    </svg>
                    <span
                      className={`text-[1.3rem] font-bold
                  tracking-[-0.181px] text-[#3a4374]
                  ${suggestion.comments ? "opacity-[1]" : "opacity-[0.5]"}`}
                    >
                      {suggestion.comments?.length
                        ? suggestion.comments.length
                        : "0"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
