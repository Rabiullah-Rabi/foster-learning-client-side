import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
