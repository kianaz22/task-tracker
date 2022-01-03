import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HiLightBulb } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

import Tabs from "./components/Tabs";
import Tab from "./components/Tab";
import Header from "./components/Header";
import Category from "./components/Category";
import { LOAD_TASKS } from "./js/constants/action-types";

function App() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const categories = [
    { category: "open", icon: <HiLightBulb size={18} /> },
    { category: "running", icon: <BsFillGearFill size={16} /> },
    { category: "finished", icon: <AiFillCheckCircle size={18} /> },
  ];
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("storedTasks")) || [];

    if (storedTasks.length > 0) {
      dispatch({ type: LOAD_TASKS, payload: storedTasks });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("storedTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <div className="large-visible">
        {categories.map((cat, index) => (
          <Category key={index} category={cat.category} icon={cat.icon} />
        ))}
      </div>

      <div className="small-visible">
        <Tabs>
          {categories.map((cat, index) => (
            <Tab
              key={index}
              value={String(index + 1)}
              header={
                <Header icon={cat.icon} category={cat.category} tab={true} />
              }
            >
              <Category category={cat.category} tab={true} />
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default App;
