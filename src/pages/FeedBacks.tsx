import { useState } from "react";
import SortFilter from "../components/SortFilter";
import {
  useDataContext,
  useFilterContext,
  useSort,
} from "../context/FeedBacksContext";
import MainHeader from "../components/MainHeader";
import Empty from "../components/Empty";
import FeedBackCard from "../components/FeedBackCard";
export default function FeedBacks() {
  const { data } = useDataContext();
  const { filter } = useFilterContext();
  const { sortIsOpen, setSortIsOpen } = useSort();
  const [sort, setSort] = useState<string>("Most Upvotes");
  const FilteredData = data.productRequests.filter((item) => {
    return filter.toLowerCase() === "all" &&
      item.status.toLowerCase() === "suggestion"
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

  return (
    <>
      <div className="md:px-[4rem] xl:p-[unset]">
        <MainHeader
          setSortIsOpen={setSortIsOpen}
          sortIsOpen={sortIsOpen}
          sort={sort}
          finalData={finalData}
        >
          <SortFilter
            setSort={setSort}
            sort={sort}
            setSortIsOpen={setSortIsOpen}
          />
        </MainHeader>
        {finalData.length === 0 ? (
          <Empty />
        ) : (
          <div
            className="flex flex-col gap-[1.6rem]
            pt-[3.3rem] pb-[5.5rem]
            px-[2.4rem] md:px-[unset] md:pt-[2.4rem]"
            onClick={() => setSortIsOpen(false)}
          >
            {finalData.map((feedback) => (
              <FeedBackCard key={feedback.id} feedback={feedback} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
