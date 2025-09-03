import type { ReactNode } from "react";

export default function CommentsSection({
  feed,
  com,
  index,
  children,
  activeReplyId,
  setActiveReplyId,
}: {
  feed: TProductRequests | undefined;
  com: TComments;
  index: number;
  children: ReactNode;
  activeReplyId: number | null;
  setActiveReplyId: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <div>
      <div
        className="flex flex-col md:flex-row md:items-start
        md:gap-[3.2rem]"
      >
        <div
          className="flex items-center justify-between
                mb-[1.6rem]"
        >
          <div
            className="flex items-center gap-[1.6rem]
            md:shrink-0"
          >
            <img
              src={com.user.image}
              alt="user-img"
              className="w-[4rem] h-[4rem]
                  rounded-full"
            />
            <div className="text-[1.3rem] md:hidden">
              <h2 className="text-[#3a4374] font-bold tracking-[-0.181px] md:tracking-[-0.194px]">
                {com.user.name}
              </h2>
              <p className="text-[#647196]">{com.user.username}</p>
            </div>
          </div>
          <span
            className="text-[1.3rem] font-semibold text-[#4661e6]
            cursor-pointer md:hidden"
            onClick={() => {
              setActiveReplyId(com.id);
            }}
          >
            Reply
          </span>
        </div>
        <div className="mb-[2.4rem] md:w-full md:mb-[unset]">
          <div className="hidden md:flex items-center justify-between">
            <div
              className="md:flex flex-col text-[1.3rem] md:text-[1.4rem]
              "
            >
              <h2 className="text-[#3a4374] font-bold tracking-[-0.181px] md:tracking-[-0.194px]">
                {com.user.name}
              </h2>
              <p className="text-[#647196]">{com.user.username}</p>
            </div>
            <span
              className="text-[1.3rem] font-semibold text-[#4661e6]
            cursor-pointer"
              onClick={() => {
                setActiveReplyId(com.id);
              }}
            >
              Reply
            </span>
          </div>
          <p
            className="text-[1.3rem] text-[#647196]
            md:text-[1.5rem] md:mt-[1.7rem] md:mb-[3.2rem]
            break-words whitespace-pre-wrap"
          >
            {com.content}
          </p>
          <div className="hidden md:flex">
            {activeReplyId === com.id ? children : null}
          </div>
          {feed?.comments &&
          feed.comments?.length > index + 1 &&
          (!com.replies || com.replies?.length === 0) ? (
            <div
              className="w-full h-px bg-[#8c92b3]/25 hidden md:block
              md:mb-
            "
            ></div>
          ) : null}
        </div>
        <div className="md:hidden">
          {activeReplyId === com.id ? children : null}
        </div>
        {feed?.comments &&
        feed.comments?.length > index + 1 &&
        (!com.replies || com.replies?.length === 0) ? (
          <div className="w-full h-px bg-[#8c92b3]/25 md:hidden"></div>
        ) : null}
      </div>
    </div>
  );
}
