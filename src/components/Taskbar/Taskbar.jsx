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
      <button className={styles.startBtn}>
        <div className={styles.startIcon}>
          <div className={styles.startIconInner}></div>
        </div>
        <span>Start</span>
      </button>
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
      <div className={styles.tray}>ICONS</div>
      <div>
        <p className={styles.time}>{time.toLocaleTimeString()}</p>
        <p className={styles.date}>06/23/2026</p>
      </div>
    </div>
  );
}

export default TaskBar;
