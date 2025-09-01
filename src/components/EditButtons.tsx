import { useNavigate } from "react-router-dom";

export default function EditButtons({
  isEdit,
  handleDelete,
}: {
  isEdit: boolean;
  handleDelete: () => void;
}) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div
      className="flex flex-col gap-[1.6rem]
        w-full mt-[1.6rem]"
    >
      <button
        type="submit"
        id="feedbackForm"
        className="py-[1.05rem] text-[#f2f4fe] text-[1.3rem] font-bold
      bg-[#ad1fea] rounded-[1rem] cursor-pointer"
      >
        {isEdit ? "Save Changes" : "Add Feedback"}
      </button>
      <button
        className="py-[1.05rem] text-[#f2f4fe] text-[1.3rem] font-bold
      bg-[#3a4374] rounded-[1rem] cursor-pointer"
        onClick={goBack}
      >
        Cancel
      </button>
      {isEdit ? (
        <button
          className="py-[1.05rem] text-[#f2f4fe] text-[1.3rem] font-bold
      bg-[#d73737] rounded-[1rem] cursor-pointer"
          onClick={handleDelete}
        >
          Delete
        </button>
      ) : null}
    </div>
  );
}
