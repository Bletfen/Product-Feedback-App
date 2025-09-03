import { useNavigate } from "react-router-dom";
import AddFeedBackButton from "../components/AddFeedBackButton";
import { useDataContext } from "../context/FeedBacksContext";
import RoadMapCards from "../components/RoadMapCards";
import { useState } from "react";
export default function RoadMapPage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { data } = useDataContext();
  const [showRoad, setShowRoad] = useState<string>("Planned");
  const plannedData = data.productRequests.filter(
    (item) => item.status === "planned"
  );
  const inProgressData = data.productRequests.filter(
    (item) => item.status === "in-progress"
  );
  const liveData = data.productRequests.filter(
    (item) => item.status === "live"
  );
  const categoryArray = ["Planned", "In-Progress", "Live"];
  return (
    <div
      className="pb-[9.8rem]
    md:pt-[5.6rem] md:px-[4rem]"
    >
      <div
        className="flex justify-between bg-[#373f68]
        px-[2.4rem] py-[2.6rem] items-center
        md:py-[2.7rem] md:px-[3.2rem]
        md:rounded-[1rem]"
      >
        <div className="flex flex-col gap-[0.3rem]">
          <div
            className="flex items-center gap-[1.5rem] cursor-pointer"
            onClick={goBack}
          >
            <svg
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 9L0 5L4 1" stroke="#CDD2EE" stroke-width="2" />
            </svg>
            <span
              className="text-[1.3rem] text-white
              font-bold"
            >
              Go Back
            </span>
          </div>
          <h1
            className="text-[1.8rem] text-white font-bold
            tracking-[-0.25px] md:text-[2.4rem] md:tracking-[-0.333px]"
          >
            Roadmap
          </h1>
        </div>
        <AddFeedBackButton />
      </div>

      <div
        className="flex px-[2.4rem] justify-between
        py-[2rem] md:hidden"
      >
        {categoryArray.map((cat) => (
          <div key={cat}>
            <span
              className={`text-[1.3rem] text-[#3a4374] font-bold
              tracking-[-0.181px] cursor-pointer transition-all
              duration-300
              ${showRoad === cat ? "opacity-[1]" : "opacity-[0.4]"}`}
              onClick={() => setShowRoad(cat)}
            >
              {cat}(
              {cat === "Planned"
                ? plannedData.length
                : cat === "In-Progress"
                ? inProgressData.length
                : liveData.length}
              )
            </span>
          </div>
        ))}
      </div>
      <div className="h-px w-full bg-[#8c92b3]/25 md:hidden"></div>
      <div className="px-[2.4rem] my-[2.4rem] md:hidden">
        <h2 className="text-[1.8rem] text-[#3a4374] font-bold tracking-[-0.25px]">
          {showRoad === "Planned"
            ? `Planned (${plannedData.length})`
            : showRoad === "In-Progress"
            ? `In-Progress (${inProgressData.length})`
            : `Live (${liveData.length})`}
        </h2>
        <p className="text-[1.3rem] text-[#647196]">
          {showRoad === "Planned"
            ? "Ideas prioritized for research"
            : showRoad === "In-Progress"
            ? "Currently being developed"
            : "Released features"}
        </p>
      </div>
      <div className="px-[2.4rem] md:hidden">
        {showRoad === "Planned" ? (
          <RoadMapCards
            data={plannedData}
            color={"#f49f85"}
            title={"Planned"}
          />
        ) : showRoad === "In-Progress" ? (
          <RoadMapCards
            data={inProgressData}
            color={"#ad1fea"}
            title={"In-Progress"}
          />
        ) : (
          <RoadMapCards data={liveData} color={"#62bcfa"} title={"Live"} />
        )}
      </div>
      <div className="hidden md:grid grid-cols-3 gap-[1rem]">
        <RoadMapCards data={plannedData} color={"#f49f85"} title={"Planned"} />
        <RoadMapCards
          data={inProgressData}
          color={"#ad1fea"}
          title={"In-Progress"}
        />
        <RoadMapCards data={liveData} color={"#62bcfa"} title={"Live"} />
      </div>
    </div>
  );
}
