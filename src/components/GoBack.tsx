import { useNavigate } from "react-router-dom";

export default function GoBack() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div
      className="flex items-center gap-[1.5rem] cursor-pointer"
      onClick={goBack}
    >
      <svg
        width="5"
        height="10"
        viewBox="0 0 5 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 9L0 5L4 1" stroke="#4661E6" strokeWidth="2" />
      </svg>
      <span
        className="text-[1.3rem] text-[#647196]
        font-bold md:text-[1.4rem]"
      >
        Go Back
      </span>
    </div>
  );
}
