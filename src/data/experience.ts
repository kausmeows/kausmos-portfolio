export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  imageUrl: string;
  location: string;
}

export const experienceData: Experience[] = [
  {
    date: "Feb 2024- Present · 1 yr",
    title: "Software Engineer - ML & IOT",
    company: "Wendor",
    description: `
    Building first in India ML infra for vending machines that don't suck.
    `,
    companyUrl: "https://www.wendor.in",
    imageUrl: "/wendor-logo.png",
    "location": "Cyber City, Gurugram · On-site"
  },
  {
    date: "July 2023 - Feb 2024 · 8 mos",
    title: "Machine Learning Engineer",
    company: "Cofactory",
    description:
      "The future of value creation in an AI based economy",
    companyUrl: "https://www.cofactory.ai",
    imageUrl: "/cofactory-logo.png",
    "location": "San Francisco Bay Area · Remote"
  },
  {
    date: "Jun 2023 - Aug 2023 · 3 mos",
    title: "Computer Vision Intern",
    company: "Clearspot AI",
    description:
      "AI-enhanced edge computing in drones",
    companyUrl: "https://www.cofactory.ai",
    imageUrl: "/clearspot-logo.png",
    "location": `Paris, Île-de-France, France · Remote`
  },
  {
    date: "Dec 2022 - Feb 2023 · 3 mos",
    title: "Research Intern",
    company: "University of Auckland",
    description:
      "A pleasant summer at UoA under a full scholarship.",
    companyUrl: "https://www.auckland.ac.nz/en.html",
    imageUrl: "/uoa-logo.png",
    "location": "Auckland, New Zealand · On-site"
  },
];
