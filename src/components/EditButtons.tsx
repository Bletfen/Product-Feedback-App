export default function EditButtons() {
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
        Save Changes
      </button>
      <button
        className="py-[1.05rem] text-[#f2f4fe] text-[1.3rem] font-bold
      bg-[#3a4374] rounded-[1rem] cursor-pointer"
      >
        Cancel
      </button>
      <button
        className="py-[1.05rem] text-[#f2f4fe] text-[1.3rem] font-bold
      bg-[#d73737] rounded-[1rem] cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
}
