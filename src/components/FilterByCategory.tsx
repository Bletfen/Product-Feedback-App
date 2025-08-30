export default function FilterByCategory() {
  const categoryArray: string[] = [
    "All",
    "UI",
    "UX",
    "Enhancement",
    "Bug",
    "Feature",
  ];
  return (
    <div
      className="bg-white rounded-[1rem] pt-[2.4rem] pb-[3.6rem]
    px-[2.4rem]
    flex flex-wrap gap-[0.8rem]
    "
    >
      {categoryArray.map((cat) => (
        <div className="py-[0.5rem] px-[1.6rem] bg-[#f2f4ff] rounded-[1rem]">
          <p
            className="text-[1.3rem] font-semibold
            text-[#4661e6]"
          >
            {cat}
          </p>
        </div>
      ))}
    </div>
  );
}
