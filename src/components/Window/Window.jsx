import styles from "./Window.module.css";
import { useEffect, useRef, useState } from "react";
import { X, Minus, Maximize2, Minimize2 } from "lucide-react";

function Window({
  title,
  children,
  onMinimizeClick,
  onCloseClick,
  zIndex,
  onFocus,
  isMinimized,
  theme,
  icon: Icon,
  openOrder,
}) {
  // Cascades newly opened windows
  // Using () => () stops the calculation from re-running pointlessly
  const [position, setPosition] = useState(() => ({
    x: 100 + (openOrder % 5) * 40 + Math.floor(Math.random() * 30) - 15,
    y: 100 + (openOrder % 5) * 40 + Math.floor(Math.random() * 30) - 15,
  }));

  const [size, setSize] = useState({ height: 650, width: 625 });

  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);

  const prevSizeAndPosition = useRef({});

  const isResizing = useRef(false);
  const resizeOffset = useRef({ x: 0, y: 0 });

  const resizeStartSize = useRef({ width: 0, height: 0 });

  const MIN_HEIGHT = 100;
  const MIN_WIDTH = 100;

  const handleMouseDown = (e) => {
    if (isMaximized) {
      return;
    }

    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    isDragging.current = true;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isMaximized) {
        return;
      }

      if (isDragging.current) {
        setPosition({
          x: e.clientX - dragOffset.current.x,
          y: e.clientY - dragOffset.current.y,
        });
      }

      if (isResizing.current) {
        const heightDelta = e.clientY - resizeOffset.current.y;
        const widthDelta = e.clientX - resizeOffset.current.x;

        let newHeight = resizeStartSize.current.height + heightDelta;
        let newWidth = resizeStartSize.current.width + widthDelta;

        if (newHeight < MIN_HEIGHT) {
          newHeight = MIN_HEIGHT;
          resizeStartSize.current.height = MIN_HEIGHT; // re-anchor size
          resizeOffset.current.y = e.clientY; // re-anchor mouse position
        }

        if (newWidth < MIN_WIDTH) {
          newWidth = MIN_WIDTH;
          resizeStartSize.current.width = MIN_WIDTH;
          resizeOffset.current.x = e.clientX;
        }

        setSize({
          height: newHeight,
          width: newWidth,
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
  }, [isMaximized]);

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
    resizeStartSize.current = { width: size.width, height: size.height };
  };

  if (theme) {
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
            <X />
          </button>
        </div>
        <div className={styles.windowContent}>{children}</div>
        {!isMaximized && (
          <div
            className={styles.resizeHandle}
            onMouseDown={handleResizeMouseDown}
          ></div>
        )}
      </div>
    );
  }

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
        overflow: isMaximized ? "visible" : "hidden",
      }}
      onMouseDown={onFocus}
    >
      <div className={styles.ribbon} onMouseDown={handleMouseDown}>
        <div className={styles.titleContainer}>
          <div className={styles.titleIcon}>
            <Icon size={20} />
          </div>
          <span className={styles.titleText}>{title}</span>
        </div>
        <div className={styles.windowControls}>
          <button className={styles.controlBtn} onClick={onMinimizeClick}>
            <Minus className={styles.controlBtnIcon} />
          </button>
          <button className={styles.controlBtn} onClick={handleMaximizeWindow}>
            {isMaximized ? (
              <Minimize2 className={styles.controlBtnIcon} />
            ) : (
              <Maximize2 className={styles.controlBtnIcon} />
            )}
          </button>
          <button
            className={`${styles.controlBtn} ${styles.closeBtn}`}
            onClick={onCloseClick}
          >
            <X className={styles.controlBtnIcon} />
          </button>
        </div>
      </div>
      <div className={styles.windowContent}>{children}</div>
      {!isMaximized && (
        <div
          className={styles.resizeHandle}
          onMouseDown={handleResizeMouseDown}
        ></div>
      )}
    </div>
  );
}

export default Window;
