import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

const Header = ({ category, icon }) => {
  const { tasks } = useContext(GlobalContext);

  const getLength = category => {
    return tasks.filter(task => task.status === category).length;
  };

  const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className={`header header-${category}`}>
      <h3 className="center">
        <span className="center icon">{icon}</span>
        <span>{capitalize(category)} Tasks</span>
      </h3>
      <div className="number">{getLength(category)}</div>
    </div>
  );
};

export default Header;
