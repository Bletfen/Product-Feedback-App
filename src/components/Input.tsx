export default function Input({
  type,
  title,
  label,
  feedBackFunc,
  isEdit,
  register,
}: {
  type: "input" | "textarea";
  title: string;
  label: string;
  feedBackFunc: () => any;
  isEdit: boolean;
  register: any;
}) {
  const feedback = feedBackFunc();
  return (
    <div className="flex flex-col gap-[1.6rem]">
      <div className="flex flex-col text-[1.3rem]">
        <span className="text-[#3a4374] font-bold tracking-[-0.181px]">
          {title}
        </span>
        <label htmlFor="headline" className="text-[#647196]">
          {label}
        </label>
      </div>
      {type === "input" ? (
        <input
          {...register}
          type="text"
          id="headline"
          defaultValue={isEdit ? feedback.title : ""}
          className="py-[1.5rem] px-[1.6rem] text-[1.3rem]
                text-[#3a4374] outline-none bg-[#f7f8fd]
                rounded-[0.5rem]"
        />
      ) : (
        <textarea
          {...register}
          className="w-full py-[1.6rem] pl-[1.6rem] pr-[2.4rem] 
          bg-[#f7f8fd] resize-none rounded-[0.5rem] outline-none 
          mb-[1.6rem] text-[1.3rem] text-[#3a4374]"
        ></textarea>
      )}
    </div>
  );
}
