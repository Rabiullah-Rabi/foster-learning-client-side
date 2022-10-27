import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Blog from "../../pages/Blog/Blog";
import Checkout from "../../pages/Checkout/Checkout";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import CourseCat from "../../pages/Courses/courseCat/CourseCat";
import Courses from "../../pages/Courses/Courses";
import CoursesContainer from "../../pages/Courses/CoursesContainer/CoursesContainer";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FAQ from "../../pages/FAQ/FAQ";
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
        path: "allcourses",
        element: <Courses></Courses>,
        loader: () => fetch("https://foster-learning-rabiullah-rabi.vercel.app/courses"),
        children: [
          {
            path: "courses",
            element: <CoursesContainer></CoursesContainer>,
            loader: () => fetch("https://foster-learning-rabiullah-rabi.vercel.app/courses"),
          },
          {
            path: "category/:id",
            element: <CoursesContainer></CoursesContainer>,
            loader: ({ params }) =>
              fetch(
                `https://foster-learning-rabiullah-rabi.vercel.app/category/${params.id}`
              ),
          },
          {
            path: "course/:id",
            element: <CourseDetails></CourseDetails>,
            loader: ({ params }) =>
              fetch(
                `https://foster-learning-rabiullah-rabi.vercel.app/course/${params.id}`
              ),
          },
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
      {
        path: "faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoutes>
            <Checkout></Checkout>
          </PrivateRoutes>
        ),
        //   loader: ({ params }) =>
        //     fetch(`https://foster-learning-rabiullah-rabi.vercel.app/course/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
