import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

const Header = ({ category, icon, tab }) => {
  const { tasks } = useContext(GlobalContext);

  const getLength = category => {
    return tasks.filter(task => task.status === category).length;
  };

  const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={tab ? "tab-header" : `header header-${category}`}>
      <div className="center">
        <div className="center icon">{icon}</div>
        <span style={!tab ? { fontWeight: "600" } : {}}>
          {capitalize(category)}
          {!tab && " Tasks"}
        </span>
      </div>
      <div className={!tab && "number"}>{getLength(category)}</div>
    </div>
  );
};

export default Header;
