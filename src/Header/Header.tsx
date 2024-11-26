import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      Header
      
      <h3>
        <NavLink to={"/store"}>| to store</NavLink>
      </h3>
    </div>
  );
}


export default Header