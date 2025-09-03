import { Link, useNavigate, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import { useDataContext } from "../context/FeedBacksContext";
import FeedBackCard from "../components/FeedBackCard";
import { useEffect, useState } from "react";
import CommentsSection from "../components/CommentsSection";
import ReplyCommentsSection from "../components/ReplyCommentsSection";
import AddReply from "../components/AddReply";
export const maxChars: number = 250;

export default function FeedBack() {
  const { data, setData } = useDataContext();
  const { id } = useParams();
  const { currentUser } = data;
  const [comment, setComment] = useState<string>("");
  const [activeReplyId, setActiveReplyId] = useState<number | null>(null);
  const feed = data.productRequests.find((item) => item.id === Number(id));
  const navigate = useNavigate();

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comment.trim()) return;
    const newComment = {
      id: Date.now(),
      content: comment,
      user: currentUser,
      replies: [],
    };

    setData((prev) => ({
      ...prev,
      productRequests: prev.productRequests.map((req) =>
        req.id === feed.id
          ? { ...req, comments: [...req.comments, newComment] }
          : req
      ),
    }));
    setComment("");
  };

  useEffect(() => {
    if (!feed) {
      navigate("/");
    }
  }, [feed, navigate]);

  return (
    <div
      className="flex flex-col gap-[2.4rem] pt-[2.4rem] pb-[8.8rem]
        px-[2.4rem] md:px-[4rem] md:pt-[6.8rem]"
    >
      <div className="flex items-center justify-between">
        <GoBack />
        <Link
          to={`/edit/${feed.id}`}
          className="px-[1.6rem] py-[1.05rem]
          text-[1.3rem] font-bold text-[#f2f4fa]
          bg-[#4661e6] rounded-[1rem] md:text-[1.4rem]
          md:py-[1.25rem] md:px-[2.4rem]"
        >
          Edit Feedback
        </Link>
      </div>
      {feed && <FeedBackCard feedback={feed} />}
      <div
        className="bg-white rounded-[1rem] p-[2.4rem]
        md:px-[3.2rem] md:pt-[2.4rem] md:pb-[3.3rem]"
      >
        <h1
          className="text-[#3a4374] text-[1.8rem] font-bold
          tracking-[-0.25px] mb-[2.4rem] md:mb-[2.8rem]"
        >
          {feed?.comments?.length} Comments
        </h1>
        <div className="flex flex-col gap-[2.4rem] md:gap-[3.2rem]">
          {feed?.comments?.map((com: TComments, index: number) => (
            <div key={com.id}>
              <CommentsSection
                feed={feed}
                com={com}
                index={index}
                activeReplyId={activeReplyId}
                setActiveReplyId={setActiveReplyId}
              >
                <AddReply
                  feedId={feed.id}
                  commentId={com.id}
                  replyingToUserName={com.user.name}
                  setActiveReplyId={setActiveReplyId}
                />
              </CommentsSection>

              <div
                className="relative flex flex-col gap-[1.7rem] 
                md:ml-[2rem] pl-[2.3rem] md:pl-[2.4rem]"
              >
                {com.replies?.length > 0 && (
                  <div
                    className="absolute left-0 top-0 
                  bottom-0 w-px bg-[#647196]/10 md:-top-40
                  "
                  ></div>
                )}

                {com.replies?.map((reply, i) => (
                  <ReplyCommentsSection
                    key={i}
                    reply={reply}
                    setActiveReplyId={setActiveReplyId}
                    activeReplyId={activeReplyId}
                  >
                    <AddReply
                      feedId={feed.id}
                      commentId={com.id}
                      replyingToUserName={reply.user.name}
                      setActiveReplyId={setActiveReplyId}
                    />
                  </ReplyCommentsSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex flex-col bg-white rounded-[1rem] p-[2.4rem]
        md:pt-[2.4rem] md:px-[3.2rem] md:pb-[3.2rem]"
      >
        <h1
          className="text-[#3a4374] text-[1.8rem] font-bold
          tracking-[-0.25px] mb-[2.4rem]"
        >
          Add Comment
        </h1>

        <form id="addCommentForm" onSubmit={(e) => handleAddComment(e)}>
          <textarea
            placeholder="Type your comment here"
            className="w-full p-[1.6rem] bg-[#f7f8fd] resize-none
            rounded-[0.5rem] outline-none mb-[1.6rem]
            text-[1.3rem] md:text-[1.5rem] text-[#8c92b3]"
            maxLength={250}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
              setActiveReplyId(null);
            }}
          />
        </form>
        <div className="flex items-center justify-between">
          <span className="text-[1.3rem] text-[#647196]">
            {maxChars - comment.length} Characters left
          </span>
          <button
            form="addCommentForm"
            type="submit"
            className="px-[1.6rem] py-[1.05rem]
              bg-[#ad1fea] rounded-[1rem] text-[#f2f4fe]
              text-[1.3rem] font-bold"
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}
