import { Folder, ExternalLink } from "lucide-react";
import styles from "./ProjectsApp.module.css";

import { SiGithub } from "react-icons/si";
import { FaStar } from "react-icons/fa";

import portfolioImg from "../assets/portfolio_os.jpg";
import geoQuizImg from "../assets/geo_quiz.jpg";
import foodMattersImg from "../assets/food_matters.jpg";
import makeGainsImg from "../assets/make_gains.jpg";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Desktop Portfolio OS",
    description:
      "This very site! A React-based portfolio styled as a desktop OS with draggable, resizable windows.",
    image: portfolioImg,
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
    image: geoQuizImg,
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
    name: "Workout Routine Builder Notion Template",
    description:
      "A weekly workout routine builder with an accompanying database of 100's of exercises.",
    image:
      "https://s3.us-west-2.amazonaws.com/public.notion-static.com/template/b447381e-8431-4602-bded-14d952a31cd5/1729866061631/desktop.jpg",
    technologies: ["Notion"],
    highlights: [
      "👁 3,000 product views and 1,000 downloads",
      "⭐ 4.5 rating",
      "An exercise encyclopedia covering nearly 200 exercises organized by muscle groups, ranging from weighted exercises to machines to bands, as well as visual instructions.",
    ],
    github: null,
    demo: "https://www.notion.com/templates/weekly-workout-schedule-builder-with-accompanying-exercise-d?clientBuildTarget=client",
    featured: true,
  },
  {
    id: 4,
    name: "Food Matters",
    description:
      "This app is a proof of concept where you add and remove food from a list. Each food item has a weight and expiration date property.",
    image: foodMattersImg,
    technologies: ["Android Studio", "Java"],
    highlights: [
      "You can add and remove food from a virtual pantry",
      "You can add and remove food from a virtual pantry",
      "You can add and remove food from a virtual pantry",
    ],
    github: "https://github.com/nrasam/Food_Matters",
    demo: null,
    featured: false,
  },
  {
    id: 5,
    name: "Make Gains",
    description: "A calorie tracker in the form of a human nutritional facts.",
    image: makeGainsImg,
    technologies: ["Angular", "TypeScript"],
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
    id: 6,
    name: "Vocab Builder",
    description: "A vocabulary builder app that uses active recall.",
    image:
      "https://user-images.githubusercontent.com/66037599/167320456-a01674a9-0b6f-4a38-a7df-840094b1559a.png",
    technologies: ["Ionic", "TypeScript"],
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
  // Stores the technology to filter projects by
  // Starts with null so no filter is applied
  const [selectedTech, setSelectedTech] = useState(null);

  // Filters projects based on whether they include the selected tech
  const filteredProjects = selectedTech
    ? projects.filter((p) => p.technologies.includes(selectedTech))
    : projects;

  // Creates a flat map of all the technologies present in the projects array
  const allTechs = projects.flatMap((p) => p.technologies);

  // Removes duplicates by passing it through the Set constructor
  // Spreading it back into an array returns a plain array
  const uniqueTechs = [...new Set(allTechs)].sort();

  // Handles tech tag filtering
  const handleTechClick = (tech) => {
    // If you're re-clicking a selected tech it'll unfilter
    setSelectedTech((prev) => (prev === tech ? null : tech));
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.pageHeader}>
          <Folder size={32} />
          <h1 className={styles.pageTitle}>Projects Portfolio</h1>
        </div>

        {/* FIlter by tags */}
        <div className={styles.filterTagListSection}>
          <div className={styles.filterTagList}>
            {uniqueTechs.map((tech, idx) => (
              <span
                key={idx}
                className={`${styles.filterTag} ${selectedTech === tech ? styles.filterTagActive : ""}`}
                onClick={() => handleTechClick(tech)}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.projectGrid}>
          {filteredProjects.map((project) => (
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btnCode}
                    >
                      <SiGithub size={20} />
                      Code
                    </a>
                  )}
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
