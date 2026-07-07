import { GraduationCap, Award, BookOpen } from "lucide-react";
import styles from "./EducationApp.module.css";

const education = [
  {
    id: 1,
    degree: "Honours Bachelor of Science in Computer Science",
    school: "York University",
    period: "2025 to Present",
    gpa: "9.0/9.0",
    description:
      "At York University, I’m building a strong academic foundation in computer science while staying actively involved in the programming community as a founding member and secretary of a student club. I’m also maintaining a perfect GPA and continuing to grow through coursework and hands-on technical projects.",
    achievements: [
      "President’s Honour Roll all semesters",
      "Founding member of the CodeXperts programming club | Acting secretary",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Software Development",
    school: "Seneca Polytechnic",
    period: "2019 - 2020",
    gpa: "4.0/4.0",
    description:
      "Developed strong technical and communication skills through software development studies and tutoring at Seneca Polytechnic.",
    achievements: [
      "Supported 1st- and 2nd-year students with C, C++, and UNIX tutoring",
      "Helped students understand difficult concepts and debug code",
      "Graduated with High Honours",
      "Colloborated on a capstone project to create a website where users could watch YouTube videos together in chatrooms",
    ],
  },
];

const certifications = [
  {
    id: 1,
    name: "Certified Associate Appian Developer",
    issuer: "Appian",
    date: "Dec 2024",
  },
  {
    id: 2,
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    date: "Jan 2023",
    credentialId: "994548802",
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
                      {cert.credentialId && <div>ID: {cert.credentialId}</div>}
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
