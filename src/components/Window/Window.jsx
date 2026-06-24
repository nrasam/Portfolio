import styles from "./Window.module.css";
import { useEffect, useRef, useState } from "react";

function Window({
  title,
  children,
  onMinimizeClick,
  onCloseClick,
  zIndex,
  onFocus,
  isMinimized,
}) {
  // const randomStartingPositionOffset = Math.floor(Math.random() * 25) + 1;
  const randomStartingPositionOffset = 0;
  const [position, setPosition] = useState({
    x: 100 + randomStartingPositionOffset,
    y: 100 + randomStartingPositionOffset,
  });
  const [size, setSize] = useState({ height: 350, width: 500 });

  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);

  const prevSizeAndPosition = useRef({});

  const isResizing = useRef(false);
  const resizeOffset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    dragOffset.current = {
      x: e.clientX,
      y: e.clientY,
    };
    isDragging.current = true;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging.current) {
        setPosition({
          x: e.clientX - dragOffset.current.x,
          y: e.clientY - dragOffset.current.y,
        });
      }

      if (isResizing.current) {
        const heightDelta = e.clientY - resizeOffset.current.y;
        const widthDelta = e.clientX - resizeOffset.current.x;

        const prevHeight = size.height;
        const prevWidth = size.width;

        setSize({
          height: prevHeight + heightDelta,
          width: prevWidth + widthDelta,
        });
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      isResizing.current = false;
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
      setSize({
        height: "calc(100% - var(--taskbar-height))",
        width: "100%",
      });
      setPosition({ x: 0, y: 0 });
    } else {
      setSize(prevSizeAndPosition.current.size);
      setPosition(prevSizeAndPosition.current.position);
    }
  };

  const handleResizeMouseDown = (e) => {
    isResizing.current = true;
    resizeOffset.current = { x: e.clientX, y: e.clientY };
  };

  return (
    <div
      className={styles.window}
      style={{
        left: position.x,
        top: position.y,
        height: size.height,
        width: size.width,
        zIndex: zIndex,
        visibility: isMinimized ? "hidden" : "visible",
      }}
      onMouseDown={onFocus}
    >
      <div className={styles.ribbon} onMouseDown={handleMouseDown}>
        <p>{title}</p>
        <button onClick={onMinimizeClick}>-</button>
        <button onClick={handleMaximizeWindow}>□</button>
        <button className={styles.closeBtn} onClick={onCloseClick}>
          X
        </button>
      </div>
      <div className={styles.windowContent}>{children}</div>
      <div
        className={styles.resizeHandle}
        onMouseDown={handleResizeMouseDown}
      ></div>
    </div>
  );
}

export default Window;
