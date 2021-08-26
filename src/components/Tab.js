import React from "react";
import PropTypes from "prop-types";

export default function Tab({ children,value }) {
  return <div className={`${value==='1' ? 'open' : (value==='2' ? 'running' : 'finished')} `}>{children}</div>;
}

Tab.propTypes = {
  value: PropTypes.string,
  header: PropTypes.node.isRequired,
  children: PropTypes.node
};