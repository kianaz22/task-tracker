import React from "react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { FaPlus } from "react-icons/fa";
import AddTask from "./AddTask";
import Task from "./Task";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_STATUS } from "../js/constants/action-types";

const Category = ({ category, tab, icon }) => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const acceptTask = category => {
    switch (category) {
      case "open":
        return "running";
      case "running":
        return "open";
      case "finished":
        return "running";
      default:
        return "no category";
    }
  };

  const [{ isOver }, drop] = useDrop({
    accept: acceptTask(category),
    collect: monitor => ({
      isOver: !!monitor.isOver({ shallow: true }),
    }),

    drop: (dragItem, monitor) => {
      if (monitor.didDrop()) {
        console.log("drop not possible");

        return;
      }
      dispatch({ type: CHANGE_STATUS, payload: { id: dragItem.id, category } });
    },
  });

  return (
    <div>
      {!tab && <Header category={category} icon={icon} />}
      <div
        className={`category ${category}`}
        ref={drop}
        opacity={isOver ? "0.5" : "1"}
      >
        {tasks
          .filter(task => task.status === category)
          .map(task => (
            <Task task={task} key={task.id} />
          ))}

        {category === "open" && (
          <button onClick={toggleForm} className="round">
            <span className="center">
              <FaPlus size={20} />
            </span>
          </button>
        )}
        {category === "open" && showForm && <AddTask hideForm={toggleForm} />}
      </div>
    </div>
  );
};

export default Category;
