import styles from "./Shortcut.module.css";

function Shortcut({ label, emoji }) {
  return (
    <div className={styles.shortcut}>
      <button className={styles.shortcutButton}>{emoji}</button>
      <p className={styles.label}>{label}</p>
    </div>
  );
}

export default Shortcut;
