export interface Project {
  title: string;
  date: string;
  description: string;
  company: string;
  skills: string[];
  projectUrl?: string
}

export const projectsData: Project[] = [
  {
    title: "Perspective",
    date: "Dec 2024 - Jan 2025",
    description: `
      Perspective is a tool that transforms images into a flat view for improved data collection and consistency in machine learning tasks, particularly at Wendor for enhancing computer vision model training.
    `,
    company: "Wendor - Smart Vending Solutions",
    skills: ["Amazon Web Services (AWS)", "Back-End Web Development", "Computer Vision", "Machine Learning"],
    projectUrl: "https://drive.google.com/file/d/10kjaR50KPPHz_ZygV35wJ8fuGOl9VH1A/view"
  },
  {
    title: "Textbase",
    date: "Jul 2023 - Oct 2023",
    description: `
      Led the development of the open-source Python package Textbase, enabling easy AI multimodal chatbot deployment
    `,
    company: "Cofactory",
    skills: ["LLMs", "GCP", "Back-End Web Development", "Machine Learning"],
    projectUrl: "https://github.com/cofactoryai/textbase"
  },
  {
    title: "Emotion GUI",
    date: "Dec 2022 - Feb 2023",
    description: `
      Summer research project at the University of Auckland. Preprint submitted in Speech Communication
    `,
    company: "University of Auckland",
    skills: ["PyQt", "Deep Learning", "GUI Development", "Signal Processing"],
    projectUrl: "https://github.com/kausmeows/EmotionGUI-UoA"
  },
];