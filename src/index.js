import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalProvider } from './context/GlobalState';

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
    <GlobalProvider>
      <App />
      </GlobalProvider>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
