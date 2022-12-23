import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";

function Menu({ menu, setMenu }) {
  const closemenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="menu">
      <div onClick={closemenu} className="close_buttn">
        <svg
          className="tds-icon tds-icon-close tds-modal-close-icon"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="menu_content">
        <Link onClick={closemenu} className="menu_links" to="/Model3">
          Model 3
        </Link>
        <Link onClick={closemenu} className="menu_links" to="/ModelS">
          Model S
        </Link>
        <Link onClick={closemenu} className="menu_links" to="/ModelY">
          Model Y
        </Link>
        <Link onClick={closemenu} className="menu_links" to="/ModelX">
          Model X
        </Link>
      </div>
    </div>
  );
}

export default Menu;
