//import { useState } from "react";
import Desktop from "./components/Desktop/Desktop";
import TaskBar from "./components/Taskbar/Taskbar";
import Window from "./components/Window/Window";

import "./App.css";

function App() {
  //const [position, setPosition] = useState({ x: 100, y: 100 });

  return (
    <div className="app">
      <Desktop />
      <Window title="placeholder">
        <p>Hi I'm Noel</p>
      </Window>
      <TaskBar />
    </div>
  );
}

export default App;
