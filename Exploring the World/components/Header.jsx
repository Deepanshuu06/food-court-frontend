import React from "react";

function Header() {
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
        </ul>
      </div>
    </>
  );
}

export default Header;
