import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Blog from "../../pages/Blog/Blog";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import CoursesContainer from "../../pages/Courses/CoursesContainer/CoursesContainer";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import UserDetails from "../../pages/UserDetails/UserDetails";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "courses",
        element: <Courses></Courses>,
        children: [
          {
            path: "",
            element: <CoursesContainer></CoursesContainer>,
            loader:()=>fetch('http://localhost:5000/courses'),
          },
          {
            path: 'courses/:id',
            element: <CourseDetails></CourseDetails>,
            loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`),
          }
        ],
      },
      {
        path: "userProfile",
        element: (
          <PrivateRoutes>
            <UserDetails></UserDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
