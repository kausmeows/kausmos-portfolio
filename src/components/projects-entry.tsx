import { projectsData } from "@/data/projects";
import { ArrowUpRight } from "lucide-react"; // Import the arrow icon

export function Projects() {
    return (
        <section className="mt-8">
            {" "}
            {/* Use section tag for consistency */}
            <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                {" "}
                {/* Match heading styles */}
                Projects
            </h2>
            <div className="space-y-12">
                {" "}
                {/* Use space-y-12 for consistent spacing */}
                {projectsData.map((project, index) => (
                    <div key={index} className="flex flex-col mb-6">
                        <h3 className="text-base font-serif">
                            {project.title}
                        </h3>{" "}
                        {/* Change to text-base for consistency */}
                        {project.projectUrl && ( // Check if projectUrl exists
                            <a
                                href={project.projectUrl}
                                className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300 mt-1" // Add margin-top for spacing
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ArrowUpRight
                                    size={12}
                                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                />
                                <span className="tracking-wider uppercase">
                                    View Project
                                </span>
                            </a>
                        )}
                        <span className="text-xs text-zinc-500 mt-1">
                            {project.date}
                        </span>
                        <p className="text-sm text-zinc-600 leading-relaxed mt-2">
                            {project.description}
                        </p>
                        <p className="text-xs text-zinc-500 mt-1">
                            Associated with: {project.company}
                        </p>
                        <p className="text-xs text-zinc-500 mt-1">
                            Skills: {project.skills.join(", ")}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}