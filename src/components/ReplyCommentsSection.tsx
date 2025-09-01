import type { ReactNode } from "react";

export default function ReplyCommentsSection({
  reply,
  children,
  setActiveReplyId,
  activeReplyId,
}: {
  reply: TReplies;
  children: ReactNode;
  setActiveReplyId: React.Dispatch<React.SetStateAction<number | null>>;
  activeReplyId: number | null;
}) {
  return (
    <div className="flex flex-col gap-[1.6rem]">
      <div className="flex items-center gap-[1.6rem]">
        <img
          src={reply.user.image}
          alt="user-img"
          className="w-[4rem] h-[4rem]
                  rounded-full"
        />
        <div
          className="flex justify-between
            items-center w-full"
        >
          <div className="text-[1.3rem]">
            <h2 className="text-[#3a4374] font-bold tracking-[-0.181px]">
              {reply.user.name}
            </h2>
            <p className="text-[#647196]">{reply.user.username}</p>
          </div>
          <div>
            <span
              className="text-[1.3rem] font-semibold text-[#4661e6]
                cursor-pointer"
              onClick={() => {
                setActiveReplyId(reply.id);
              }}
            >
              Reply
            </span>
          </div>
        </div>
      </div>
      <div className="mb-[2.4rem]">
        <p className="text-[1.3rem] text-[#647196]">
          <span className="text-[#ad1fea] font-bold">@{reply.replyingTo} </span>
          {reply.content}
        </p>
      </div>
      {activeReplyId === reply.id ? children : null}
    </div>
  );
}
