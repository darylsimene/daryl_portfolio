import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import type { Project } from "../data/projects";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import LoadingRing from "./LoadingRing";

type ProjectModalProps = {
    project: Project | null;
    onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isClosing, setIsClosing] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(true);

    useEffect(() => {
        if (!project) return;

        setActiveIndex(0);
    }, [project]);

    useEffect(() => {
        if (!project) return;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [project]);

    useEffect(() => {
        setIsImageLoading(true);
    }, [activeIndex, project]);

    if (!project) return null;

    const images = project.carouselImages.length > 0 ? project.carouselImages : [project.coverImage];

    const handlePrevious = () => {
        setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
    };

    const handleNext = () => {
        setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
    };

    const handleClose = () => {
        setIsClosing(true);

        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 260);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-bg/80 px-4 py-6 backdrop-blur-md">
            <button type="button" onClick={handleClose} className="cursor-pointer absolute inset-0 " aria-label="Close modal" />
            <div
                className={`relative z-10 grid max-h-[85vh] w-full max-w-7xl origin-center overflow-hidden border border-white/10 bg-surface shadow-[0_0_60px_rgba(1,63,246,0.24)] lg:grid-cols-[2.2fr_1fr] ${
                    isClosing ? "modal-zoom-close" : "modal-zoom-open"
                }`}
            >
                <button
                    type="button"
                    onClick={handleClose}
                    className="cursor-pointer absolute right-4 top-4 z-30 grid size-10 place-items-center rounded-full border border-white/10 bg-bg/70 text-text backdrop-blur-md transition duration-300 hover:border-accent/50 hover:text-accent"
                    aria-label="Close project modal"
                >
                    <X className="h-5 w-5" strokeWidth={1.5} />
                </button>
                {/* Left: carousel */}
                <div className="relative flex min-h-105 items-center justify-center bg-bg lg:h-[85vh] lg:min-h-0">
                    {isImageLoading && (
                        <div className="absolute inset-0 z-10 grid place-items-center bg-bg/40 backdrop-blur-sm">
                            <LoadingRing size="lg" />
                        </div>
                    )}

                    <img
                        key={images[activeIndex]}
                        src={images[activeIndex]}
                        alt={project.title}
                        onLoad={() => setIsImageLoading(false)}
                        onError={() => setIsImageLoading(false)}
                        className={`h-full w-full object-contain transition-opacity duration-300 ${
                            isImageLoading ? "opacity-0" : "opacity-100"
                        }`}
                    />

                    {images.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={handlePrevious}
                                className="absolute left-4 top-1/2 z-20 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/10 bg-bg/70 text-text backdrop-blur-md transition duration-300 hover:border-accent/50 hover:text-accent"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
                            </button>

                            <button
                                type="button"
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 z-20 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/10 bg-bg/70 text-text backdrop-blur-md transition duration-300 hover:border-accent/50 hover:text-accent"
                                aria-label="Next image"
                            >
                                <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
                            </button>

                            <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                                {images.map((image, index) => (
                                    <button
                                        key={image}
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                                            activeIndex === index ? "w-8 bg-accent" : "w-2 bg-white/40"
                                        }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
                {/* Right: content */}
                <aside className="relative max-h-[85vh] overflow-y-auto overscroll-contain border-t border-white/10 bg-white/5 p-6 backdrop-blur-md lg:col-span-1 lg:border-l lg:border-t-0">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(1,63,246,0.16),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />

                    <div className="relative z-10">
                        <h3 className="mt-4 pr-2 text-xl text-accent lg:text-2xl">{project.title}</h3>
                        <div className="my-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs300 text-text backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="mt-5 text-md300 leading-7 text-text">{project.description}</p>

                        <div className="mt-8 grid gap-3">
                            {project.figmaUrl && (
                                <SecondaryButton
                                    href={project.figmaUrl}
                                    target="_blank"
                                    icon={<ExternalLink className="h-5 w-5" strokeWidth={1.5} />}
                                >
                                    Open Figma
                                </SecondaryButton>
                            )}

                            {project.websiteUrl && (
                                <PrimaryButton
                                    href={project.websiteUrl}
                                    target="_blank"
                                    icon={<ExternalLink className="h-5 w-5" strokeWidth={1.5} />}
                                >
                                    Visit Website
                                </PrimaryButton>
                            )}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
