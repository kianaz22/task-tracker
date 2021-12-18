import { useEffect, useContext } from "react";
import { HiLightBulb } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

import Tabs from "./components/Tabs";
import Tab from "./components/Tab";
import Header from "./components/Header";
import TabHeader from "./components/TabHeader";
import Category from "./components/Category";
import { GlobalContext } from "./context/GlobalState.js";

function App() {
  const { tasks, loadTasks } = useContext(GlobalContext);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("storedTasks")) || [];

    if (storedTasks.length > 0) {
      loadTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("storedTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <div className="large-visible">
        <div>
          <Header category="open" icon={<HiLightBulb size={18} />} />
          <Category category="open" />
        </div>
        <div>
          <Header category="running" icon={<BsFillGearFill size={16} />} />
          <Category category="running" />
        </div>
        <div>
          <Header category="finished" icon={<AiFillCheckCircle size={18} />} />
          <Category category="finished" />
        </div>
      </div>

      <div className="small-visible">
        <Tabs>
          <Tab
            value="1"
            header={<TabHeader icon={<HiLightBulb />} category="open" />}
          >
            <Category category="open" />
          </Tab>
          <Tab
            value="2"
            header={<TabHeader icon={<BsFillGearFill />} category="running" />}
          >
            <Category category="running" />
          </Tab>
          <Tab
            value="3"
            header={
              <TabHeader
                icon={<AiFillCheckCircle size={18} />}
                category="finished"
              />
            }
          >
            <Category category="finished" />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
