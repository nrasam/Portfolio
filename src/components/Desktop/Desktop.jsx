import Shortcut from "../Shortcut/Shortcut";
import styles from "./Desktop.module.css";
import { useRef } from "react";

import { Gamepad2 } from "lucide-react";

function Desktop({ shortcuts, onShortcutClick, theme, themeConfig }) {
  const desktopRef = useRef(null);

  return (
    <div ref={desktopRef} className={styles.desktop}>
      {themeConfig.wallpaper && (
        <div
          className={styles.wallpaper}
          style={{
            backgroundImage: `url(${themeConfig.wallpaper})`,
          }}
        ></div>
      )}
      <div className={styles.bgPattern}></div>
      <div className={styles.welcomeContainer}>
        <h1 className={styles.welcomeHeader}>Welcome to My Portfolio</h1>
        <h2 className={styles.welcomeSubheader}>
          Click on any application to explore!
        </h2>
        <div className={styles.welcomeBtnContainer}>
          <button className={styles.getStartedBtn}>Get Started</button>
          <button className={styles.viewProjectsBtn}>View Projects</button>
        </div>
      </div>
      <div className={styles.shortcutContainer}>
        {shortcuts.slice(0, 7).map((shortcut) => (
          <Shortcut
            key={shortcut.id}
            label={shortcut.label}
            emoji={shortcut.emoji}
            onClick={() => onShortcutClick(shortcut.id)}
            theme={theme}
            icon={shortcut.icon}
          />
        ))}
      </div>
      {/* Lesson learned: Don't give a component ClassName */}
      <div className={styles.gameShortcut}>
        <Shortcut
          label={shortcuts[7].label}
          emoji={shortcuts[7].emoji}
          onClick={() => onShortcutClick(8)}
          theme={theme}
          icon={shortcuts[7].icon}
        />
      </div>
    </div>
  );
}

export default Desktop;
