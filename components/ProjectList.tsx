import ProjectCard from "./ProjectCard";

interface Project {

}

interface ProjectCardProps {
    projects: Project[];
}

export default function ProjectList({ projects}: ProjectCardProps) {
    return (
        <section>
            {projects.map((project) => (
                <ProjectCard {...project} />
            ))}
        </section>
    );
}