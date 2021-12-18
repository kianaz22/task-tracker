import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

const TabHeader = ({ icon, category }) => {
  const { tasks } = useContext(GlobalContext);

  const getLength = category => {
    return tasks.filter(task => task.status === category).length;
  };

  const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="tab-header">
      <div className="center">
        <div className="center icon">{icon}</div>
        <span>{capitalize(category)}</span>
      </div>
      <div>{getLength(category)}</div>
    </div>
  );
};

export default TabHeader;
