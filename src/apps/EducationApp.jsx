import { GraduationCap, Award, BookOpen } from "lucide-react";
import styles from "./EducationApp.module.css";

const education = [
  {
    id: 1,
    degree: "Honours Bachelor of Science in Computer Science",
    school: "York University",
    period: "2025 to Present",
    gpa: "9.0/9.0",
    description: "Learning logic, probability, OOP, and computational theory.",
    achievements: [
      "President’s Honour Roll all semesters",
      "Helped start a coding club [Codexperts]; Acting secretary",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Software Development",
    school: "Seneca Polytechnic",
    period: "2019 - 2020",
    gpa: "4.0/4.0",
    description: "...",
    achievements: [
      "Colloborated in a capstone to create a chatroom wesbite where users could watch YouTube together.",
      "Became a programming tutor for Seneca's learning centre",
      "Graduated with Honors",
    ],
  },
];

const certifications = [
  {
    id: 1,
    name: "Appian Associate Developer",
    issuer: "Appian",
    date: "March 2023",
    credentialId: "AWS-SA-2023-12345",
  },
  {
    id: 2,
    name: "Microsoft Cloud",
    issuer: "Microsoft",
    date: "August 2022",
    credentialId: "GCP-PD-2022-67890",
  },
  {
    id: 3,
    name: "Cert 3",
    issuer: "CNCF",
    date: "January 2022",
    credentialId: "CKA-2022-54321",
  },
];

function EducationApp() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Education Section */}
        <div className={styles.educationSection}>
          <div className={styles.sectionHeader}>
            <GraduationCap size={32} />
            <h1 className={styles.sectionTitle}>Education</h1>
          </div>

          <div className={styles.eduList}>
            {education.map((edu) => (
              <div key={edu.id} className={styles.eduCard}>
                <div className={styles.cardTop}>
                  <div>
                    <h2 className={styles.degree}>{edu.degree}</h2>
                    <h3 className={styles.school}>{edu.school}</h3>
                    <p className={styles.eduDescription}>{edu.description}</p>
                  </div>
                  <div className={styles.cardMeta}>
                    <div className={styles.period}>{edu.period}</div>
                    <div className={styles.gpa}>GPA: {edu.gpa}</div>
                  </div>
                </div>

                <div>
                  <h4 className={styles.achievementsHeader}>
                    <Award />
                    Achievements:
                  </h4>
                  <ul className={styles.achievementsList}>
                    {edu.achievements.map((achievement) => (
                      <li
                        key={achievement.id}
                        className={styles.achievementItem}
                      >
                        <span className={styles.bullet}>•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className={styles.sectionHeader}>
            <BookOpen size={32} />
            <h1 className={styles.sectionTitle}>Certifications</h1>
          </div>

          <div className={styles.certGrid}>
            {certifications.map((cert) => (
              <div key={cert.id} className={styles.certCard}>
                <div className={styles.certInner}>
                  <div className={styles.certIconBox}>
                    <Award />
                  </div>
                  <div className={styles.certBody}>
                    <h3 className={styles.certName}>{cert.name}</h3>
                    <p className={styles.certIssuer}>{cert.issuer}</p>
                    <div className={styles.certMeta}>
                      <div>Issued: {cert.date}</div>
                      <div>ID: {cert.credentialId}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationApp;
