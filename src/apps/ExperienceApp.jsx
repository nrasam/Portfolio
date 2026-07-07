import { Briefcase, Calendar } from "lucide-react";
import styles from "./ExperienceApp.module.css";

const experiences = [
  {
    id: 1,
    company: "Canada Life Insurance",
    position: "Software Developer [Contractor]",
    period: "May 2023 - May 2025",
    location: "Toronto, ON, CA",
    description:
      "Delivered software solutions across Appian, Java API services, and CI/CD modernization initiatives, contributing to enterprise tools that improved workflow efficiency and system reliability. Collaborated with an agile team to build and maintain applications, automate deployment processes, and support database and integration work.",
    achievements: [
      "Helped develop Canada Life's first fully automated enterprise Case and Task Management system and Rules Engine on Appian, streamlining manual business processes and improving user productivity",
      "Built UIs, process models, and business rules using Appian’s low-code platform to accelerate delivery of business features",
      "Contributed to maintenance and enhancement of the Common Document Service API in Java, supporting reliable document management across applications",
      "Participated in migrating pipelines from Bamboo to GitLab CI/CD and wrote YAML scripts to automate build, test, and deployment stages",
      "Maintained MariaDB databases to support data integrity and query performance",
      "Worked on Appian-Kafka integration to enable real-time messaging between Appian and external systems",
      "Collaborated in an agile environment, participating in code reviews, troubleshooting, and feature delivery",
    ],
    technologies: [
      "Agile",
      "Appian",
      "Java",
      "Springboot",
      "YAML",
      "Relational Databases",
    ],
  },
  {
    id: 2,
    company: "FDM Group",
    position: "Consultant Trainee",
    period: "November 2022 - August 2025",
    location: "Toronto, ON, CA",
    description:
      "Completed consultant training in Java, SQL, Selenium, and software development methodologies, while collaborating on team-based simulations and developing the technical and professional skills needed for client-facing roles.",
    achievements: [
      "Completed intensive training in Java, SQL, Selenium, and software development methodologies to prepare for a consultant role",
      "Collaborated with peers on project simulations, applying technical concepts in team-based environments",
      "Developed consulting, communication, and problem-solving skills through mentorship and structured professional training",
      "Nominated for Consultant of the Month while at my time at Canada Life",
    ],
    technologies: ["Java", "React", "Springboot", "Selenium", "SQL"],
  },
  {
    id: 3,
    company: "Seneca Learning Centre",
    position: "Programming Tutor",
    period: "Jan 2022 - Aug 2022",
    location: "Toronto, ON, CA",
    description:
      "Supported first- and second-year students in learning core programming and UNIX concepts by leading review sessions, explaining difficult material clearly, and helping students debug their code.",
    achievements: [
      "Tutored students in C, C++, and UNIX, helping them strengthen foundational programming skills",
      "Developed weekly lesson plans and practice questions to reinforce course content and improve student understanding",
      "Explained complex concepts in a way students could understand, improving comprehension and confidence",
      "Helped students debug code and troubleshoot programming issues",
      "Kept sessions engaging and encouraged student participation through a custom soundboard 🎹 and supportive teaching style",
    ],
    technologies: ["C", "C++", "Unix", "Microsoft Office"],
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
                    <Calendar size={20} />
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
