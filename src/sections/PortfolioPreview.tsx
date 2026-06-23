import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data/projects";
import PortfolioCard from "../components/PortfolioCard";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import ProjectModal from "../components/ProjectModal";

export default function PortfolioPreview() {
    const previewProjects = projects.slice(0, 6);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            <section id="portfolio" className="relative px-6 pb-16 pt-24 text-text md:px-12 lg:px-24">
                <div className="absolute inset-x-0 top-0 h-60 bg-accent" />

                <div className="relative z-10 mx-auto max-w-6xl">
                    <div className="text-center">
                        <h2 className="text-secondary">My Portfolio</h2>
                        <div className="mx-auto mt-6 h-px w-44 bg-secondary/40" />
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {previewProjects.map((project) => (
                            <PortfolioCard key={project.id} project={project} onClick={setSelectedProject} />
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center">
                        <PrimaryButton href="/portfolio" icon={<ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />}>
                            View All My Work
                        </PrimaryButton>
                    </div>
                </div>
            </section>

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </>
    );
}
