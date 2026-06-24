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
import "./themes.css";

import {
  User,
  Mail,
  GraduationCap,
  Briefcase,
  BarChart3,
  Folder,
  Settings,
} from "lucide-react";

const shortcutItems = [
  { id: 1, label: "About Me", emoji: "🧑🏻", icon: User, content: <AboutApp /> },
  {
    id: 2,
    label: "Contact Me",
    emoji: "📧",
    icon: Mail,
    content: <ContactApp />,
  },
  {
    id: 3,
    label: "Education",
    emoji: "🎓",
    icon: GraduationCap,
    content: <EducationApp />,
  },
  {
    id: 4,
    label: "Experience",
    emoji: "💼",
    icon: Briefcase,
    content: <ExperienceApp />,
  },
  {
    id: 5,
    label: "Skills",
    emoji: "📊",
    icon: BarChart3,
    content: <SkillsApp />,
  },
  {
    id: 6,
    label: "My Projects",
    emoji: "⚡",
    icon: Folder,
    content: <ProjectsApp />,
  },
  {
    id: 7,
    label: "Settings",
    emoji: "⚙",
    icon: Settings,
    content: <p>Settings</p>,
  },
];

function App() {
  // Represents the open windows; if a window is not open, it will not show up in the array
  const [openWindows, setOpenWindows] = useState([]);
  const [highestZIndex, setHighestZIndex] = useState(1);

  const [theme, setTheme] = useState("default");

  const handleShortcutClick = (id) => {
    // is the id in the windows array?
    const isOpen = openWindows.some((window) => window.id === id);

    if (isOpen) {
      // If already opened
      const openWindow = openWindows.find((window) => window.id === id);

      // If minimized
      if (openWindow.minimized) {
        // Unminimize it and update z-index
        const newZIndex = highestZIndex + 1;
        setHighestZIndex(newZIndex);

        setOpenWindows((prev) =>
          prev.map((window) =>
            window.id === id
              ? { ...window, zIndex: newZIndex, minimized: false }
              : window,
          ),
        );
      } else {
        // If not minimized, then minimize it
        setOpenWindows((prev) =>
          prev.map((window) =>
            window.id === id ? { ...window, minimized: true } : window,
          ),
        );
      }
    } else {
      const newZIndex = highestZIndex + 1;
      setHighestZIndex(newZIndex);

      // Add to open windows [] if not already open and give it highest z-index
      setOpenWindows((prev) => [
        ...prev,
        { id: id, zIndex: newZIndex, minimized: false },
      ]);
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
    <div className="app" data-theme={theme}>
      <Desktop
        shortcuts={shortcutItems}
        onShortcutClick={handleShortcutClick}
        theme={theme}
      />

      {openWindows.map((window) => {
        // Find the shortcut with the same id as the window
        const shortcut = shortcutItems.find((item) => item.id === window.id);

        return (
          <Window
            key={window.id}
            title={shortcut.label}
            onMinimizeClick={() => handleMinimizeClick(window.id)}
            onCloseClick={() => handleCloseClick(window.id)}
            zIndex={window.zIndex}
            onFocus={() => handleOnFocus(window.id)}
            isMinimized={window.minimized}
          >
            {shortcut.content}
          </Window>
        );
      })}

      <TaskBar
        shortcutItems={shortcutItems}
        openWindows={openWindows}
        onTaskbarClick={handleShortcutClick}
        theme={theme}
      />
    </div>
  );
}

export default App;
