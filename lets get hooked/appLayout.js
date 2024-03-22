import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import NotFound from "./components/NotFound"; // Import NotFound component if used

const Layout = () => {
  return (
    <>
      <Header />
      <Body />

    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
