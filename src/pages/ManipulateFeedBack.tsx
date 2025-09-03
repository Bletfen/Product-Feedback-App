import { useLocation, useNavigate, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import Input from "../components/Input";
import { useDataContext } from "../context/FeedBacksContext";
import DropDownCategory from "../components/DropDownCategory";
import { useForm } from "react-hook-form";
import EditButtons from "../components/EditButtons";
import { useState } from "react";
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
  const feedBack = feedBackFunc();
  const [category, setCategory] = useState<string>(
    feedBack?.category ?? "Feature"
  );
  const [status, setStatus] = useState<string>(feedBack?.status ?? "Planned");
  const { register, handleSubmit } = useForm<{
    title: string;
    description: string;
  }>();

  const onSubmit = (data: { title: string; description: string }) => {
    if (isEdit) {
      setData((prev) => ({
        ...prev,
        productRequests: prev.productRequests.map((req) =>
          req.id === Number(id)
            ? {
                ...req,
                title: data.title,
                description: data.description,
                category: category,
                status: status,
              }
            : req
        ),
      }));
    } else {
      const newRequest = {
        id: Date.now(),
        title: data.title,
        description: data.description,
        category: category,
        upvotes: 0,
        status: "planned",
        comments: [],
      };

      setData((prev) => ({
        ...prev,
        productRequests: [...prev.productRequests, newRequest],
      }));
    }
    navigate(-1);
  };

  const handleDelete = () => {
    setData((prev) => ({
      ...prev,
      productRequests: prev.productRequests.filter(
        (item) => item.id !== Number(id)
      ),
    }));
    navigate("/");
  };

  return (
    <div
      className="pt-[3.4rem] px-[2.4rem] flex flex-col
      gap-[3.5rem] max-w-[60rem] mx-auto md:pt-[5.6rem]
      md:pb-[22.3rem] md:gap-[6.8rem]"
    >
      <GoBack />
      <div
        className="pt-[4.4rem] px-[2.4rem] pb-[2.4rem]
        bg-white relative max-w-[54rem] rounded-[1rem]
        md:pt-[5.2rem]
        md:pb-[4rem] md:px-[4.2rem]"
      >
        {isEdit ? (
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-11 w-[4rem] h-[4rem] md:w-[5.6rem] h-[5.6rem]"
          >
            <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_801)" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M29.0825 19.4809L32.8315 16L39.345 22.2719L35.7969 25.952L29.0825 19.4809ZM16 39.5949C16.9207 35.6533 19.4867 25.5743 19.4867 25.5743L27.6895 20.7535L34.5209 27.1499L29.3017 34.97L16.313 40L22.4703 34.2104C23.513 34.5998 24.9857 34.2478 25.7818 33.3736C26.8328 32.2255 26.7539 30.4423 25.605 29.3914C24.456 28.3404 22.5848 28.3404 21.5339 29.4885C20.751 30.3444 20.4812 31.8544 20.9287 32.8498L16 39.5949Z"
              fill="white"
            />
            <defs>
              <radialGradient
                id="paint0_radial_0_801"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(58.184 -5.81647) rotate(129.411) scale(93.4169)"
              >
                <stop stop-color="#E84D70" />
                <stop offset="0.530886" stop-color="#A337F6" />
                <stop offset="1" stop-color="#28A7ED" />
              </radialGradient>
            </defs>
          </svg>
        ) : (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-11 w-[4rem] h-[4rem] md:w-[5.6rem] h-[5.6rem]"
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
                <stop stop-color="#E84D70" />
                <stop offset="0.530886" stop-color="#A337F6" />
                <stop offset="1" stop-color="#28A7ED" />
              </radialGradient>
            </defs>
          </svg>
        )}
        <h1
          className="text-[1.8rem] font-bold tracking-[-0.25px]
          text-[#3a4374] mb-[2.4rem] md:text-[2.4rem] md:tracking-[-0.333px]"
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
          <DropDownCategory
            type={"category"}
            value={category}
            onChange={setCategory}
          />
          {isEdit && (
            <DropDownCategory
              type={"status"}
              value={status}
              onChange={setStatus}
            />
          )}
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
          <EditButtons isEdit={isEdit} handleDelete={handleDelete} />
        </form>
      </div>
    </div>
  );
}
