import React from "react";
import { Outlet } from "react-router";
const About = () => {
  return (
    <>
      <h1>About us page</h1>
    <Outlet/>
    </>
  );
};

export default About;
