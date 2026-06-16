import styles from "./Taskbar.module.css";

import { useEffect, useState } from "react";

function TaskBar() {
  const [time, setTime] = useState(new Date());

  //console.log(children);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.taskbar}>
      <button className={styles.startBtn}>Start</button>
      <p className={styles.time}>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default TaskBar;
