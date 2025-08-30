export default function SortFilter({
  setSort,
  sort,
  setSortIsOpen,
}: {
  setSort: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
  setSortIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
          <div
            className="flex items-center justify-between
          px-[2.4rem] group cursor-pointer"
            onClick={() => setSortIsOpen(false)}
          >
            <p
              className={`text-[1.6rem] ${
                sort === item ? "text-[#ad1fea]" : "text-[#647196]"
              } transition-all duration-300 group-hover:text-[#ad1fea]`}
            >
              {item}
            </p>
            {sort === item ? (
              <svg
                width="13"
                height="10"
                viewBox="0 0 13 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.96875 4.85894L4.50044 8.39062L12.0004 0.890625"
                  stroke="#AD1FEA"
                  stroke-width="2"
                />
              </svg>
            ) : null}
          </div>
          {sortArray.length > index + 1 ? (
            <div className="w-full h-px bg-[#3a4374]/15"></div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
