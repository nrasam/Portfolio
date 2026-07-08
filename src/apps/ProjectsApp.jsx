import { Folder, ExternalLink } from "lucide-react";
import styles from "./ProjectsApp.module.css";

import { SiGithub } from "react-icons/si";
import { FaStar } from "react-icons/fa";

import portfolioImg from "../assets/portfolio_os.jpg";
import geoQuizImg from "../assets/geo_quiz.jpg";
import haloShooterImg from "../assets/halo_shooter.jpg";
import makeGainsImg from "../assets/make_gains.jpg";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Desktop Portfolio OS",
    description:
      "This very site! A polished, desktop-inspired portfolio website in React and Vite that recreates the feel of a personal operating system through draggable windows, taskbar interactions, and desktop themes. The project combines custom React hooks and context-based state management with a responsive design, demonstrating strong frontend engineering and UI/UX craftsmanship.",
    image: portfolioImg,
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Designed and implemented a custom window system with open, minimize, close, focus, and drag/resize interactions",
      "Built a reusable theming experience with multiple desktop themes, wallpaper support, and dynamic UI updates",
      "Created a modular, component-based architecture using React, CSS Modules, and reusable desktop interface elements",
      "Integrated EmailJS for a working contact form and added a special feature for mobile users",
    ],
    github: "https://github.com/nrasam/Portfolio",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    name: "Geography Quiz",
    description:
      "A landmark-based geography quiz built with vanilla JavaScript for my Intro to Computing final project at York University. Given a photo of a world landmark, players identify the correct continent, country, and city across multiple choice questions.",
    image: geoQuizImg,
    technologies: ["JavaScript", "HTML", "CSS"],
    highlights: [
      "Wrote unit tests using Vitest — the utility functions all have dedicated test coverage, demonstrating awareness of software testing practices",
      "Implemented a Fisher-Yates shuffle algorithm from scratch to randomize both question order and multiple choice options — ensuring no two playthroughs are identical and correct answers never appear in a predictable position",
      "Cleanly separated concerns — game logic (utils.js), data (landmarks.js), and presentation (index.html) live in separate files, despite no framework to enforce it",
    ],
    github: "https://github.com/nrasam/GeographyQuiz",
    demo: "https://nrasam.github.io/GeographyQuiz/",
    featured: true,
  },
  {
    id: 3,
    name: "Workout Routine Notion Template",
    description:
      "A notion template for constructing a weekly exercise routine where users can select from a database of nearly 200 exercises organized by muscle groups, covering multiple modalities, and accompanying visual instructions.",
    image:
      "https://s3.us-west-2.amazonaws.com/public.notion-static.com/template/b447381e-8431-4602-bded-14d952a31cd5/1729866061631/desktop.jpg",
    technologies: ["Notion"],
    highlights: [
      "Each exercise added to your routine includes its own table for tracking progressive overload",
      "👁 3,000 product views and 1,000 downloads",
      "⭐ 4.5 rating",
    ],
    github: null,
    demo: "https://www.notion.com/templates/weekly-workout-schedule-builder-with-accompanying-exercise-d?clientBuildTarget=client",
    featured: true,
  },
  {
    id: 4,
    name: "Vocab Builder",
    description:
      "A mobile vocabulary builder app built with Angular and Ionic that uses spaced repetition to help users retain new words.",
    image:
      "https://user-images.githubusercontent.com/66037599/167320456-a01674a9-0b6f-4a38-a7df-840094b1559a.png",
    technologies: ["Angular", "Ionic", "TypeScript"],
    highlights: [
      "Fetches real definitions from a public dictionary API and schedules words for review based on how well the user knows them",
      "Implemented a spaced repetition system from scratch — the review scheduler assigns different time intervals to words based on self-reported recall confidence (forgotten, partial, with effort, immediate), mirroring the core mechanic behind tools like Anki and Duolingo",
      "Integrated a live dictionary REST API — used Angular's HttpClient with RxJS Observable streams to fetch word definitions, phonetics, and meanings dynamically from dictionaryapi.dev, handling async data throughout the app reactively",
    ],
    github: "https://github.com/nrasam/vocab-builder",
    demo: null,
    featured: false,
  },
  {
    id: 5,
    name: "Calorie & Nutrient Tracker",
    description:
      "A calorie and nutrient tracker built with Angular and Angular Material, styled after a nutritional facts label.",
    image: makeGainsImg,
    technologies: ["Angular", "TypeScript"],
    highlights: [
      "Tracks 24 distinct macro and micronutrients simultaneously — the nutrient aggregation system maps food additions to a shared nutrient table in real time, correctly handling partial servings and multi-nutrient foods",
      "Searchable food list with live filtering — the food table filters results on every keystroke using a case-insensitive substring match, restoring the full list when the search is cleared",
      "Angular Material data tables — used mat-table with defined column schemas (displayedColumns) for both the food list and the nutrient summary, demonstrating comfort with a professional UI component library",
      "Service-based architecture with clear separation — FoodService handles food data, NutrientService owns all aggregation logic and calorie tracking",
    ],
    github: "https://github.com/nrasam/make-gains",
    demo: "https://nrasam.github.io/make-gains/make-gains/",
    featured: false,
  },
  {
    id: 6,
    name: "2D Shooter",
    description:
      "A browser-based 2D shooter built with p5.js where you defend against waves of aliens advancing toward you.",
    image: haloShooterImg,
    technologies: ["p5.js", "JavaScript"],
    highlights: [
      "Features three alien variants, progressive difficulty scaling across rounds, a health regeneration system, and a full ammo/reload mechanic — all built from scratch in vanilla JavaScript with no game engine",
      "Designed an OOP architecture using constructor functions — Player, Alien, and SpawnPoint are each modeled as self-contained objects with their own state and methods",
      "Implemented perspective-based scaling for enemy movement — aliens grow larger as they approach the player by continuously decreasing their scale divisor each frame",
      "Ammo and reload animation system — firing expends ammo in bursts of 3 (mimicking a battle rifle), and reloading triggers a frame-counted animation that slides the player sprite off-screen and back, with ammo restored only after the full animation completes",
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
