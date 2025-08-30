import { useNavigate } from "react-router-dom";

export default function GoBack() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex items-center gap-[1.5rem]" onClick={goBack}>
      <svg
        width="5"
        height="10"
        viewBox="0 0 5 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 9L0 5L4 1" stroke="#4661E6" stroke-width="2" />
      </svg>
      <span
        className="text-[1.3rem] text-[#647196]
        font-bold"
      >
        Go Back
      </span>
    </div>
  );
}
