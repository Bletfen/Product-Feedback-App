export default function SortFilter({
  setSort,
}: {
  setSort: React.Dispatch<React.SetStateAction<string>>;
}) {
  const sortArray = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  return (
    <div className="flex flex-col gap-[1.2rem]">
      {sortArray.map((item, index) => (
        <div
          className="flex flex-col gap-[1.2rem]"
          onClick={() => setSort(item)}
        >
          <p className="px-[2.4rem]">{item}</p>
          {sortArray.length > index + 1 ? null : (
            <div className="w-full h-px bg-[#3a4374]"></div>
          )}
        </div>
      ))}
    </div>
  );
}
