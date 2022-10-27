import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Checkout = () => {
    const course = useLoaderData([]);
    const { title, } = course;
    return (
        <div className='-mt-20 h-screen flex flex-col justify-center'>
            <h1 className='text-2xl text-center'> Thanks For selecting : <span className='text-blue-500 font-bold'>{ title}</span> course</h1>
            <h1 className='text-xl text-center'>Keep Learning</h1>
        </div>
    );
};

export default Checkout;