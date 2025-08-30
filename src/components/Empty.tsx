import AddFeedBackButton from "./AddFeedBackButton";

export default function Empty() {
  return (
    <div
      className="pt-[3.2rem] pb-[4.7rem]
      px-[2.4rem]"
    >
      <div
        className="flex flex-col justify-center
        items-center
        bg-white rounded-[1rem]
        px-[2.4rem] py-[7.6rem]
        "
      >
        <div className="mb-[3.9rem]">
          <img
            src="/assets/suggestions/illustration-empty.svg"
            alt="empty-svg"
          />
        </div>
        <div
          className="flex flex-col
            gap-[1.4rem]
            mb-[2.4rem]"
        >
          <h1
            className="text-[#3a4374]
            text-[1.8rem] font-bold
            tracking-[-0.25px]
            text-center"
          >
            There is no feedback yet.
          </h1>
          <p className="text-[1.3rem] text-[#647196] text-center">
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
        </div>
        <AddFeedBackButton />
      </div>
    </div>
  );
}
