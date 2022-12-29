import React from "react";

const Benifit = () => {
  return (
    <div className="relative overflow-hidden bg-white grid grid-cols-2 gap-10 items-center py-20">
      <div>
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Become a </span>{" "}
          <span className="block text-indigo-600 xl:inline">
            Foster Learning Member
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          We will teach you the skills you need to thrive and earn online-now
          and in the future.
        </p>
      </div>
    </div>
  );
};

export default Benifit;
