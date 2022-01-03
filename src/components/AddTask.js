import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { ADD_TASK } from "../js/constants/action-types";

const AddTask = ({ hideForm }) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState("");

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    if (!text) {
      alert("please add a task");
    } else if (!time) {
      alert("please add a time");
    } else {
      hideForm();
      const id = Math.floor(Math.random() * 1000);
      const task = { id, text, details, time, status: "open" };
      dispatch({ type: ADD_TASK, payload: task });
      setText("");
      setTime("");
      setDetails("");
    }
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div>
        <FaPen size={15} color={"rgb(40,40,40)"} />
        <input
          type="text"
          placeholder="New Task"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div>
        <FaPen size={15} color={"rgb(40,40,40)"} />
        <input
          type="text"
          placeholder="Details"
          value={details}
          onChange={e => setDetails(e.target.value)}
        />
      </div>
      <div>
        <FaPen size={15} color={"rgb(40,40,40)"} />
        <input
          type="text"
          placeholder="Time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </div>
      <button type="submit">
        CREATE <BsFillCaretRightFill />
      </button>
    </form>
  );
};

export default AddTask;
