import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const DataContext = createContext();
const DataProvider = ({children}) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://foster-learning-rabiullah-rabi.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
    const value = { data };
    // console.log(value);
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
