import styles from "./Window.module.css";
import { useEffect, useRef, useState } from "react";

function Window({
  title,
  children,
  onMinimizeClick,
  onCloseClick,
  desktopDimensions,
}) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ height: "350px", width: "500px" });

  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);

  const prevSizeAndPosition = useRef({});

  const handleMouseDown = (e) => {
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    isDragging.current = true;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging.current) return;

      setPosition({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    // cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMaximizeWindow = () => {
    const currentMaxState = !isMaximized;
    setIsMaximized(!isMaximized);

    if (currentMaxState) {
      prevSizeAndPosition.current = { size, position };
      //setSize({ height: "93.75%", width: "100%" });
      setSize({
        height: desktopDimensions.current.height,
        width: desktopDimensions.current.width,
      });
      setPosition({ x: 0, y: 0 });
    } else {
      setSize(prevSizeAndPosition.current.size);
      setPosition(prevSizeAndPosition.current.position);
    }
  };

  return (
    <div
      className={styles.window}
      style={{
        left: position.x,
        top: position.y,
        height: size.height,
        width: size.width,
      }}
    >
      <div className={styles.ribbon} onMouseDown={handleMouseDown}>
        <p>{title}</p>
        <button onClick={onMinimizeClick}>-</button>
        <button onClick={handleMaximizeWindow}>+</button>
        <button className={styles.closeBtn} onClick={onCloseClick}>
          X
        </button>
      </div>
      <div className={styles.windowContent}>{children}</div>
    </div>
  );
}

export default Window;
