import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://foster-learning-rabiullah-rabi.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="sticky top-5">
      {categories.map((category) => (
        <p key={category.id} className=" py-2">
          <Link className="text-xl font-bold hover:text-blue-500" to={`category/${category.id}`}>
            {category.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
