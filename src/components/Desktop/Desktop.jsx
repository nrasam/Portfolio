import Shortcut from "../Shortcut/Shortcut";
import styles from "./Desktop.module.css";
import { useRef } from "react";

function Desktop({ shortcuts, onShortcutClick, theme }) {
  const desktopRef = useRef(null);

  return (
    <div ref={desktopRef} className={styles.desktop}>
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
    </div>
  );
}

export default Desktop;
