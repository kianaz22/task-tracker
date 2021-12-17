import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { FaArrowLeft, FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const Task = ({ task, deleteTask, changeStatus }) => {
  const [details, setDetails] = useState(true);
  const toggleDetails = () => {
    setDetails(!details);
  };
  const status = task.status;
  const [isDragging, drag] = useDrag(() => ({
    type: status,
    item: { id: task.id, status: task.status },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className="task" ref={drag} opacity={isDragging ? "0.5" : "1"}>
      <h3 onClick={toggleDetails}>{task.text}</h3>
      {details && <p className="details">{task.details}</p>}
      <div className="time">
        <FaCalendarAlt />
        <p>{task.time}</p>
      </div>
      <div className="task-footer">
        {deleteTask && (
          <button className="delete-btn" onClick={() => deleteTask(task.id)}>
            delete
          </button>
        )}
        {status === "open" && (
          <button
            className="select-btn"
            onClick={() => changeStatus(task.id, "running")}
          >
            select&nbsp;
            <FaArrowRight />
          </button>
        )}
        {status === "running" && (
          <button
            className="stopped-btn"
            onClick={() => changeStatus(task.id, "open")}
          >
            <FaArrowLeft />
            &nbsp;stopped
          </button>
        )}
        {status === "running" && (
          <button
            className="finished-btn"
            onClick={() => changeStatus(task.id, "finished")}
          >
            finished&nbsp;
            <FaArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
