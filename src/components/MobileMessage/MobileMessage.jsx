import styles from "./MobileMessage.module.css";

function MobileMessage() {
  return (
    <div className={styles.bsod}>
      <p className={styles.sadFace}>:(</p>
      <p className={styles.header}>Your browser ran into a problem.</p>
      <p className={styles.errorCode}>
        PORTFOLIO_METAPHOR_INCOMPATIBLE_WITH_MOBILE
      </p>
      <p className={styles.body}>
        This portfolio isn't your average portfolio. It uses desktop OS design
        metaphors — draggable windows, a taskbar, desktop icons — and is best
        experienced on a desktop or laptop.
      </p>
      <p className={styles.body}>Please visit again on a larger screen.</p>
      <p className={styles.footer}>Gathering experience data: 100% complete</p>
      <p className={styles.footer}>
        Error code: 0x000_NEEDS_DESKTOP <span className={styles.cursor}>_</span>
      </p>
    </div>
  );
}

export default MobileMessage;
