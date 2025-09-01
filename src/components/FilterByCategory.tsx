import { useFilterContext } from "../context/FeedBacksContext";
import { categoryArray } from "../seperateFuncs";
export default function FilterByCategory() {
  const { filter, setFilter } = useFilterContext();
  return (
    <div
      className="bg-white rounded-[1rem] pt-[2.4rem] pb-[3.6rem]
    px-[2.4rem]
    flex flex-wrap gap-[0.8rem]
    "
    >
      {categoryArray.map((cat) => (
        <div
          className={`py-[0.5rem] px-[1.6rem] rounded-[1rem] cursor-pointer
            transition-all duration-300 hover:bg-[#cfd7ff]
            ${filter === cat ? "bg-[#4661e6]" : "bg-[#f2f4ff]"}`}
          onClick={() => setFilter(cat)}
        >
          <p
            className={`text-[1.3rem] font-semibold
            ${filter === cat ? "text-white" : "text-[#4661e6]"}`}
          >
            {cat}
          </p>
        </div>
      ))}
    </div>
  );
}
