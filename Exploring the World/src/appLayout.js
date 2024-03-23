import React from "react";
import ReactDOM from "react-dom/client";

import Header from "../components/Header";
import Body from "../components/Body";
import NotFound from "../components/NotFound"; // Import NotFound component if used
import Shimmer from "../components/shimmer";

const Layout = () => {
  return (
    <>
      <Header />
      <Body />
      <Shimmer/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
