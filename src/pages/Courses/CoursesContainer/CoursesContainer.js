import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../../../components/CourseCard/CourseCard";

const CoursesContainer = () => {
  const courses = useLoaderData([]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default CoursesContainer;
