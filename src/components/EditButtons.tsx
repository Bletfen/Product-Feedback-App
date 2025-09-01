export default function EditButtons({ isEdit }: { isEdit: boolean }) {
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
      >
        Cancel
      </button>
      {isEdit ? (
        <button
          className="py-[1.05rem] text-[#f2f4fe] text-[1.3rem] font-bold
      bg-[#d73737] rounded-[1rem] cursor-pointer"
        >
          Delete
        </button>
      ) : null}
    </div>
  );
}
