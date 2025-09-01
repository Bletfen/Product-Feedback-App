import { useLocation, useNavigate, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import Input from "../components/Input";
import { useDataContext } from "../context/FeedBacksContext";
import DropDownCategory from "../components/DropDownCategory";
import { useForm } from "react-hook-form";
import EditButtons from "../components/EditButtons";
export default function ManipulateFeedBack() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = location.pathname.includes("/edit");
  const { data, setData } = useDataContext();
  const feedBackFunc = () => {
    if (isEdit) {
      return data.productRequests.find((item) => item.id === Number(id));
    } else {
      return null;
    }
  };
  const { register, handleSubmit } = useForm<{
    title: string;
    description: string;
  }>();

  const onSubmit = (data: { title: string; description: string }) => {
    setData((prev) => ({
      ...prev,
      productRequests: prev.productRequests.map((req) =>
        req.id === Number(id)
          ? {
              ...req,
              title: data.title,
              description: data.description,
            }
          : req
      ),
    }));
    navigate(-1);
  };

  return (
    <div
      className="pt-[3.4rem] px-[2.4rem] flex flex-col
      gap-[3.5rem]"
    >
      <GoBack />
      <div
        className="pt-[4.4rem] px-[2.4rem] pb-[2.4rem]
        bg-white relative"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-8"
        >
          <circle cx="20" cy="20" r="20" fill="url(#paint0_radial_0_173)" />
          <path
            d="M21.6732 25.7142V21.5469H25.7353V18.474H21.6732V14.2856H18.3898V18.474H14.2856V21.5469H18.3898V25.7142H21.6732Z"
            fill="white"
          />
          <defs>
            <radialGradient
              id="paint0_radial_0_173"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(41.56 -4.15462) rotate(129.411) scale(66.7263)"
            >
              <stop stopColor="#E84D70" />
              <stop offset="0.530886" stopColor="#A337F6" />
              <stop offset="1" stopColor="#28A7ED" />
            </radialGradient>
          </defs>
        </svg>
        <h1
          className="text-[1.8rem] font-bold tracking-[-0.25px]
          text-[#3a4374] mb-[2.4rem]"
        >
          Create New Feedback
        </h1>
        <form
          id="feedbackForm"
          className="flex flex-col gap-[2.4rem]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type={"input"}
            title={"Feedback Title"}
            label={"Add a short, descriptive headline"}
            feedBackFunc={feedBackFunc}
            isEdit={isEdit}
            register={register("title", { required: true })}
          />
          <DropDownCategory type={"category"} />
          {isEdit && <DropDownCategory type={"status"} />}
          <Input
            type={"textarea"}
            title={"Feedback Detail"}
            label={
              "Include any specific comments on what should be improved, added, etc."
            }
            feedBackFunc={feedBackFunc}
            isEdit={isEdit}
            register={register("description", { required: true })}
          />
          <EditButtons />
        </form>
      </div>
    </div>
  );
}
