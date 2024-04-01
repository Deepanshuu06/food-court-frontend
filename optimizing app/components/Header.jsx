import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  function userLoggedIN() {
    return true;
  }
  const [isloggedin, setisloggedin] = useState(false);

  const logourl =
    "https://vectorlogoseek.com/wp-content/uploads/2018/07/foodcourt-vector-logo.png"
      ? "https://vectorlogoseek.com/wp-content/uploads/2018/07/foodcourt-vector-logo.png"
      : "https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png";
  return (
    <>
      <div className="nav-bar">
        <img
          src={`${logourl}`}
          alt="LOGO"
          className="header-logo"
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <ul className="nav-list">
          <li >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
          <li>
          <Link to="/checkout"><span class="material-symbols-outlined">shopping_bag</span></Link>
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
            <button
              className="log-btn"
            >
              login
            </button>
            </Link>
          )}
        </ul>
      </div>
    </>
  );
}

export default Header;
