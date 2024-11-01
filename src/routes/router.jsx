import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import NotFound from "../pages/notfound";
import CourseList from "../pages/courselist";
import CourseDetail from "../pages/coursedetail";
import Login from "../pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/courses",
    element: <CourseList />,
  },
  {
    path: "/courses/:id",
    element: <CourseDetail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
