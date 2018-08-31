import React from "react";
import PropTypes from "prop-types";

const VSpace = ({ px }) => <div style={{ height: `${px}px` }} />;

VSpace.propTypes = {
  px: PropTypes.number
};

export default VSpace;
