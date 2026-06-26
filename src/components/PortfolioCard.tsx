import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

type PortfolioCardProps = {
    project: Project;
    onClick: (project: Project) => void;
};

export default function PortfolioCard({ project, onClick }: PortfolioCardProps) {
    return (
        <button
            type="button"
            onClick={() => onClick(project)}
            className="cursor-pointer group relative block overflow-hidden border border-white/10 bg-white/5 shadow-xl backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 hover:border-secondary/30 hover:bg-secondary/8 hover:shadow-[0_0_28px_rgba(1,63,246,0.22),0_0_64px_rgba(1,63,246,0.1)]"
        >
            {/* Blue glass hover tint */}
            <div className="pointer-events-none absolute inset-0 bg-secondary/6 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(1,63,246,0.18),transparent_38%),radial-gradient(circle_at_90%_100%,rgba(1,63,246,0.12),transparent_42%)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />

            <div className="relative flex aspect-video items-start overflow-hidden bg-bg">
                <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#202020] via-transparent to-transparent opacity-40" />

                <div className="absolute bottom-3 left-4 flex gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs300 text-white backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="relative z-10 p-5 h-full ">
                <div className="flex items-start justify-between gap-4">
                    <p title={project.title} className="max-w-xs line-clamp-2 text-left text-base text-lg500! leading-snug text-text">
                        {project.title}
                    </p>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-bg transition-all duration-500 ease-out group-hover:rotate-45 group-hover:bg-secondary group-hover:text-white group-hover:shadow-[0_0_24px_rgba(1,63,246,0.65)]">
                        <ArrowUpRight className="h-6 w-6" strokeWidth={2} />
                    </span>
                </div>

                <p className="mt-4 line-clamp-5 text-left text-sm font-light leading-6 text-text/75 transition-colors duration-500 ease-out group-hover:text-text">
                    {project.description}
                </p>
            </div>
        </button>
    );
}
