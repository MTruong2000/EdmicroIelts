import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import NotFound from "../pages/notfound";
import SignInUp from "../pages/siginup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/signin",
    element: <SignInUp />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;
