import Shortcut from "../Shortcut/Shortcut";
import styles from "./Desktop.module.css";
import { useRef } from "react";

import { Gamepad2 } from "lucide-react";

function Desktop({ shortcuts, onShortcutClick, theme }) {
  const desktopRef = useRef(null);

  return (
    <div ref={desktopRef} className={styles.desktop}>
      <div
        className={styles.wallpaper}
        style={{
          // backgroundImage: `url(${themeConfigs[theme].wallpaper})`,
          opacity: 0.4,
        }}
      ></div>
      <div className={styles.bgPattern}>
        <div
          className={styles.bgPatternInner}
          style={{
            backgroundImage: `repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 2px,
                      white 2px,
                      white 4px
                    ),
                    repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 2px,
                      white 2px,
                      white 4px
                    )`,
          }}
        />
      </div>
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
        {shortcuts.map((shortcut) => (
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
      {/* <Shortcut
        className={styles.gameShortcut}
        label="Game"
        emoji="🎮"
        onClick={() => onShortcutClick(8)}
        theme={theme}
        icon={Gamepad2}
      /> */}
    </div>
  );
}

export default Desktop;
