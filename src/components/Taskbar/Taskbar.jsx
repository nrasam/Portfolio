import styles from "./Taskbar.module.css";

import { useEffect, useState } from "react";
import { Search, Wifi, Volume2, Battery, Settings } from "lucide-react";

function TaskBar({
  shortcutItems,
  openWindows,
  onTaskbarClick,
  theme = "default",
}) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeString = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const dateString = time.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className={styles.taskbar}>
      <button className={styles.startBtn}>
        <div className={styles.startIcon}>
          <div className={styles.startIconInner}></div>
        </div>
        <span className={styles.startLabel}>Start</span>
      </button>
      <div className={styles.taskbarShortcuts}>
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
                {theme === "default" ? (
                  <shortcut.icon size={20} />
                ) : (
                  <span>{shortcut.emoji}</span>
                )}
                <span className={styles.appLabel}>{shortcut.label}</span>
              </button>
            );
          })}
      </div>
      {/* System Tray */}
      <div className={styles.systemTray}>
        <button className={styles.settingsBtn} title="Settings">
          <Settings className={styles.trayIcon} size={20} />
        </button>
        <Wifi className={styles.trayIcon} size={20} />
        <Volume2 className={styles.trayIcon} size={20} />
        <Battery className={styles.trayIcon} size={20} />
      </div>
      <div className={styles.clock}>
        <p className={styles.time}>{timeString}</p>
        <p className={styles.date}>{dateString}</p>
      </div>
    </div>
  );
}

export default TaskBar;
