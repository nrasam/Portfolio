import styles from "./Shortcut.module.css";

function Shortcut({
  label,
  emoji,
  onClick,
  theme,
  icon: Icon,
  badgeClass,
  gameCorner,
}) {
  return gameCorner ? (
    <div className={styles.gameCorner}>
      <button type="button" className={styles.shortcut} onDoubleClick={onClick}>
        {badgeClass && <div className={styles[badgeClass]}>Fun!</div>}
        <div className={styles.gameIconContainer}>
          {/* {theme === "default" ? <Icon size={20} /> : <span>{emoji}</span>} */}
          <Icon size={20} />
        </div>
        <span className={styles.label}>{label}</span>
      </button>
    </div>
  ) : (
    <button type="button" className={styles.shortcut} onDoubleClick={onClick}>
      {badgeClass && <div className={styles[badgeClass]}>Fun!</div>}
      <div className={styles.iconContainer}>
        {/* {theme === "default" ? <Icon size={20} /> : <span>{emoji}</span>} */}
        <Icon size={20} />
      </div>
      <span className={styles.label}>{label}</span>
    </button>
  );
}

export default Shortcut;
