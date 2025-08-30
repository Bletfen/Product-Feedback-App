import { Link } from "react-router-dom";

export default function AddFeedBackButton() {
  return (
    <Link
      to={"/create-feed-back"}
      className="px-[1.7rem] py-[1.05rem] text-[1.3rem]
              font-bold text-[#f2f4fe] bg-[#ad1fea] rounded-[1rem]
              cursor-pointer"
    >
      + Add Feedback
    </Link>
  );
}
