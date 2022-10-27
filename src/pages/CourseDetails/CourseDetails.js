import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const course = useLoaderData([]);
  const { title, auhor, thumbnail_url, free, details,id } = course;
  // console.log(course);
  const ref = React.createRef();
  return (
    <div className="h-screen">
      <div ref={ref}>
        <div className=" bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img className="mx-auto" src={thumbnail_url} alt="" />
          </Link>
          <div className="p-5">
            <Link to="">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
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
        <Pdf targetRef={ref} filename="Course-Details.pdf">
          {({ toPdf }) => (
            <button
              className="mt-10 bg-blue-500 text-white px-6 py-2 font-bold"
              onClick={toPdf}
            >
              Download As PDF
            </button>
          )}
        </Pdf>
      </div>
      <div>
        {/* <Link to={`../../checkout/${id}`} >
          <button className="mt-10 bg-blue-500 text-white px-6 py-2 font-bold">
            Get premium access
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default CourseDetails;
