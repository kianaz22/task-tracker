import { useSelector } from "react-redux";

const Header = ({ category, icon, tab }) => {
  const tasks = useSelector(state => state.tasks);

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
