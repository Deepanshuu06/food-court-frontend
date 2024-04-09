import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "../components/About";
import Footer from "../components/Footer";
import ContactPage from "../components/ContactPage";
import ErrorPage from "../components/ErrorPage";
import CheckOutPage from "../components/CheckOutPage";

import ProfileComp from "../components/ProfileComp";
import { UserContext } from "../utils/UserContext";
const RestaurantMenu = lazy(() => import("../components/RestaurantDetails"));
const LoginPage = lazy(() => import("../components/LoginPage"));
const RestaurantListShimmer = lazy(() =>
  import("../components/RestaurantListShimmer")
);
const SignupPage = lazy(() => import("../components/SignupPage"));
const InstaMart = lazy(() => import("../components/InstaMart"));

const Layout = () => {

  const [User , setUser] = useState({
    name:"deepanshu",
    email:"bagheldipanshu892@gmail.com"
  });

  return (
    <UserContext.Provider value={{
      user:User,
      setUser:setUser
    }
    }>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
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
        children: [
          {
            path: "profile",
            element: <ProfileComp />,
          },
        ],
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
        path: "/restaurant/:id",
        element: (
          <Suspense>
            {" "}
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/restaurant",
        element: <Body />,
      },
      {
        path: "/login",
        element: (
          <Suspense>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense>
            <SignupPage />
          </Suspense>
        ),
      },
      {
        path: "/instamart",
        element: (
          <Suspense
            fallback={
              <Suspense>
                <RestaurantListShimmer />
              </Suspense>
            }
          >
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
