import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      {categories.map((category) => (
        <p key={category.id} className=" py-2">
          <Link className="text-xl font-bold hover:text-blue-500" to={`/category/${category.id}`}>
            {category.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
