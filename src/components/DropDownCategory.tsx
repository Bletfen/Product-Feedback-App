import { useState } from "react";
export default function DropDownCategory({
  type,
}: {
  type: "category" | "status";
}) {
  const [category, setCategory] = useState<boolean>(false);
  const [selectCategory, setSelectCategory] = useState<string>("Feature");
  const options =
    type === "category"
      ? ["Feature", "UI", "UX", "Enhancement", "Bug"]
      : ["Planned", "In-Progress", "Live"];
  return (
    <div className="relative">
      <div className="flex flex-col mb-[1.6rem]">
        <h1 className="text-[1.3rem] text-[#3a4374] font-bold tracking-[-0.181px]">
          {type === "category" ? "Category" : "Update Status"}
        </h1>
        <p className="text-[1.3rem] text-[#647196]">
          {type === "category"
            ? "Choose a category for your feedback"
            : "Change feature state"}
        </p>
      </div>
      <div
        className={`py-[1.3rem] px-[2.4rem] bg-[#f7f8fd]
        flex items-center justify-between rounded-[0.5rem]
        border cursor-pointer
        ${category ? "border border-[#4661e6]" : "border-0"}`}
        onClick={() => setCategory((prev) => !prev)}
      >
        <span className="text-[1.5rem] text-[#3a4374]">{selectCategory}</span>
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L5 5L9 1" stroke="#4661E6" stroke-width="2" />
        </svg>
      </div>
      {category ? (
        <div
          className={`absolute bg-white rounded-[1rem]
        shadow-[0_10px_40px_-7px_rgba(55,63,104,0.35)]
        w-full top-45 z-1
        ${type === "category" ? "z-2" : "z-1"}`}
        >
          {options.map((cat, index) => (
            <div key={index} className="">
              <div
                className="py-[1.2rem]
                flex items-center justify-between
                px-[2.4rem] cursor-pointer group
                "
                onClick={() => {
                  setSelectCategory(cat);
                  setCategory(false);
                }}
              >
                <span
                  className={`text-[1.6rem] transition-all duration-300
                    group-hover:text-[#ad1fea]
                ${
                  selectCategory === cat ? "text-[#ad1fea]" : "text-[#647196]"
                }`}
                >
                  {cat}
                </span>
                {selectCategory === cat ? (
                  <svg
                    width="13"
                    height="11"
                    viewBox="0 0 13 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.23287L4.52154 9L12 1"
                      stroke="#AD1FEA"
                      stroke-width="2"
                    />
                  </svg>
                ) : null}
              </div>
              {options.length > index + 1 ? (
                <div className="bg-[#3a4374]/15 h-px w-full"></div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
