import { useState } from "react";

export function useWindowManager() {
  // Represents the open windows; if a window is not open, it will not show up in the array
  const [openWindows, setOpenWindows] = useState([]);
  const [highestZIndex, setHighestZIndex] = useState(1);

  const getNextZIndex = () => {
    const nextZIndex = highestZIndex + 1;
    setHighestZIndex(nextZIndex);

    return nextZIndex;
  };

  const minimizeWindow = (id) => {
    setOpenWindows((prev) =>
      prev.map((window) =>
        window.id === id ? { ...window, minimized: true } : window,
      ),
    );
  };

  const openWindow = (id) => {
    // is the id in the windows array?
    const isOpen = openWindows.some((window) => window.id === id);

    if (isOpen) {
      // If already opened
      const openWindow = openWindows.find((window) => window.id === id);

      // If minimized
      if (openWindow.minimized) {
        // Unminimize it and update z-index
        const newZIndex = getNextZIndex();

        setOpenWindows((prev) =>
          prev.map((window) =>
            window.id === id
              ? { ...window, zIndex: newZIndex, minimized: false }
              : window,
          ),
        );
      } else {
        // If not minimized, then minimize it
        minimizeWindow(id);
      }
    } else {
      const newZIndex = getNextZIndex();

      // Add to open windows [] if not already open and give it highest z-index
      setOpenWindows((prev) => [
        ...prev,
        { id: id, zIndex: newZIndex, minimized: false },
      ]);
    }
  };

  const closeWindow = (id) => {
    setOpenWindows((prev) => prev.filter((item) => item.id != id));
  };

  const focusWindow = (id) => {
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

  return {
    openWindows,
    openWindow,
    minimizeWindow,
    closeWindow,
    focusWindow,
  };
}
