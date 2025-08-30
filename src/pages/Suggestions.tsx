import { useState } from "react";
import SortFilter from "../components/SortFilter";
import {
  useDataContext,
  useFilterContext,
} from "../context/SuggestionsContext";
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
      <div className="px-[2.4rem] py-[0.8rem] bg-[#373f68]">
        <div onClick={() => setSortIsOpen((prev) => !prev)}>
          <p>
            <span>Sort By : </span> {sort}
          </p>
          {sortIsOpen ? <SortFilter setSort={setSort} /> : null}
        </div>
      </div>
    </div>
  );
}
