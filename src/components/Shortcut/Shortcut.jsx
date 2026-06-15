import styles from "./Shortcut.module.css";

function Shortcut({ label, emoji, onClick }) {
  return (
    <div className={styles.shortcut}>
      <button type="button" className={styles.shortcutButton} onClick={onClick}>
        {emoji}
      </button>
      <p className={styles.label}>{label}</p>
    </div>
  );
}

export default Shortcut;
