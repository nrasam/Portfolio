import { useState, useEffect, useMemo } from "react";
import Desktop from "./components/Desktop/Desktop";
import TaskBar from "./components/Taskbar/Taskbar";
import Window from "./components/Window/Window";
import MobileMessage from "./components/MobileMessage/MobileMessage";

import "./App.css";
import "./themes.css";

import { themeConfigs } from "./config/themeConfig";

import { createShortcutItems } from "./config/shortcutConfig";

const MOBILE_BREAKPOINT = 768;

function App() {
  // Represents the open windows; if a window is not open, it will not show up in the array
  const [openWindows, setOpenWindows] = useState([]);
  const [highestZIndex, setHighestZIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_BREAKPOINT,
  );
  const [theme, setTheme] = useState("default");

  const shortcutItems = useMemo(
    () => createShortcutItems({ theme, setTheme }),
    [theme, setTheme],
  );

  const handleMinimize = (id) => {
    setOpenWindows((prev) =>
      prev.map((window) =>
        window.id === id ? { ...window, minimized: true } : window,
      ),
    );
  };

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
        handleMinimize(id);
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
    handleMinimize(id);
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

  // Listen for resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <MobileMessage />;
  }

  return (
    <div className="app" data-theme={theme}>
      <Desktop
        shortcuts={shortcutItems}
        onShortcutClick={handleShortcutClick}
        theme={theme}
        themeConfig={themeConfigs[theme]}
        anyOpenWindows={openWindows.length > 0}
      />

      {openWindows.map((window, index) => {
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
            icon={shortcut.icon}
            openOrder={index}
            theme={theme}
          >
            {shortcut.content}
          </Window>
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
