import { Link } from "react-router-dom";

export default function Roadmap() {
  return (
    <div
      className="px-[2.4rem] pt-[1.9rem] pb-[2.4rem] bg-white 
    rounded-[1rem]
    "
    >
      <div className="flex items-center gap-[6.7rem]">
        <h1
          className="text-[1.8rem] font-bold tracking-[-0.25px]
            text-[#3a4374]"
        >
          Roadmap
        </h1>
        <Link
          to={"roadmap"}
          className="underline text-[1.3rem] font-semibold
            text-[#4661e6]"
        >
          View
        </Link>
      </div>
      <div>
        <div>
          <div className="w-[0.8rem] h-[0.8rem] rounded bg-[#f49f85]"></div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
