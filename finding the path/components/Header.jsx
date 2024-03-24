import React, { useEffect } from "react";
import { useState } from "react";

function Header() {
  function userLoggedIN() {
    return true;
  }
  const [isloggedin, setisloggedin] = useState(false);

  const logourl =
    "https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png"
      ? "https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png"
      : "https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png";
  return (
    <>
      <div className="nav-bar">
        <img
          src={`${logourl}`}
          alt=""
          className="header-logo"
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <ul className="nav-list">
          <li
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Home
          </li>
          <li>Menu</li>
          <li>Contact</li>
          <li>Cart</li>
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
            <button
            className="log-btn"
              onClick={() => {
                setisloggedin(true);
              }}
            >
              login
            </button>
          )}
        </ul>
      </div>
    </>
  );
}

export default Header;