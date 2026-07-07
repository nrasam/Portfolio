import { createContext, useContext } from "react";

// Shared theme state for the desktop shell and any component that needs it
export const ThemeContext = createContext(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
