import { Link } from "react-router-dom";
import { useUpVoteHandler } from "../context/FeedBacksContext";
export default function FeedBackCard({
  feedback,
}: {
  feedback: TProductRequests;
}) {
  const { upVotedIds, upVoteHandler } = useUpVoteHandler();

  return (
    <Link
      to={`/suggestion/${feedback.id}`}
      className="flex flex-col p-[2.4rem] bg-white
            gap-[1.6rem] rounded-[1rem] md:flex-row
            md:justify-between"
    >
      <div className="flex items-start gap-[4rem]">
        <div
          className={`hidden md:flex flex-col items-center gap-[1rem]
                w-[4rem] pt-[1.4rem] pb-[0.8rem] rounded-[1rem]
                cursor-pointer hover:bg-[#cfd7ff]
                transition-all duration-300
                ${
                  upVotedIds.includes(feedback.id)
                    ? "bg-[#4661e6]"
                    : "bg-[#f2f4f3]"
                }`}
          onClick={(e) => {
            e.preventDefault();
            upVoteHandler(feedback.id);
          }}
        >
          <svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              upVotedIds.includes(feedback.id)
                ? "stroke-white"
                : "stroke-[#4661E6]"
            }`}
          >
            <path d="M0 6L4 2L8 6" strokeWidth="2" />
          </svg>
          <span
            className={`text-[1.3rem] font-bold
                  tracking-[-0.181px]
                  ${
                    upVotedIds.includes(feedback.id)
                      ? "text-white"
                      : "text-[#3a4374]"
                  }`}
          >
            {feedback.upvotes}
          </span>
        </div>
        <div
          className="flex flex-col gap-[0.8rem]
                text-[1.3rem]"
        >
          <h1
            className="text-[#3a4374] font-bold
                  tracking-[-0.181px] md:text-[1.8rem] md:tracking-[-0.25px]"
          >
            {feedback.title}
          </h1>
          <p
            className="text-[#647196] break-words whitespace-pre-wrap
            md:text-[1.6rem]"
          >
            {feedback.description}
          </p>
          <div>
            <span
              className="
                      px-[1.6rem] py-[0.6rem]
                      inline-block capitalize text-[1.3rem]
                      font-semibold text-[#4661e6]
                      bg-[#f2f4ff] rounded-[1rem]"
            >
              {feedback.category}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div
          className={`flex items-center gap-[1rem]
                pl-[1.6rem] pr-[1.3rem] py-[0.7rem] rounded-[1rem]
                cursor-pointer hover:bg-[#cfd7ff]
                transition-all duration-300 md:hidden
                ${
                  upVotedIds.includes(feedback.id)
                    ? "bg-[#4661e6]"
                    : "bg-[#f2f4f3]"
                }`}
          onClick={(e) => {
            e.preventDefault();
            upVoteHandler(feedback.id);
          }}
        >
          <svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              upVotedIds.includes(feedback.id)
                ? "stroke-white"
                : "stroke-[#4661E6]"
            }`}
          >
            <path d="M0 6L4 2L8 6" strokeWidth="2" />
          </svg>
          <span
            className={`text-[1.3rem] font-bold
                  tracking-[-0.181px]
                  ${
                    upVotedIds.includes(feedback.id)
                      ? "text-white"
                      : "text-[#3a4374]"
                  }`}
          >
            {feedback.upvotes}
          </span>
        </div>
        <div className="flex items-center gap-[0.2rem] md:gap-[0.8rem]">
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z"
              fill="#CDD2EE"
            />
          </svg>
          <span
            className={`text-[1.3rem] md:text-[1.6rem] font-bold
                  tracking-[-0.181px] md:tracking-[-0.222px] text-[#3a4374]
                  ${feedback.comments ? "opacity-[1]" : "opacity-[0.5]"}`}
          >
            {feedback.comments?.length ? feedback.comments.length : "0"}
          </span>
        </div>
      </div>
    </Link>
  );
}
