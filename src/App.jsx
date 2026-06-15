import { useState } from "react";
import Desktop from "./components/Desktop/Desktop";
import TaskBar from "./components/Taskbar/Taskbar";
import Window from "./components/Window/Window";
import AboutApp from "./apps/AboutApp";

import "./App.css";

const shortcutItems = [
  { label: "About Me", emoji: "🧑🏻", content: <AboutApp /> },
  { label: "Contact Me", emoji: "📧", content: <p>Contact content here</p> },
  { label: "Education", emoji: "🎓", content: <p>Education content here</p> },
  { label: "Experience", emoji: "💼", content: <p>Experience content here</p> },
  { label: "Skills", emoji: "📊", content: <p>Skills content here</p> },
  { label: "My Projects", emoji: "⚡", content: <p>Projects content here</p> },
];

function App() {
  const [openWindows, setOpenWindows] = useState({});

  // const handleShortcutClick = (label) => {
  //   setOpenWindows((prev) => ({ ...prev, [label]: true }));
  // };

  const handleShortcutClick = (label) => {
    setOpenWindows(() => ({ [label]: true }));
  };

  return (
    <div className="app">
      <Desktop
        shortcuts={shortcutItems}
        onShortcutClick={handleShortcutClick}
      />

      {shortcutItems.map((item) => (
        <Window
          key={item.label}
          title={item.label}
          hidden={!openWindows[item.label]}
        >
          {item.content}
        </Window>
      ))}

      <TaskBar />
    </div>
  );
}

export default App;
