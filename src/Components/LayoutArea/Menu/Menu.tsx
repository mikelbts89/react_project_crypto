import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
const Menu = (): JSX.Element => {
  return (
    <div className="Menu">
      <NavLink to="/coins-list">Coins List</NavLink>
      <NavLink to="/live-reports">Live Reports</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Menu;
