import React from "react";
import { Outlet } from "react-router-dom";
import CoursesContainer from "./CoursesContainer/CoursesContainer";
import LeftNav from "./leftNav/leftNav";

const Courses = () => {
  return (
    <div className="block md:flex mt-10 relative">
      <div className="w-full md:w-1/4">
        <LeftNav></LeftNav>
      </div>
      <div className="w-full md:w-3/4">
          <Outlet />
      </div>
    </div>
  );
};

export default Courses;
