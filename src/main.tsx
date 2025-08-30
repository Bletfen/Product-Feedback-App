import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import FeedBack from "./pages/FeedBack";
import ManipulateFeedBack from "./pages/ManipulateFeedBack";
import RoadMapPage from "./pages/RoadMapPage";
import FeedBackContext from "./context/FeedBacksContext";
import FeedBacks from "./pages/FeedBacks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <FeedBacks />,
      },
    ],
  },
  {
    path: "/suggestion/:id",
    element: <FeedBack />,
  },
  {
    path: "/create-feed-back",
    element: <ManipulateFeedBack />,
  },
  {
    path: "/:id/edit",
    element: <ManipulateFeedBack />,
  },
  {
    path: "/roadmap",
    element: <RoadMapPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FeedBackContext>
      <RouterProvider router={router} />
    </FeedBackContext>
  </StrictMode>
);
