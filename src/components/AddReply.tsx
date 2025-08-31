export default function AddReply({}: {}) {
  return (
    <form id="replyForm" className="flex items-start gap-[1.6rem]">
      <textarea
        placeholder="Type your comment here"
        className="w-full p-[1.6rem] bg-[#f7f8fd] resize-none
            rounded-[0.5rem] outline-none mb-[1.6rem]
            text-[1.6rem] text-[#8c92b3]"
        maxLength={250}
      />
      <button
        form="replyForm"
        type="submit"
        className="shrink-0 px-[2.4rem] py-[1.25rem]
      bg-[#ad1fea] rounded-[1rem] text-[#f2f4fe] text-[1.4rem]
      font-bold"
      >
        Post Reply
      </button>
    </form>
  );
}
