import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import Header from "./components/header/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./index.css";
import Footer from "./components/footer/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);
