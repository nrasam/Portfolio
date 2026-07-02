import { Folder, ExternalLink } from "lucide-react";
import styles from "./ProjectsApp.module.css";

import { SiGithub } from "react-icons/si";
import { FaStar } from "react-icons/fa";

import img from "../assets/portfolio_os.jpg";

const profileImage = new URL("../assets/portfolio_os.jpg", import.meta.url)
  .href;
console.log(img);

const projects = [
  {
    id: 1,
    name: "Desktop Portfolio OS",
    description:
      "This very site! A React-based portfolio styled as a desktop OS with draggable, resizable windows.",
    image: "portfolio_os.jpg",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Features draggable, resizeable, minimizeable, and maximizeable windows",
      "Features draggable, resizeable, minimizeable, and maximizeable windows",
      "Features draggable, resizeable, minimizeable, and maximizeable windows",
    ],
    github: "https://github.com/nrasam/Portfolio",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    name: "Geography Quiz",
    description: "Final Project for Intro to Computing at York University.",
    image: { img },
    technologies: ["JavaScript", "HTML", "CSS"],
    highlights: [
      "Quizzes you on your geography knowledge",
      "Quizzes you on your geography knowledge",
      "Quizzes you on your geography knowledge",
    ],
    github: "https://github.com/nrasam/GeographyQuiz",
    demo: "https://nrasam.github.io/GeographyQuiz/",
    featured: true,
  },
  {
    id: 3,
    name: "Food Matters",
    description:
      "This app is a proof of concept where you add and remove food from a list. Each food item has a weight and expiration date property.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    technologies: ["Android Studio", "Java"],
    highlights: [
      "You can add and remove food from a virtual pantry",
      "You can add and remove food from a virtual pantry",
      "You can add and remove food from a virtual pantry",
    ],
    github: "https://github.com/nrasam/Food_Matters",
    demo: null,
    featured: true,
  },
  {
    id: 4,
    name: "Make Gains",
    description: "A calorie tracker in the form of a human nutritional facts.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    technologies: ["React", "TypeScript", "Weather API", "Mapbox"],
    highlights: [
      "Add food items from a list",
      "Add food items from a list",
      "Add food items from a list",
    ],
    github: "https://github.com/nrasam/make-gains",
    demo: "https://nrasam.github.io/make-gains/make-gains/",
    featured: false,
  },
  {
    id: 5,
    name: "Vocab Builder",
    description: "A vocabulary builder app that uses active recall.",
    image:
      "https://user-images.githubusercontent.com/66037599/167320456-a01674a9-0b6f-4a38-a7df-840094b1559a.png",
    technologies: ["TypeScript"],
    highlights: [
      "Uses active recall",
      "Uses active recall",
      "Uses active recall",
    ],
    github: "https://github.com/nrasam/vocab-builder",
    demo: null,
    featured: false,
  },
];

function ProjectsApp() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.pageHeader}>
          <Folder size={32} />
          <h1 className={styles.pageTitle}>Projects Portfolio</h1>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              {/* Project Image */}
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.name}
                  className={styles.projectImage}
                />
                {project.featured && (
                  <div className={styles.featuredBadge}>
                    <FaStar size={15} className={styles.star} />
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className={styles.cardBody}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                {/* Highlights */}
                <div>
                  <ul className={styles.highlightsList}>
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className={styles.highlightItem}>
                        <span className={styles.checkmark}>✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className={styles.techTags}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className={styles.actions}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnCode}
                  >
                    <SiGithub size={20} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btnDemo}
                    >
                      <ExternalLink size={20} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsApp;
