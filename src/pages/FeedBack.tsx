import { Link, useNavigate, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import { useDataContext } from "../context/FeedBacksContext";
import FeedBackCard from "../components/FeedBackCard";
import { useEffect } from "react";

export default function FeedBack() {
  const { data } = useDataContext();
  const { id } = useParams();
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
    </div>
  );
}
