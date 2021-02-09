import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
const Menu = (): JSX.Element => {
  return (
    <div className="Menu">
      <NavLink style={{ textDecoration: "none" }} to="/coins-list">
        Coins List
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} to="/live-reports">
        Live Reports
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} to="/about">
        About
      </NavLink>
    </div>
  );
};

export default Menu;
