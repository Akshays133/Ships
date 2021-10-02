import React from "react";
import PropTypes from "prop-types";
import logo from "../SpaceX.png";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <img src={logo} alt="Spacex" style={{ width: 300, display: "block" }} />
    </nav>
  );
};

Navbar.defaultProps = {
  title: "SpaceX"
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
