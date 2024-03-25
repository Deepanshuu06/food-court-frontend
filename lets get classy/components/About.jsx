import React from "react";
import { Outlet } from "react-router";
import ProfileClassComp from "./ProfileClassComp";
const About = () => {
  return (
    <>
      <h1>About us page</h1>
    <Outlet/>
    <ProfileClassComp/>
   
    </>
  );
};

export default About;
