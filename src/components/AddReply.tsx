import { useState } from "react";
import { useDataContext } from "../context/FeedBacksContext";
export default function AddReply({
  feedId,
  commentId,
  replyingToUserName,
  setActiveReplyId,
}: {
  feedId: number;
  commentId: number;
  replyingToUserName: string;
  setActiveReplyId: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const { data, setData } = useDataContext();
  const { currentUser } = data;
  const [reply, setReply] = useState<string>("");

  const handleAddReply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!reply.trim()) return;
    const newReply = {
      id: Date.now(),
      content: reply,
      replyingTo: replyingToUserName,
      user: currentUser,
    };

    setData((prev) => ({
      ...prev,
      productRequests: prev.productRequests.map((req) =>
        req.id === feedId
          ? {
              ...req,
              comments: req.comments.map((com: TComments) =>
                com.id === commentId
                  ? { ...com, replies: [...(com.replies ?? []), newReply] }
                  : com
              ),
            }
          : req
      ),
    }));

    setReply("");
    setActiveReplyId(null);
  };
  return (
    <form
      id="replyForm"
      className="flex items-start gap-[1.6rem]"
      onSubmit={(e) => handleAddReply(e)}
    >
      <textarea
        placeholder="Type your comment here"
        className="w-full p-[1.6rem] bg-[#f7f8fd] resize-none
            rounded-[0.5rem] outline-none mb-[1.6rem]
            text-[1.6rem] text-[#8c92b3]"
        value={reply}
        maxLength={250}
        onChange={(e) => setReply(e.target.value)}
      />
      <button
        form="replyForm"
        type="submit"
        className="shrink-0 px-[2.4rem] py-[1.25rem]
        bg-[#ad1fea] rounded-[1rem] text-[#f2f4fe] text-[1.4rem]
        font-bold cursor-pointer"
      >
        Post Reply
      </button>
    </form>
  );
}
