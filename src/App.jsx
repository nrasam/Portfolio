import { useState, useRef, useCallback } from "react";
import Desktop from "./components/Desktop/Desktop";
import TaskBar from "./components/Taskbar/Taskbar";
import Window from "./components/Window/Window";
import AboutApp from "./apps/AboutApp";
import ContactApp from "./apps/ContactApp";
import EducationApp from "./apps/EducationApp";
import ExperienceApp from "./apps/ExperienceApp";
import ProjectsApp from "./apps/ProjectsApp";
import SkillsApp from "./apps/SkillsApp";

import "./App.css";

const shortcutItems = [
  { label: "About Me", emoji: "🧑🏻", content: <AboutApp /> },
  { label: "Contact Me", emoji: "📧", content: <ContactApp /> },
  { label: "Education", emoji: "🎓", content: <EducationApp /> },
  { label: "Experience", emoji: "💼", content: <ExperienceApp /> },
  { label: "Skills", emoji: "📊", content: <SkillsApp /> },
  { label: "My Projects", emoji: "⚡", content: <ProjectsApp /> },
];

function App() {
  const [openWindows, setOpenWindows] = useState({});
  const desktopDimensions = useRef(null);

  const handleShortcutClick = (label) => {
    setOpenWindows((prev) => ({ ...prev, [label]: true }));
  };

  const handleMinimizeClick = (label) => {
    setOpenWindows((prev) => ({ ...prev, [label]: false }));
  };

  const handleCloseClick = (label) => {
    setOpenWindows((prev) => ({ ...prev, [label]: false }));
  };

  const handleDesktopReady = useCallback((height, width) => {
    desktopDimensions.current = { height, width };
  }, []);

  return (
    <div className="app">
      <Desktop
        shortcuts={shortcutItems}
        onShortcutClick={handleShortcutClick}
        onDesktopReady={handleDesktopReady}
      />

      {shortcutItems.map(
        (item) =>
          openWindows[item.label] && (
            <Window
              key={item.label}
              title={item.label}
              onMinimizeClick={() => handleMinimizeClick(item.label)}
              onCloseClick={() => handleCloseClick(item.label)}
              desktopDimensions={desktopDimensions}
            >
              {item.content}
            </Window>
          ),
      )}

      <TaskBar>
        {shortcutItems.map((item) => (
          <p key={item.label}>{item.label}</p>
        ))}
      </TaskBar>
    </div>
  );
}

export default App;
