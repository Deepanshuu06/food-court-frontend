import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FOOD_COURT_LOGO } from "./constansts";

function Header() {
  function userLoggedIN() {
    return true;
  }
  const [isloggedin, setisloggedin] = useState(false);

  const logourl =
    FOOD_COURT_LOGO ||
    "https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png";
  return (
    <>
    <div className=" shadow-md shadow-zinc-200 px-10 mb-3">
      <div className="nav-bar flex justify-between px-2 py-1 place-items-center ">
        <img
          src={`${logourl}`}
          alt="LOGO"
          className="header-logo h-24 cursor-pointer"
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <ul className="nav-list flex gap-12 place-items-center">
          <li>
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">InstaMart</Link>
          </li>
          <li>
            <Link to="/checkout">
              <span className="material-symbols-outlined">shopping_bag</span>
            </Link>
          </li>
          {isloggedin ? (
            <button
              className="w-20 h-8 bg-green-600 rounded-sm"
              onClick={() => {
                setisloggedin(false);
              }}
            >
              logout
            </button>
          ) : (
            <Link to="/login">
              <button className="log-btn w-24 h-10 bg-red-600 rounded-lg text-white">login</button>
            </Link>
          )}
        </ul>
      </div>
      </div>
    </>
  );
}

export default Header;
