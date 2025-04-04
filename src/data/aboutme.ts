export interface AboutMe {
  name: string;
  title: string;
  organisation: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  organisationUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Kaustubh Shukla",
  title: "Senior Software Engineer",
  organisation: "Agno",
  // Note that links work in the description
    description: `
    I'm currently working as a <u>Senior Software Engineer at Agno</u> and lead the development and maintenance of the #1 open-sourced agents SDK.<br />
    I completed my undergrad in <u>Computer Science from IIIT Ranchi</u>.<br /><br />
    Previously, I worked as a <u>Machine Learning Engineer at Cofactory</u>, a Silicon Valley startup, where I led the development of an open-sourced Python package, <a href="https://github.com/cofactoryai/textbase">Textbase</a> (with over 1k GitHub stars 🌟), that enables users to build and deploy multimodal AI chatbots with a single command.<br /><br />
    Earlier last year, I did a <a href="https://github.com/kausmeows/EmotionGUI-UoA">research internship</a> under a <a href="https://drive.google.com/file/d/1Fv-Qy9O_SWk7FKF_Xq6owq8LVkmba31K/view">scholarship</a> at the <u>University of Auckland, New Zealand</u>, in the signal processing lab of the ECSE department and had a great time collaborating with amazing people and exploring the beautiful Kiwi land 🇳🇿.<br /><br />
    I'm interested in all things <u>ML, Backend Dev, Hardware, OSS and intersections b/w tech, writing and books.</u><br />
    I find the correlations between ML algorithms and the human mind fascinating.
  `,
  email: "shuklakaustubh84@gmail.com",
  imageUrl: "/pfp.jpg",
  // googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "kausmeows",
  linkedinUsername: "kausmos",
  twitterUsername: "kaus_mos",
  blogUrl: "https://kausmos.hashnode.dev/",
  cvUrl: "https://drive.google.com/file/d/1XP0wtHdKBDBXaIbxY42wanZ_-EcbnIGf/view?usp=sharing",
  organisationUrl: "https://www.wendor.in",
  // altName: "",
  // secretDescription: "I like dogs.",
};
