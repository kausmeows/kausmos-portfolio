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
    date: "Mar 2025- Present · 2 mo",
    title: "Software Engineer (L4)",
    company: "Agno",
    description: `
    Leading the development and maintenance of #1 open-sourced Agents SDK with over 23k+ GitHub stars and the agents orchestration platform.
    `,
    companyUrl: "https://www.agno.com",
    imageUrl: "/agno-logo.png",
    "location": "New York City, USA · Remote"
  },
  {
    date: "Feb 2024- Present · 1 yr 2 mos",
    title: "Software Engineer (ML & IOT)",
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
