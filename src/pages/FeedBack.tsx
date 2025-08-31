import { Link, useNavigate, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import { useDataContext } from "../context/FeedBacksContext";
import FeedBackCard from "../components/FeedBackCard";
import { useEffect, useState } from "react";
import CommentsSection from "../components/CommentsSection";
import ReplyCommentsSection from "../components/ReplyCommentsSection";
import AddComment from "../components/AddComment";
export const maxChars: number = 250;
export default function FeedBack() {
  const { data } = useDataContext();
  const { id } = useParams();
  const [comment, setComment] = useState<string>("");
  const [addComment, setAddComment] = useState<boolean>(false);
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const feed = data.productRequests.find((item) => item.id === Number(id));
  const navigate = useNavigate();
  useEffect(() => {
    if (!feed) {
      navigate("/");
    }
  }, [feed, navigate]);
  return (
    <div
      className="flex flex-col gap-[2.4rem] pt-[2.4rem] pb-[8.8rem]
      px-[2.4rem]"
    >
      <div className="flex items-center justify-between">
        <GoBack />
        <Link
          to={"/:id/edit"}
          className="px-[1.6rem] py-[1.05rem]
          text-[1.3rem] font-bold text-[#f2f4fa]
          bg-[#4661e6] rounded-[1rem]"
        >
          Edit Feedback
        </Link>
      </div>
      {feed && <FeedBackCard feedback={feed} />}
      <div className="bg-white rounded-[1rem] p-[2.4rem]">
        <h1
          className="text-[#3a4374] text-[1.8rem] font-bold
          tracking-[-0.25px] mb-[2.4rem]"
        >
          {feed?.comments?.length} Comments
        </h1>
        <div className="flex flex-col gap-[2.4rem]">
          {feed?.comments?.map((com: TComments, index: number) => (
            <div key={com.id}>
              <CommentsSection
                feed={feed}
                com={com}
                index={index}
                setAddComment={setAddComment}
                addComment={addComment}
                replyTo={replyTo}
                setReplyTo={setReplyTo}
              >
                <AddComment
                  setComment={setComment}
                  comment={comment}
                  addComment={addComment}
                  setAddComment={setAddComment}
                  maxChars={maxChars}
                />
              </CommentsSection>

              <div
                className="relative flex flex-col gap-[1.7rem] 
                pl-[2.3rem]"
              >
                <div
                  className="absolute left-0 top-0 
                  h-[60%] w-px bg-[#647196]/10"
                ></div>

                {com.replies?.map((reply, i) => (
                  <ReplyCommentsSection
                    key={i}
                    reply={reply}
                    setAddComment={setAddComment}
                    addComment={addComment}
                    index={i}
                    replyTo={replyTo}
                    setReplyTo={setReplyTo}
                  >
                    <AddComment
                      setComment={setComment}
                      comment={comment}
                      addComment={addComment}
                      setAddComment={setAddComment}
                      maxChars={maxChars}
                    />
                  </ReplyCommentsSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-[1rem] p-[2.4rem]">
        <h1
          className="text-[#3a4374] text-[1.8rem] font-bold
          tracking-[-0.25px] mb-[2.4rem]"
        >
          Add Comment
        </h1>

        <form id="addCommentForm">
          <AddComment
            setComment={setComment}
            comment={comment}
            addComment={addComment}
            setAddComment={setAddComment}
            maxChars={maxChars}
          />
        </form>
        <div className="flex items-center justify-between">
          <span>{maxChars - comment.length} Characters left</span>
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
