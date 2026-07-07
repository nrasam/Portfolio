// src/config/shortcutConfig.jsx
import {
  User,
  Mail,
  GraduationCap,
  Briefcase,
  BarChart3,
  Folder,
  Settings,
  Gamepad2,
} from "lucide-react";

import AboutApp from "../apps/AboutApp";
import ContactApp from "../apps/ContactApp";
import EducationApp from "../apps/EducationApp";
import ExperienceApp from "../apps/ExperienceApp";
import ProjectsApp from "../apps/ProjectsApp";
import SkillsApp from "../apps/SkillsApp";
import SettingsApp from "../apps/SettingsApp";
import Game from "../apps/Game";

export function createShortcutItems({ theme, setTheme }) {
  return [
    {
      id: 1,
      label: "About Me",
      icon: User,
      content: <AboutApp />,
    },
    {
      id: 2,
      label: "Contact Me",
      icon: Mail,
      content: <ContactApp />,
    },
    {
      id: 3,
      label: "Education",
      icon: GraduationCap,
      content: <EducationApp />,
    },
    {
      id: 4,
      label: "Experience",
      icon: Briefcase,
      content: <ExperienceApp />,
    },
    {
      id: 5,
      label: "Skills",
      icon: BarChart3,
      content: <SkillsApp />,
    },
    {
      id: 6,
      label: "My Projects",
      icon: Folder,
      content: <ProjectsApp />,
    },
    {
      id: 7,
      label: "Settings",
      icon: Settings,
      content: <SettingsApp currentTheme={theme} onThemeChange={setTheme} />,
    },
    { id: 8, label: "Game", icon: Gamepad2, content: <Game /> },
  ];
}
