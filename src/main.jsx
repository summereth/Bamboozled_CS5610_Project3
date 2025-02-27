import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import CreateQuizScreen from "./screens/CreateQuizScreen.jsx";
import QuizScreen from "./screens/QuizScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Add index={true} to avoid showing multiple screens */}
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/quiz/:id" element={<QuizScreen />} />
      <Route path="/create" element={<CreateQuizScreen />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
