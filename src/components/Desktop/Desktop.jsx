import Shortcut from "../Shortcut/Shortcut";
import styles from "./Desktop.module.css";

function Desktop({ shortcuts, onShortcutClick, themeConfig, anyOpenWindows }) {
  return (
    <div className={styles.desktop}>
      {/* Wallpaper if one exists */}
      {themeConfig.wallpaper && (
        <div
          className={styles.wallpaper}
          style={{
            backgroundImage: `url(${themeConfig.wallpaper})`,
          }}
        ></div>
      )}

      {/* Background pattern to go over the wallpaper*/}
      <div className={styles.bgPattern}></div>

      {/* Contains all the desktop shortcuts */}
      <div className={styles.shortcutContainer}>
        {shortcuts.slice(0, 7).map((shortcut) => (
          <Shortcut
            key={shortcut.id}
            label={shortcut.label}
            onClick={() => onShortcutClick(shortcut.id)}
            icon={shortcut.icon}
          />
        ))}
      </div>

      {/* The game corner */}
      <Shortcut
        label={shortcuts[7].label}
        onClick={() => onShortcutClick(8)}
        icon={shortcuts[7].icon}
        badgeClass={"gameBadge"}
        gameCorner={true}
      />

      {/* Welcome Overlay */}
      {!anyOpenWindows && (
        <div className={styles.welcomeOverlay}>
          <h1 className={styles.welcomeTitle}>Welcome to My Portfolio</h1>
          <p className={styles.welcomeSubtitle}>
            Double-click shortcuts to open them • Drag windows to move them •
            Resize windows by dragging a corner
          </p>
          <div className={styles.welcomeActions}>
            <button
              className={styles.getStartedBtn}
              onClick={() => onShortcutClick(1)}
            >
              About Me
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
