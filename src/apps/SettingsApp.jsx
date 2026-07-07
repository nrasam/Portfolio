import { Palette, Check } from "lucide-react";
import styles from "./SettingsApp.module.css";

import { useTheme } from "../context/ThemeContext";

const themes = [
  {
    id: "default",
    name: "Default",
    description: "Classic gradient desktop",
    preview: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    colors: {
      primary: "#667eea",
      secondary: "#764ba2",
    },
  },
  {
    id: "fantasy",
    name: "Fantasy RPG",
    description: "Medieval fantasy adventure",
    preview: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
    colors: {
      primary: "#134e5e",
      secondary: "#71b280",
    },
  },
  {
    id: "cyberpunk",
    name: "Sci-Fi Cyberpunk",
    description: "Neon-lit futuristic city",
    preview: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    colors: {
      primary: "#0f0c29",
      secondary: "#ff00ff",
    },
  },
  {
    id: "kittens",
    name: "Cute Kittens",
    description: "Adorable fuzzy friends",
    preview: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    colors: {
      primary: "#ffecd2",
      secondary: "#fcb69f",
    },
  },
  {
    id: "xp",
    name: "Retro XP",
    description: "Classic Windows XP nostalgia",
    preview:
      "linear-gradient(to bottom, #5b9bd1 0%, #a8d0ed 40%, #6ab04c 40%, #4a8a2e 100%)",
    colors: {
      primary: "#1166cf",
      secondary: "#3c9a2e",
    },
  },
];

function SettingsApp() {
  const { theme: currentTheme, setTheme: onThemeChange } = useTheme();

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.pageHeader}>
          <Palette size={32} style={{ color: "purple" }} />
          <h1 className={styles.pageTitle}>Desktop Settings</h1>
        </div>

        <div className={styles.appearanceSection}>
          <h2 className={styles.appearanceTitle}>Appearance</h2>
          <p className={styles.appearanceSubtitle}>
            Choose your desktop theme and wallpaper
          </p>

          <div className={styles.themeGrid}>
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => onThemeChange(theme.id)}
                className={`${styles.themeButton} ${currentTheme === theme.id ? styles.themeButtonActive : styles.themeButtonInactive}`}
              >
                {/* Preview */}
                <div
                  className={styles.themePreview}
                  style={{ background: theme.preview }}
                />

                {/* Info */}
                <div className={styles.themeInfoRow}>
                  <div>
                    <h3 className={styles.themeName}>{theme.name}</h3>
                    <p className={styles.themeDescription}>
                      {theme.description}
                    </p>
                  </div>
                  {currentTheme === theme.id && (
                    <div className={styles.checkBadge}>
                      <Check style={{ color: "white" }} />
                    </div>
                  )}
                </div>

                {/* Color Swatches */}
                <div className={styles.swatches}>
                  <div
                    className={styles.swatch}
                    style={{ backgroundColor: theme.colors.primary }}
                  />
                  <div
                    className={styles.swatch}
                    style={{ backgroundColor: theme.colors.secondary }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className={styles.tipBox}>
          <div className={styles.tipInner}>
            <div className={styles.tipIcon}>
              <span className={styles.tipIconText}>i</span>
            </div>
            <div>
              <h4 className={styles.tipTitle}>Tip</h4>
              <p className={styles.tipText}>
                Your theme preference will be applied immediately. Each theme
                features a unique wallpaper and color scheme to personalize your
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsApp;
