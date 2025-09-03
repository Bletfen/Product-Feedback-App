import AddFeedBackButton from "./AddFeedBackButton";

export default function Empty() {
  return (
    <div
      className="pt-[3.2rem] pb-[4.7rem]
      px-[2.4rem] md:px-[unset] md:pt-[2.4rem]"
    >
      <div
        className="flex flex-col justify-center
        items-center
        bg-white rounded-[1rem]
        px-[2.4rem] py-[7.6rem]
        "
      >
        <div className="mb-[3.9rem] md:mb-[5.3rem]">
          <img
            src="/assets/suggestions/illustration-empty.svg"
            alt="empty-svg"
            className="md:w-[12.9rem] md:h-[13.6rem]"
          />
        </div>
        <div
          className="flex flex-col
            gap-[1.4rem] md:ga-[1.6]
            mb-[2.4rem] max-w-[41rem]
            md:mb-[4.8rem]"
        >
          <h1
            className="text-[#3a4374]
            text-[1.8rem] font-bold
            tracking-[-0.25px]
            text-center md:text-[2.4rem] md:tracking-[-0.333px]"
          >
            There is no feedback yet.
          </h1>
          <p
            className="text-[1.3rem] text-[#647196] text-center
            md:text-[1.6rem]"
          >
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
        </div>
        <AddFeedBackButton />
      </div>
    </div>
  );
}
