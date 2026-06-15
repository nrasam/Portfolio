//import { Children } from "react";

import styles from "./Window.module.css";

function Window({ title, hidden, children }) {
  return (
    <div className={styles.window} hidden={hidden}>
      <div className={styles.ribbon}>
        <p>{title}</p>
        <button>-</button>
        <button>+</button>
        <button>X</button>
      </div>
      <div className={styles.windowContent}>{children}</div>
    </div>
  );
}

export default Window;
