import React from "react";
import { useState, useContext } from "react";
import { useDrop } from "react-dnd";
import { FaPlus } from "react-icons/fa";
import AddTask from "./AddTask";
import Task from "./Task";
import { GlobalContext } from "../context/GlobalState.js";

const Category = ({ category }) => {
  const { tasks, changeStatus } = useContext(GlobalContext);

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
      changeStatus(dragItem.id, category);
    },
  });

  return (
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
  );
};

export default Category;
