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
      className={`flex flex-col gap-[1.6rem]
        w-full mt-[1.6rem] md:flex-row md:items-center
        ${isEdit ? "md:justify-between" : "md:justify-end"}`}
    >
      <div
        className="flex flex-col gap-[1.6rem]
        md:order-2 md:flex-row"
      >
        <button
          type="submit"
          id="feedbackForm"
          className="py-[1.05rem] text-[#f2f4fe] text-[1.3rem] font-bold
          bg-[#ad1fea] rounded-[1rem] cursor-pointer
          md:py-[1.25rem] md:px-[2.65rem] order-1
          md:text-[1.4rem]
          transition-all duration-300 hover:bg-[#c76af6]"
        >
          {isEdit ? "Save Changes" : "Add Feedback"}
        </button>
        <button
          className="py-[1.05rem] text-[#f2f4fe] text-[1.3rem] font-bold
      bg-[#3a4374] rounded-[1rem] cursor-pointer
      md:py-[1.25rem] md:px-[2.4rem] md:text-[1.4rem]
      transition-all duration-300 hover:bg-[#656ea3]"
          onClick={goBack}
        >
          Cancel
        </button>
      </div>
      {isEdit ? (
        <button
          className="py-[1.05rem] text-[#f2f4fe] text-[1.3rem] font-bold
      bg-[#d73737] rounded-[1rem] cursor-pointer
      md:order-1 md:py-[1.25rem] md:px-[2.65rem] md:text-[1.4rem]
      transition-all duration-300 hover:bg-[#e98888]"
          onClick={handleDelete}
        >
          Delete
        </button>
      ) : null}
    </div>
  );
}
