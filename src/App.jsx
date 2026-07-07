import { useState, useEffect, useMemo } from "react";
import Desktop from "./components/Desktop/Desktop";
import TaskBar from "./components/Taskbar/Taskbar";
import Window from "./components/Window/Window";
import MobileMessage from "./components/MobileMessage/MobileMessage";

import "./App.css";
import "./themes.css";

import { themeConfigs } from "./config/themeConfig";

import { createShortcutItems } from "./config/shortcutConfig";

import { useWindowManager } from "./hooks/useWindowManager";

import { ThemeContext } from "./context/ThemeContext";

const MOBILE_BREAKPOINT = 768;

function App() {
  // Window state lives in a small hook so App stays focused on layout and composition
  const { openWindows, openWindow, minimizeWindow, closeWindow, focusWindow } =
    useWindowManager();

  // Keep track of whether the viewport should fall back to the mobile message
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_BREAKPOINT,
  );

  // Theme is shared by the desktop, taskbar, and the app windows
  const [theme, setTheme] = useState("default");

  // Rebuild the shortcut list whenever the theme changes so the settings app stays in sync
  const shortcutItems = useMemo(
    () => createShortcutItems({ theme, setTheme }),
    [theme, setTheme],
  );

  const handleShortcutClick = (id) => openWindow(id);
  const handleMinimizeClick = (id) => minimizeWindow(id);
  const handleCloseClick = (id) => closeWindow(id);
  const handleOnFocus = (id) => focusWindow(id);

  // Watch for viewport changes so the mobile fallback can appear when needed
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
    <ThemeContext.Provider value={{ theme, setTheme }}>
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
    </ThemeContext.Provider>
  );
}

export default App;
