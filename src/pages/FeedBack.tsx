import { Link, useNavigate, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import { useDataContext } from "../context/FeedBacksContext";
import FeedBackCard from "../components/FeedBackCard";
import { useEffect, useState } from "react";
import CommentsSection from "../components/CommentsSection";
// მოკლედ აქ მოვრჩი, ვაგრძელებთ კომენტარების სექციიდან.
export default function FeedBack() {
  const { data } = useDataContext();
  const { id } = useParams();
  const [comment, setComment] = useState<string>("");
  const maxChars = 250;
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
          {feed?.comments?.map((com, index) => (
            <CommentsSection feed={feed} com={com} index={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-[1rem] p-[2.4rem]">
        <h2
          className="text-[#3a4374] text-[1.8rem] font-bold
          tracking-[-0.25px] mb-[2.4rem]"
        >
          Add Comment
        </h2>

        <textarea
          placeholder="Type your comment here"
          className="w-full p-[1.6rem] bg-[#f7f8fd] resize-none
            rounded-[0.5rem] outline-none mb-[1.6rem]
            text-[1.6rem] text-[#8c92b3]"
          maxLength={250}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="flex items-center justify-between">
          <span>{maxChars - comment.length} Characters left</span>
          <button
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
