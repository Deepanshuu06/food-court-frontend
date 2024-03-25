import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import About from "../components/About";
import Footer from "../components/Footer";
import ContactPage from "../components/ContactPage";
import ErrorPage from "../components/ErrorPage";
import CheckOutPage from "../components/CheckOutPage";
import RestaurantMenu from "../components/RestaurantDetails";
import LoginPage from "../components/LoginPage";
import ProfileComp from "../components/ProfileComp";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children:[
          {
            path:"profile",
            element:<ProfileComp/>
          }
        ]
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
      {
        path:"/restaurant/:id",
        element:(<RestaurantMenu/>)
      },
      {
        path:"/restaurant",
        element:(<Body />)
      },
      {
        path:"/login",
        element:(<LoginPage/>)
      }
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
