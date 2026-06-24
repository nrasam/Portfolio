import styles from "./Shortcut.module.css";

function Shortcut({ label, emoji, onClick, theme, icon: Icon }) {
  return (
    <button type="button" className={styles.shortcut} onDoubleClick={onClick}>
      <div className={styles.iconContainer}>
        {theme === "default" ? <Icon size={32} /> : <span>{emoji}</span>}
      </div>
      <p className={styles.label}>{label}</p>
    </button>
  );
}

export default Shortcut;
