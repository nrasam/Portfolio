import Shortcut from "../Shortcut/Shortcut";
import styles from "./Desktop.module.css";

function Desktop({ shortcuts, onShortcutClick }) {
  return (
    <div className={styles.desktop}>
      {shortcuts.map((shortcut) => (
        <Shortcut
          key={shortcut.label}
          label={shortcut.label}
          emoji={shortcut.emoji}
          onClick={() => onShortcutClick(shortcut.label)}
        />
      ))}
    </div>
  );
}

export default Desktop;
