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
      {openWindows &&
        openWindows.map((window) => (
          <button key={window.id}>{window.id}</button>
        ))}
      <p className={styles.time}>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default TaskBar;
