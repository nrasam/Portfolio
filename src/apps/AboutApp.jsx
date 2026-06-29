import styles from "./AboutApp.module.css";

function AboutApp() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Profile Header */}
        <div className={styles.profileHeader}>
          <div className={styles.avatar}>NR</div>
          <div className={styles.profileInfo}>
            <h1 className={styles.name}>Noel Rasam</h1>
            <p className={styles.title}>
              Computer Science Student & future mad scientist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutApp;
