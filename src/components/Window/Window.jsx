import styles from "./Window.module.css";
import { useEffect, useRef, useState } from "react";
import { X, Minus, Maximize2, Minimize2 } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const MIN_HEIGHT = 200;
const MIN_WIDTH = 200;

const TASKBAR_HEIGHT = 50;
const RIBBON_HEIGHT = 30;

function Window({
  title,
  children,
  onMinimizeClick,
  onCloseClick,
  zIndex,
  onFocus,
  isMinimized,
  icon: Icon,
  openOrder,
}) {
  const { theme } = useTheme();

  // Cascades newly opened windows
  // Using () => () stops the calculation from re-running pointlessly
  const [position, setPosition] = useState(() => ({
    x: 100 + (openOrder % 4) * 40 + Math.floor(Math.random() * 30) - 15,
    y: 100 + (openOrder % 4) * 40 + Math.floor(Math.random() * 30) - 15,
  }));

  const [size, setSize] = useState({ height: 650, width: 750 });

  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);

  const prevSizeAndPosition = useRef({});

  const isResizing = useRef(false);
  const resizeOffset = useRef({ x: 0, y: 0 });

  const resizeStartSize = useRef({ width: 0, height: 0 });

  // For cursor visual change logic
  const [isDraggingVisual, setIsDraggingVisual] = useState(false);

  const handleMouseDown = (e) => {
    if (isMaximized) {
      return;
    }

    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    isDragging.current = true;
    setIsDraggingVisual(true); // triggers re-render for cursor
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isMaximized) {
        return;
      }

      if (isDragging.current) {
        const newX = e.clientX - dragOffset.current.x;
        const newY = e.clientY - dragOffset.current.y;

        setPosition({
          // Max(0, ...) keeps window's position from being less than 0
          // Min(newX, maxX) stops the window from going past the screen
          x: Math.max(0, Math.min(newX, window.innerWidth - size.width)),
          y: Math.max(
            0,
            Math.min(newY, window.innerHeight - TASKBAR_HEIGHT - RIBBON_HEIGHT),
          ),
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
      setIsDraggingVisual(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    // cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMaximized, size]);

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
      {/* Titlebar where you can click & drag the window */}
      <div
        className={styles.ribbon}
        onMouseDown={handleMouseDown}
        style={{ cursor: isDraggingVisual ? "grabbing" : "grab" }}
      >
        {/* Window Title */}
        <div className={styles.titleContainer}>
          <div className={styles.titleIcon}>
            <Icon size={20} />
          </div>
          <span className={styles.titleText}>{title}</span>
        </div>

        {/* Window buttons */}
        <div className={styles.windowControls}>
          {/* Minimize button */}
          <button
            className={`${styles.controlBtn} ${styles.miniBtn}`}
            // className={styles.miniBtn}
            onClick={onMinimizeClick}
          >
            {theme === "xp" ? (
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: "bold",
                  color: "#3a2000",
                  lineHeight: 1,
                }}
              >
                –
              </span>
            ) : (
              <Minus className={styles.controlBtnIcon} />
            )}
          </button>
          {/* Maximize button */}
          <button
            className={`${styles.controlBtn} ${styles.maxBtn}`}
            onClick={handleMaximizeWindow}
          >
            {theme === "xp" ? (
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: "bold",
                  color: "#0a3000",
                  lineHeight: 1,
                }}
              >
                {isMaximized ? "❐" : "🗖"}
              </span>
            ) : isMaximized ? (
              <Minimize2 className={styles.controlBtnIcon} />
            ) : (
              <Maximize2 className={styles.controlBtnIcon} />
            )}
          </button>
          {/* Close button */}
          <button
            className={`${styles.controlBtn} ${styles.closeBtn}`}
            onClick={onCloseClick}
          >
            <X className={styles.controlBtnIcon} />
          </button>
        </div>
      </div>
      {/* Content of window */}
      <div className={styles.windowContent}>{children}</div>
      {/* Resize handle if not maximized */}
      {!isMaximized && (
        <div
          className={styles.resizeHandle}
          onMouseDown={handleResizeMouseDown}
        ></div>
      )}
      {theme === "xp" && (
        <div>
          {/* XP Menu Bar stripe */}
          <div
            style={{
              height: "4px",
              background:
                "linear-gradient(to right, #1166e8, #4d9cf7, #1166e8)",
            }}
          />
          {/* XP Status bar */}
          <div
            style={{
              height: "20px",
              background: "linear-gradient(to bottom, #d4d0c8, #c8c4bc)",
              borderTop: "1px solid #999",
              display: "flex",
              alignItems: "center",
              paddingLeft: "6px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                color: "#333",
                fontFamily: "Tahoma, sans-serif",
              }}
            >
              {title}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Window;
