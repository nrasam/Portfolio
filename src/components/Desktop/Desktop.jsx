import Shortcut from "../Shortcut/Shortcut";
import styles from "./Desktop.module.css";
import { useRef } from "react";

function Desktop({ shortcuts, onShortcutClick }) {
  const desktopRef = useRef(null);

  return (
    <div ref={desktopRef} className={styles.desktop}>
      {shortcuts.map((shortcut) => (
        <Shortcut
          key={shortcut.id}
          label={shortcut.label}
          emoji={shortcut.emoji}
          onClick={() => onShortcutClick(shortcut.id)}
        />
      ))}
    </div>
  );
}

export default Desktop;
