import { Briefcase, Calendar } from "lucide-react";
import styles from "./ExperienceApp.module.css";

const experiences = [
  {
    id: 1,
    company: "Canada Life Insurance",
    position: "Software Developer",
    period: "May 2023 - May 2025",
    location: "Toronto, ON, CA",
    description: "Worked in enterprise solutions.",
    achievements: [
      "achievement1",
      "achievement2",
      "Implemented CI/CD pipeline reducing deployment time by 75%",
    ],
    technologies: ["Appian", "Java Springboot", "YAML", "MariaDB"],
  },
  {
    id: 2,
    company: "FDM Group",
    position: "Consultant",
    period: "November 2022 - August 2025",
    location: "Toronto, ON, CA",
    description: "Under went intense consultant training.",
    achievements: [
      "Worked on pod projects",
      "Nominated for Consultant of the Month",
      "Learned a bunch",
      "Something else",
    ],
    technologies: ["Java", "React", "Java Springboot", "Selenium & Cucumber"],
  },
  {
    id: 3,
    company: "Seneca Polytechnic",
    position: "Programming Tutor",
    period: "Jan 2022 - Aug 2022",
    location: "Toronto, ON, CA",
    description: "Tutored 1st and 2nd students in OOP and UNIX",
    achievements: [
      "Kept students engaged with custom soundboard 🎹",
      "Tested students with weekly quizzes",
    ],
    technologies: ["C", "C++", "Unix"],
  },
];

function ExperienceApp() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.pageHeader}>
          <Briefcase size={32} />
          <h1 className={styles.pageTitle}>Work Experience</h1>
        </div>

        <div className={styles.experienceList}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.experienceCard}>
              <div className={styles.cardTop}>
                <div>
                  <h2 className={styles.position}>{exp.position}</h2>
                  <h3 className={styles.company}>{exp.company}</h3>
                  <p className={styles.description}>{exp.description}</p>
                </div>
                <div className={styles.cardMeta}>
                  <div className={styles.periodRow}>
                    <Calendar size={32} />
                    <span>{exp.period}</span>
                  </div>
                  <div className={styles.location}>{exp.location}</div>
                </div>
              </div>

              <div className={styles.achievementsSection}>
                <h4 className={styles.sectionLabel}>Key Achievements:</h4>
                <ul className={styles.achievementsList}>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className={styles.achievementItem}>
                      <span className={styles.bullet}>•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.techSection}>
                <h4 className={styles.sectionLabel}>Technologies:</h4>
                <div className={styles.techTags}>
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceApp;
