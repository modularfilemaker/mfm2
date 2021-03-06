import React from "react";
import PropTypes from "prop-types";

const HSpace = ({ px }) => <div style={{ width: `${px}px` }} />;

HSpace.propTypes = {
  px: PropTypes.number
};

export default HSpace;
