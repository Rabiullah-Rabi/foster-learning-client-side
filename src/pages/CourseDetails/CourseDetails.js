import React from "react";
import { Link, Navigate, useLoaderData, useLocation } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const course = useLoaderData([]);
  const { title, auhor, thumbnail_url, free, details, id } = course;
  // console.log(course);
  const ref = React.createRef();
  const location = useLocation();
  return (
    <div className="">
      <div ref={ref}>
        <div className=" bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img className="mx-auto" src={thumbnail_url} alt="" />
          </Link>
          <div className="p-5">
            <Link to="" className="flex justify-between items-center ">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <Pdf targetRef={ref} filename="Course-Details.pdf">
                {({ toPdf }) => (
                  <button
                    className=" bg-blue-500 text-white px-6 py-2 font-bold"
                    onClick={toPdf}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </button>
                )}
              </Pdf>
            </Link>

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Mentor : {auhor}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {details}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Link to={`../../checkout/${id}`}>
          <button className="mt-10 bg-blue-500 text-white px-6 py-2 font-bold">
            Get premium access
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
