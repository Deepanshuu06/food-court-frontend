import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from "../components/About";
import Footer from "../components/Footer";
import ContactPage from "../components/ContactPage";
import ErrorPage from "../components/ErrorPage";

const Layout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:(<ErrorPage/>)
    
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path:"/contact",
    element:(
      <ContactPage/>
    )
  }
  
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
