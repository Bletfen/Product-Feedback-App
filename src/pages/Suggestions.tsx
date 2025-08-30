import { useState } from "react";
import SortFilter from "../components/SortFilter";
import {
  useDataContext,
  useFilterContext,
} from "../context/SuggestionsContext";
import MainHeader from "../components/MainHeader";
export default function Suggestions() {
  const { data } = useDataContext();
  const { filter } = useFilterContext();
  const [sort, setSort] = useState<string>("Most Upvotes");
  const [sortIsOpen, setSortIsOpen] = useState<boolean>(false);
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
        return b.upvotes - a.upvotes;
      case "most comments":
        return commentsB - commentsA;
      case "least comments":
        return commentsA - commentsB;
      default:
        return 0;
    }
  });
  return (
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
      {finalData.map((item) => item.id)}
    </div>
  );
}
