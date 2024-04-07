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
      <div className="nav-bar flex m-10">
        <img
          src={`${logourl}`}
          alt="LOGO"
          className="header-logo w-15"
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <ul className="nav-list flex">
          <li>
            <Link to="/" className="">Home</Link>
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
              className="log-btn"
              onClick={() => {
                setisloggedin(false);
              }}
            >
              logout
            </button>
          ) : (
            <Link to="/login">
              <button className="log-btn">login</button>
            </Link>
          )}
        </ul>
      </div>
    </>
  );
}

export default Header;
