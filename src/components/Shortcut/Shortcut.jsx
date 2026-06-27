import styles from "./Shortcut.module.css";

function Shortcut({ label, emoji, onClick, theme, icon: Icon }) {
  return (
    <button type="button" className={styles.shortcut} onDoubleClick={onClick}>
      <div className={styles.iconContainer}>
        {theme === "default" ? <Icon size={20} /> : <span>{emoji}</span>}
      </div>
      <span className={styles.label}>{label}</span>
    </button>
  );
}

export default Shortcut;
