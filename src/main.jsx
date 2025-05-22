import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Shared Files/router";
import Aos from "aos";
import "aos/dist/aos.css";
import AppWrapper from "./Components/CustomCursor";
Aos.init({
  duration: 1200, // animation duration in ms
  once: true, // whether animation should happen only once - while scrolling down
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  </StrictMode>
);
