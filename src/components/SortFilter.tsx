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
    <div
      className="absolute top-20 flex flex-col gap-[1.2rem]
        rounded-[1rem] bg-white shadow-[0_10px_40px_-7px_rgba(55,63,104,0.35)]
        py-[1.2rem] w-[25.5rem]
    "
    >
      {sortArray.map((item, index) => (
        <div
          className="flex flex-col gap-[1.2rem]"
          onClick={() => setSort(item)}
        >
          <p
            className="px-[2.4rem]
            text-[1.6rem] text-[#647196]"
          >
            {item}
          </p>
          {sortArray.length > index + 1 ? (
            <div className="w-full h-px bg-[#3a4374]/15"></div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
