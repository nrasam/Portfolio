//import { useState } from "react";
import Desktop from "./components/Desktop/Desktop";
import TaskBar from "./components/Taskbar/Taskbar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Desktop />
      <TaskBar />
    </div>
  );
}

export default App;
