import { Link } from "react-router-dom";
import { useDataContext } from "../context/FeedBacksContext";
export default function Roadmap() {
  const { data } = useDataContext();
  const plannedLenght = data.productRequests.filter(
    (product) => product.status === "planned"
  ).length;
  const inProggressLength = data.productRequests.filter(
    (product) => product.status === "in-progress"
  ).length;
  const liveLength = data.productRequests.filter(
    (product) => product.status === "live"
  ).length;
  const roadMapArray = [
    {
      label: "Planned",
      color: "#f49f85",
      length: plannedLenght,
    },
    {
      label: "In-Progress",
      color: "#ad1fea",
      length: inProggressLength,
    },
    {
      label: "Live",
      color: "#62bcfa",
      length: liveLength,
    },
  ];
  return (
    <div
      className="px-[2.4rem] pt-[1.9rem] pb-[2.4rem] bg-white 
    rounded-[1rem] flex flex-col gap-[2.4rem]
    transition-all duration-300 max-w-[25.5rem]
    w-full xl:h-[17.8rem] xl:w-[25.5rem]
    "
    >
      <div className="flex items-center gap-[6.7rem] xl:justify-between">
        <h1
          className="text-[1.8rem] font-bold tracking-[-0.25px]
            text-[#3a4374]"
        >
          Roadmap
        </h1>
        <Link
          to={"roadmap"}
          className="underline text-[1.3rem] font-semibold
            text-[#4661e6] hover:text-[#8397f8] transition-all duration-300"
        >
          View
        </Link>
      </div>
      <div
        className="flex flex-col gap-[0.8rem]
        text-[1.6rem] text-[#647196]"
      >
        {roadMapArray.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-[1.6rem]">
              <div
                className="w-[0.8rem] h-[0.8rem] rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <p>{item.label}</p>
            </div>
            <div>
              <span className="font-bold">{item.length}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
