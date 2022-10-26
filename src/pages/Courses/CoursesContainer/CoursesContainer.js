import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../../components/CourseCard/CourseCard';

const CoursesContainer = () => {
    const allCourses = useLoaderData([]);
    return (
        <div>
            <h1 className='text-9xl'>Total Courses : {allCourses.length}</h1>
            <div className='grid grid-cols-3 gap-8'>
            {
                allCourses.map(course=><CourseCard key={course.id} course={course}></CourseCard>)
            }
            </div>
        </div>
    );
};

export default CoursesContainer;