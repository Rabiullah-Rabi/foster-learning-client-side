import React from "react";

const Why = () => {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center">
        <span className="block xl:inline">Why Foster Learning?</span>{" "}
      </h1>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {/* grid box -1 */}

        <div className="border p-5 border-l-4 hover:translate-y-2 transition-all duration-300">
          <h4 className="font-bold text-lg mb-5">Experienced Instructors</h4>
          <p>
            With more than 10 years of experience of working in the IT industry,
            we intend to share with you what works
          </p>
        </div>
        {/* grid box -2 */}
        <div className="border p-5 border-l-4 hover:translate-y-2 transition-all duration-300">
          <h4 className="font-bold text-lg mb-5">Career Guidance</h4>
          <p>You will be guided to prepare yourself for the IT industry</p>
        </div>
        {/* grid box -3 */}

        <div className="border p-5 border-l-4 hover:translate-y-2 transition-all duration-300">
          <h4 className="font-bold text-lg mb-5">Online</h4>
          <p>
            No need to waste time in traffic jam. A good internet connection is
            all you need to start learning!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
