import React from "react";
import PropTypes from "prop-types";

//stateless component: dus geen this! arrow function maakt return overbodig

const Header = (props) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);


// in een stateless component definieer je proptypes onderaan op deze manier
Header.propTypes = {
  tagline: PropTypes.string.isRequired,
};

export default Header;
