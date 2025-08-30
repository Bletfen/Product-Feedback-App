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
  return (
    <div>
      <MainHeader
        setSortIsOpen={setSortIsOpen}
        sortIsOpen={sortIsOpen}
        sort={sort}
      >
        <SortFilter setSort={setSort} />
      </MainHeader>
    </div>
  );
}
