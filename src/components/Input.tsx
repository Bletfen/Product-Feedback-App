export default function Input({
  title,
  label,
  feedBackFunc,
  isEdit,
}: {
  title: string;
  label: string;
  feedBackFunc: () => any;
  isEdit: boolean;
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
      <input
        type="text"
        id="headline"
        value={isEdit ? feedback.title : ""}
        className="py-[1.5rem] px-[1.6rem] text-[1.3rem]
                text-[#3a4374] outline-none"
      />
    </div>
  );
}
