//import { Children } from "react";

import styles from "./Window.module.css";

function Window({ title }) {
  return <div className={styles.window}>{title}</div>;
}

export default Window;
