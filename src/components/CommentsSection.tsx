export default function CommentsSection({
  feed,
  com,
  index,
}: {
  feed: IProductRequests | undefined;
  com: IComments;
  index: number;
}) {
  return (
    <div>
      <div className="flex flex-col">
        <div
          className="flex items-center justify-between
                mb-[1.6rem]"
        >
          <div className="flex items-center gap-[1.6rem]">
            <img
              src={com.user.image}
              alt="user-img"
              className="w-[4rem] h-[4rem]
                  rounded-full"
            />
            <div>
              <h2>{com.user.name}</h2>
              <p>{com.user.username}</p>
            </div>
          </div>
          <span>Reply</span>
        </div>
        <div className="mb-[2.4rem]">
          <p>{com.content}</p>
        </div>
        {feed?.comments && feed.comments?.length > index + 1 ? (
          <div className="w-full h-px bg-[#8c92b3]/25"></div>
        ) : null}
      </div>
    </div>
  );
}
