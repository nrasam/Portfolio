import Shortcut from "../Shortcut/Shortcut";
import styles from "./Desktop.module.css";
import { useEffect, useRef } from "react";

function Desktop({ shortcuts, onShortcutClick, onDesktopReady }) {
  const desktopRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      onDesktopReady(
        desktopRef.current.offsetHeight,
        desktopRef.current.offsetWidth,
      );
    };

    window.addEventListener("resize", handleResize);

    if (desktopRef.current) {
      onDesktopReady(
        desktopRef.current.offsetHeight,
        desktopRef.current.offsetWidth,
      );
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [onDesktopReady]);

  return (
    <div ref={desktopRef} className={styles.desktop}>
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
