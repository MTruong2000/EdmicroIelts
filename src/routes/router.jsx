import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import NotFound from "../pages/notfound";
import CourseList from "../pages/courselist";
import CourseDetail from "../pages/coursedetail";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import AccountInfo from "../pages/accountinfo";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import RequireAuth from "../auth/requireauth";
import EnrolledCourse from "../pages/enrolledcourses";
import LessionList from "../pages/lessonlist";

const jwtToken = Cookies.get("jwtToken");

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
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/account-info",
    element: (
      <RequireAuth>
        <AccountInfo />
      </RequireAuth>
    ),
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
    path: "/enrolled-courses",
    element: (
      <RequireAuth>
        <EnrolledCourse />
      </RequireAuth>
    ),
  },
  {
    path: "/enrolled-courses/lesson",
    element: (
      <RequireAuth>
        <LessionList />
      </RequireAuth>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
