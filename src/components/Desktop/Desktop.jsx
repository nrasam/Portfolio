import Shortcut from "../Shortcut/Shortcut";
import styles from "./Desktop.module.css";

function Desktop() {
  return (
    <div className={styles.desktop}>
      <Shortcut label="About Me"></Shortcut>
      <Shortcut></Shortcut>
      <Shortcut></Shortcut>
      <Shortcut></Shortcut>
      <Shortcut></Shortcut>
      <Shortcut></Shortcut>
    </div>
  );
}

export default Desktop;
