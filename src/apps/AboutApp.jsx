import styles from "./AboutApp.module.css";
import { Mail, MapPin, Code } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

function AboutApp() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Profile Header */}
        <div className={styles.profileHeader}>
          <div className={styles.avatar}>NR</div>
          <div className={styles.profileInfo}>
            <h1 className={styles.name}>Noël Rasam</h1>
            <p className={styles.title}>
              Software Developer & Computer Science Student
            </p>
            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <MapPin></MapPin>
                <span>Vaughan, ON, CA</span>
              </div>
              <div className={styles.metaItem}>
                <Code></Code>
                <span>2-3 years experience</span>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/nrasam"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btnSocial} ${styles.btnGithub}`}
              >
                <SiGithub></SiGithub>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/novell-rasam-085467204/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btnSocial} ${styles.btnLinkedin}`}
              >
                <FaLinkedin></FaLinkedin>
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:novell.rasam@gmail.com?subject=Portfolio Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btnSocial} ${styles.btnEmail}`}
              >
                <Mail></Mail>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.aboutText}>
            Software Developer with hands-on experience in enterprise software
            development, including Appian platform solutions, Java API services,
            and CI/CD modernization. Known for collaborating effectively in
            agile teams, solving technical problems, and contributing to
            reliable, user-focused systems.
          </p>
          <p className={styles.aboutText}>
            Currently completing my degree while maintaining strong academic
            performance, with an active focus on building personal software
            projects and expanding my experience in modern web development. I am
            especially interested in React-based development, where I continue
            to strengthen my skills by creating practical, hands-on projects
            that sharpen my problem-solving and product-building abilities.
          </p>
        </div>

        {/* Quick Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statCardBlue}>
            <div className={styles.statNumberBlue}>6+</div>
            <div className={styles.statLabel}>Projects Completed</div>
          </div>
          <div className={styles.statCardPurple}>
            <div className={styles.statNumberPurple}>12</div>
            <div className={styles.statLabel}>Technologies Known</div>
          </div>
          <div className={styles.statCardGreen}>
            <div className={styles.statNumberGreen}>9.0/9.0</div>
            <div className={styles.statLabel}>GPA</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutApp;
