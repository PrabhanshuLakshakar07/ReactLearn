import React from "react";
import { NavLink } from "react-router-dom";

const NavComp = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <NavLink to="/dashboard">Home</NavLink>

      <NavLink 
        to="/dashboard/mycarousel" 
        className="btn btn-primary btn-sm"
      >
        Carousel
      </NavLink>

      <NavLink 
        to="/dashboard/counter" 
        className="btn btn-success btn-sm"
      >
        Counter
      </NavLink>
    </div>
  );
};

export default NavComp;