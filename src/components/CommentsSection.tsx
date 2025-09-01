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
      <div className="flex flex-col">
        <div
          className="flex items-center justify-between
                mb-[1.6rem]"
        >
          <div className="flex items-center gap-[1.6rem]">
            <img
              src={com.user.image}
              alt="user-img"
              className="w-[4rem] h-[4rem]
                  rounded-full"
            />
            <div className="text-[1.3rem]">
              <h2 className="text-[#3a4374] font-bold tracking-[-0.181px]">
                {com.user.name}
              </h2>
              <p className="text-[#647196]">{com.user.username}</p>
            </div>
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
        <div className="mb-[2.4rem]">
          <p className="text-[1.3rem] text-[#647196]">{com.content}</p>
        </div>
        {activeReplyId === com.id ? children : null}
        {feed?.comments &&
        feed.comments?.length > index + 1 &&
        (!com.replies || com.replies?.length === 0) ? (
          <div className="w-full h-px bg-[#8c92b3]/25"></div>
        ) : null}
      </div>
    </div>
  );
}
