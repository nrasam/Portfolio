import styles from "./Taskbar.module.css";

import { useEffect, useState } from "react";

function TaskBar({ shortcutItems, openWindows, onTaskbarClick }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.taskbar}>
      <button className={styles.startBtn}>Start</button>
      {shortcutItems &&
        shortcutItems.map((shortcut) => {
          const isOpen = openWindows.find(
            (window) => window.id === shortcut.id,
          );

          return (
            <button
              key={shortcut.id}
              className={isOpen ? styles.appBtnActive : styles.appBtn}
              onClick={() => onTaskbarClick(shortcut.id)}
            >
              <p>
                {shortcut.emoji}&nbsp;
                {shortcut.label}
              </p>
            </button>
          );
        })}

      {/* {openWindows &&
        openWindows.map((window) => {
          const shortcutItem = shortcutItems.find(
            (item) => item.id === window.id,
          );
          return (
            <button
              key={window.id}
              className={styles.appBtn}
              onClick={() => onTaskbarClick(shortcutItem.id)}
            >
              {shortcutItem.label}
            </button>
          );
        })} */}
      <p className={styles.time}>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default TaskBar;
