import { useState } from "react";
import { ArrowLeft, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { projects, type Project } from "../data/projects";
import PortfolioCard from "../components/PortfolioCard";
import ProjectModal from "../components/ProjectModal";

import PrimaryButton from "../components/PrimaryButton";
import ContactModal from "../components/ContactModal";

export default function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
            <main className="relative isolate min-h-screen overflow-hidden bg-bg px-6 pb-28 pt-36 text-text md:px-12 lg:px-24">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(172,236,0,0.08),transparent_28%),radial-gradient(circle_at_78%_42%,rgba(1,63,246,0.13),transparent_34%),radial-gradient(circle_at_45%_85%,rgba(172,236,0,0.05),transparent_32%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,24,46,1)_0%,rgba(6,36,63,0.72)_42%,rgba(0,24,46,1)_100%)]" />
                    <div className="grain-texture absolute inset-0 opacity-20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.36)_100%)]" />
                </div>

                <div className="mx-auto max-w-6xl">
                    <Link
                        to="/"
                        className="absolute left-6 top-40 z-20 inline-flex items-center gap-3 text-md300 text-text/75 transition duration-300 hover:text-accent md:left-12 lg:left-40"
                    >
                        <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
                        Back Home
                    </Link>

                    <div className="text-center">
                        <p className="mb-4 text-md500 uppercase tracking-widest text-accent/80">Full Collection</p>

                        <h1 className="text-accent">All Projects</h1>

                        <div className="mx-auto mt-8 h-px w-44 bg-accent/40" />

                        <p className="mx-auto mt-8 max-w-2xl text-lg300 leading-7 text-text/75">
                            A complete collection of my design, frontend, and product interface work.
                        </p>
                    </div>

                    <div className="mt-16  grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <PortfolioCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
                        ))}
                    </div>

                    <div className="m-10 mt-25 flex justify-center">
                        <PrimaryButton onClick={() => setIsContactOpen(true)} icon={<Phone className="h-5 w-5" strokeWidth={1.5} />}>
                            Contact Me
                        </PrimaryButton>
                    </div>
                </div>
            </main>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </>
    );
}
