import styles from "./Taskbar.module.css";

import { useEffect, useState } from "react";
import { Wifi, Volume2, Battery, Settings } from "lucide-react";

function TaskBar({ shortcutItems, openWindows, onTaskbarClick }) {
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

  const SettingsItem = shortcutItems.find((item) => item.label === "Settings");

  return (
    <div className={styles.taskbar}>
      {/* Start Button */}
      <button className={styles.startBtn}>
        <div className={styles.startIcon}>
          <div className={styles.startIconInner}></div>
        </div>
        <span className={styles.startLabel}>Start</span>
      </button>

      {/* Separator */}
      <div className={styles.separator} />

      {/* Taskbar shortcuts */}
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
                <shortcut.icon size={16} className={styles.appIcon} />
                <span className={styles.appLabel}>{shortcut.label}</span>
              </button>
            );
          })}
      </div>
      {/* System Tray */}
      <div className={styles.systemTray}>
        <button
          className={styles.settingsBtn}
          title="Settings"
          onClick={() => onTaskbarClick(SettingsItem.id)}
        >
          <Settings className={styles.trayIcon} size={20} />
        </button>
        <Wifi className={styles.trayIcon} size={20} />
        <Volume2 className={styles.trayIcon} size={20} />
        <Battery className={styles.trayIcon} size={20} />
        <div className={styles.clock}>
          <p className={styles.time}>{timeString}</p>
          <p className={styles.date}>{dateString}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskBar;
