import { Code2, Database, Cloud, Brain } from "lucide-react";
import styles from "./SkillsApp.module.css";
import { useEffect, useState } from "react";

// The skills are grouped by area so each section can render its own visual style and list
const skillCategories = [
  {
    id: 1,
    category: "Languages",
    icon: <Code2 size={20} />,
    color: "blue",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 80 },
      { name: "C/C++", level: 70 },
      { name: "TypeScript", level: 65 },
    ],
  },
  {
    id: 2,
    category: "Web & Frameworks",
    icon: <Database size={20} />,
    color: "green",
    skills: [
      { name: "HTML", level: 90 },
      { name: "React", level: 75 },
      { name: "CSS", level: 70 },
      { name: "Vite", level: 65 },
      { name: "Angular", level: 55 },
    ],
  },
  {
    id: 3,
    category: "Tools & DevOps",
    icon: <Cloud size={20} />,
    color: "purple",
    skills: [
      { name: "Appian", level: 95 },
      { name: "Relational Databases", level: 85 },
      { name: "Git", level: 70 },
      { name: "UNIX/Linux", level: 70 },
      { name: "GitLab CI/CD", level: 60 },
    ],
  },
  {
    id: 4,
    category: "Computer Science Subjects",
    icon: <Brain size={20} />,
    color: "orange",
    skills: [
      { name: "Object Oriented Programming", level: 95 },
      { name: "Discrete Mathematics", level: 90 },
      { name: "Calculus", level: 90 },
      { name: "Probability", level: 85 },
      { name: "Logic", level: 80 },
    ],
  },
];

// Color choices are centralized so the cards stay visually consistent across categories
const colorMap = {
  blue: {
    iconBg: "#3b82f6",
    textColor: "#2563eb",
    barColor: "#2563eb",
    cardBg: "#eff6ff",
    cardBorder: "#bfdbfe",
  },
  green: {
    iconBg: "#22c55e",
    textColor: "#16a34a",
    barColor: "#16a34a",
    cardBg: "#f0fdf4",
    cardBorder: "#bbf7d0",
  },
  purple: {
    iconBg: "#a855f7",
    textColor: "#9333ea",
    barColor: "#9333ea",
    cardBg: "#faf5ff",
    cardBorder: "#e9d5ff",
  },
  orange: {
    iconBg: "#f97316",
    textColor: "#ea580c",
    barColor: "#ea580c",
    cardBg: "#fff7ed",
    cardBorder: "#fed7aa",
  },
};

function SkillsApp() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Start with the bars at zero and let them animate in once the component is mounted
    const timer = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Skills & Technologies</h1>
          <p className={styles.pageSubtitle}>
            Proficiency levels slowly accurred through school, work, and
            personal projects
          </p>
        </div>

        <div className={styles.grid}>
          {/* Each category renders its own card with a matching color palette and skill list */}
          {skillCategories.map((category) => {
            const colors = colorMap[category.color];
            return (
              <div
                key={category.id}
                className={styles.categoryCard}
                style={{
                  backgroundColor: colors.cardBg,
                  borderColor: colors.cardBorder,
                }}
              >
                <div className={styles.categoryHeader}>
                  <div
                    className={styles.iconBox}
                    style={{ backgroundColor: colors.iconBg }}
                  >
                    {category.icon}
                  </div>
                  <h2 className={styles.categoryTitle}>{category.category}</h2>
                </div>

                <div className={styles.skillList}>
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className={styles.skillRow}>
                      <div className={styles.skillLabelRow}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span
                          className={styles.skillLevel}
                          style={{ color: colors.textColor }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className={styles.barTrack}>
                        <div
                          className={styles.barFill}
                          style={{
                            width: animated ? `${skill.level}%` : "0%",
                            backgroundColor: colors.barColor,
                            transitionDelay: `${idx * 0.2}s`, // Adds a staggered delay
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* These tags capture the extra strengths that do not fit neatly into a single proficiency bar */}
        <div className={styles.additionalSection}>
          <h3 className={styles.additionalTitle}>
            Additional Competencies & Soft Skills
          </h3>
          <div className={styles.tagList}>
            {[
              "Code Review",
              "Technical Writing",
              "Dubugging",
              "Problem Solving",
              "Tutoring/Teaching",
              "Communication",
              "Agile/Scrum",
              "Notion",
              "Time Management",
            ].map((skill, idx) => (
              <span key={idx} className={styles.tag}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsApp;
