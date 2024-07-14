import React from "react";
import "./Welcome.css";
import PropTypes from "prop-types";
function Welcome(props) {
  return (
    <div>
      <h1 className="welcome">
        Welcome, <br />
        <span>{props.name}</span>
      </h1>
    </div>
  );
}

export default Welcome;

Welcome.propTypes = {
  name: PropTypes.string
};

Welcome.defaultProps = {
  name: "Stranger"
}
