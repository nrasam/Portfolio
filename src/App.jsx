import { useState } from "react";
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
  { id: 1, label: "About Me", emoji: "🧑🏻", content: <AboutApp /> },
  { id: 2, label: "Contact Me", emoji: "📧", content: <ContactApp /> },
  { id: 3, label: "Education", emoji: "🎓", content: <EducationApp /> },
  { id: 4, label: "Experience", emoji: "💼", content: <ExperienceApp /> },
  { id: 5, label: "Skills", emoji: "📊", content: <SkillsApp /> },
  { id: 6, label: "My Projects", emoji: "⚡", content: <ProjectsApp /> },
];

function App() {
  // Represents the open windows; if a window is not open, it will not show up in the array
  const [openWindows, setOpenWindows] = useState([]);
  const [highestZIndex, setHighestZIndex] = useState(1);

  const handleShortcutClick = (id) => {
    // is the id in the windows array
    const isOpen = openWindows.some((window) => window.id === id);

    if (isOpen) {
      setOpenWindows((prev) =>
        prev.map((window) =>
          window.id === id
            ? { ...window, zIndex: highestZIndex, minimized: false }
            : window,
        ),
      );
      setHighestZIndex(highestZIndex + 1);
    } else {
      // Add to open windows [] if not already open
      setOpenWindows((prev) => [
        ...prev,
        { id: id, zIndex: highestZIndex, minimized: false },
      ]);
      setHighestZIndex(highestZIndex + 1);
    }
  };

  const handleMinimizeClick = (id) => {
    // set window minimize to true
    setOpenWindows((prev) =>
      prev.map((window) =>
        window.id === id ? { ...window, minimized: true } : window,
      ),
    );
  };

  const handleCloseClick = (id) => {
    setOpenWindows((prev) => prev.filter((item) => item.id != id));
  };

  const handleOnFocus = (id) => {
    const window = openWindows.find((item) => item.id === id);

    // If the window isn't already highest z-index
    if (window.zIndex !== highestZIndex) {
      // On focus bump the z-index to the highest value
      setOpenWindows((prev) =>
        prev.map((window) =>
          window.id === id ? { ...window, zIndex: highestZIndex + 1 } : window,
        ),
      );
      setHighestZIndex(highestZIndex + 1);
    }
  };

  return (
    <div className="app">
      <Desktop
        shortcuts={shortcutItems}
        onShortcutClick={handleShortcutClick}
      />

      {openWindows.map((window) => {
        // Find the shortcut with the same id as the window
        const shortcut = shortcutItems.find((item) => item.id === window.id);

        return (
          !window.minimized && (
            <Window
              key={window.id}
              title={shortcut.label}
              onMinimizeClick={() => handleMinimizeClick(window.id)}
              onCloseClick={() => handleCloseClick(window.id)}
              zIndex={window.zIndex}
              onFocus={() => handleOnFocus(window.id)}
            >
              {shortcut.content}
            </Window>
          )
        );
      })}

      <TaskBar
        shortcutItems={shortcutItems}
        openWindows={openWindows}
        onTaskbarClick={handleShortcutClick}
      />
    </div>
  );
}

export default App;
