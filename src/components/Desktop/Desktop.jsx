import Shortcut from "../Shortcut/Shortcut";
import styles from "./Desktop.module.css";
import { useRef } from "react";

function Desktop({
  shortcuts,
  onShortcutClick,
  theme,
  themeConfig,
  anyOpenWindows,
}) {
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
      <Shortcut
        label={shortcuts[7].label}
        emoji={shortcuts[7].emoji}
        onClick={() => onShortcutClick(8)}
        theme={theme}
        icon={shortcuts[7].icon}
        badgeClass={"gameBadge"}
        gameCorner={true}
      />
      {!anyOpenWindows && (
        <div className={styles.welcomeOverlay}>
          <h1 className={styles.welcomeTitle}>Welcome to My Portfolio</h1>
          <p className={styles.welcomeSubtitle}>
            Explore the desktop to learn more about me!
          </p>
          <div className={styles.welcomeActions}>
            <button
              className={styles.getStartedBtn}
              onClick={() => onShortcutClick(1)}
            >
              Get Started
            </button>
            <button
              className={styles.viewProjectsBtn}
              onClick={() => onShortcutClick(6)}
            >
              View Projects
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Desktop;
