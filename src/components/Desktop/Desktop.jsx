import Shortcut from "../Shortcut/Shortcut";
import styles from "./Desktop.module.css";

function Desktop() {
  return (
    <div className={styles.desktop}>
      <Shortcut label="About Me" emoji="🧑🏻"></Shortcut>
      <Shortcut label="Contact Me" emoji="📧"></Shortcut>
      <Shortcut label="Education" emoji="🎓"></Shortcut>
      <Shortcut label="Experience" emoji="💼"></Shortcut>
      <Shortcut label="Skills" emoji="📊"></Shortcut>
      <Shortcut label="My Projects" emoji="⚡"></Shortcut>
    </div>
  );
}

export default Desktop;
