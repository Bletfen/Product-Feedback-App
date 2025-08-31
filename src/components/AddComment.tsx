export default function AddComment({
  setComment,
  comment,
  addComment,
  setAddComment,
  maxChars,
}: {
  setComment: React.Dispatch<React.SetStateAction<string>>;
  comment: string;
  addComment: boolean;
  setAddComment: React.Dispatch<React.SetStateAction<boolean>>;
  maxChars: number;
}) {
  return (
    <textarea
      placeholder="Type your comment here"
      className="w-full p-[1.6rem] bg-[#f7f8fd] resize-none
            rounded-[0.5rem] outline-none mb-[1.6rem]
            text-[1.6rem] text-[#8c92b3]"
      maxLength={250}
      onChange={(e) => setComment(e.target.value)}
    />
  );
}
