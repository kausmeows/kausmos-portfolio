import { Experience } from "@/data/experience";
import Image from "next/image";

export function ExperienceEntry({ experience }: { experience: Experience }) {
    return (
        <div className="flex items-start mb-2">
            {" "}
            {/* Use flexbox for layout */}
            {experience.imageUrl && (
                <div className="mr-2 w-20 h-20 relative flex-shrink-0">
                    {" "}
                    {/* Fixed size container with no shrink */}
                    <Image
                        src={experience.imageUrl}
                        alt={experience.company}
                        layout="fill" // Use fill to cover the container
                        objectFit="contain" // Maintain aspect ratio and cover the container
                        className="rounded" // Optional: add rounded corners
                    />
                </div>
            )}
            <div className="flex flex-col flex-grow">
                {" "}
                {/* Allow text to grow but not affect image size */}
                <h3 className="text-base font-serif">{experience.title}</h3>
                <span className="text-xs text-zinc-500 mt-1">
                    {experience.date}
                </span>{" "}
                {/* Move date below title */}
                <span className="text-sm text-zinc-600">
                    {experience.company}
                </span>
                {experience.location && ( // Display location if it exists
                    <span className="text-xs text-zinc-500 mt-1">
                        {experience.location}
                    </span>
                )}
                {experience.advisor && (
                    <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
                        Advisor: {experience.advisor}
                    </p>
                )}
                {experience.manager && (
                    <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
                        Manager: {experience.manager}
                    </p>
                )}
                {experience.description && (
                    <div className="text-sm text-zinc-600 leading-relaxed mt-2">
                        {experience.description
                            .split("\n")
                            .map((line, index) => (
                                <p key={index} className="mb-1">
                                    {line}
                                </p>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
}