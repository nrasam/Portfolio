import styles from "./Window.module.css";
import { useRef, useState } from "react";

function Window({ title, children, onMinimizeClick, onCloseClick }) {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      setPosition({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    }
  };

  const handleMouseUp = (e) => {
    isDragging.current = false;
    dragOffset.current = { x: 0, y: 0 };
  };

  return (
    <div
      className={styles.window}
      style={{ left: position.x, top: position.y }}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.ribbon} onMouseDown={handleMouseDown}>
        <p>{title}</p>
        <button onClick={onMinimizeClick}>-</button>
        <button>+</button>
        <button className={styles.closeBtn} onClick={onCloseClick}>
          X
        </button>
      </div>
      <div className={styles.windowContent}>{children}</div>
    </div>
  );
}

export default Window;
