import { Code2, Database, Cloud, Wrench } from "lucide-react";
import styles from "./SkillsApp.module.css";
import { useEffect, useState } from "react";

// The skills are grouped by area so each section can render its own visual style and list
const skillCategories = [
  {
    id: 1,
    category: "Frontend Development",
    icon: <Code2 size={20} />,
    color: "blue",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 85 },
    ],
  },
  {
    id: 2,
    category: "Backend Development",
    icon: <Database size={20} />,
    color: "green",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "GraphQL", level: 80 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    id: 3,
    category: "Cloud & DevOps",
    icon: <Cloud size={20} />,
    color: "purple",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 85 },
      { name: "Terraform", level: 70 },
      { name: "Linux", level: 80 },
    ],
  },
  {
    id: 4,
    category: "Tools & Other",
    icon: <Wrench size={20} />,
    color: "orange",
    skills: [
      { name: "Git", level: 95 },
      { name: "Jest/Testing", level: 85 },
      { name: "Webpack/Vite", level: 80 },
      { name: "Agile/Scrum", level: 90 },
      { name: "Jira", level: 85 },
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
          <h3 className={styles.additionalTitle}>Additional Competencies</h3>
          <div className={styles.tagList}>
            {[
              "Problem Solving",
              "Code Review",
              "Technical Writing",
              "System Design",
              "Performance Optimization",
              "API Design",
              "Dubugging",
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
