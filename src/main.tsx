import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Suggestion from "./pages/Suggestion";
import ManipulateSuggestion from "./pages/ManipulateSuggestion";
import RoadMapPage from "./pages/RoadMapPage";
import SuggestionsContext from "./context/SuggestionsContext";
import Suggestions from "./pages/Suggestions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Suggestions />,
      },
    ],
  },
  {
    path: "/suggestions/:id",
    element: <Suggestion />,
  },
  {
    path: "/:id/edit",
    element: <ManipulateSuggestion />,
  },
  {
    path: "/roadmap",
    element: <RoadMapPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SuggestionsContext>
      <RouterProvider router={router} />
    </SuggestionsContext>
  </StrictMode>
);
