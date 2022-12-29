import { Popover } from "@headlessui/react";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Banner from "./Banner/Banner";
import Why from "./Why/Why";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Banner></Banner>
      <Why></Why>
    </div>
  );
};

export default Home;
