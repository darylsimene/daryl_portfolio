import { FaReact, FaFigma, FaCss3Alt, FaHtml5, FaGithub } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiMui, SiMongodb, SiReplit } from "react-icons/si";

const roles = ["UI/UX Developer", "Graphic Design", "Frontend Developer", "Vibe Coding"];

const tools = [
    {
        name: "Figma",
        icon: <FaFigma />,
    },
    {
        name: "React",
        icon: <FaReact />,
    },
    {
        name: "TypeScript",
        icon: <SiTypescript />,
    },
    {
        name: "JavaScript",
        icon: <SiJavascript />,
    },
    {
        name: "CSS",
        icon: <FaCss3Alt />,
    },
    {
        name: "HTML",
        icon: <FaHtml5 />,
    },
    {
        name: "Tailwind",
        icon: <SiTailwindcss />,
    },
    {
        name: "MUI",
        icon: <SiMui />,
    },
    {
        name: "MongoDB",
        icon: <SiMongodb />,
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
    },
    {
        name: "Replit",
        icon: <SiReplit />,
    },
];

export default function TechStack() {
    return (
        <section id="tech-stack" className="relative px-6 pb-28 pt-20 text-text md:px-12 lg:px-24">
            <div className="mx-auto max-w-6xl">
                <div className="text-center">
                    <h2 className="text-accent">Skills & Tech Stacks</h2>

                    <div className="mx-auto mt-8 h-px w-44 bg-accent/40" />
                </div>

                {/* Roles */}
                <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {roles.map((role) => (
                        <div
                            key={role}
                            className="group relative h-24 overflow-hidden flex items-center justify-center border border-accent/50 bg-accent/15 px-8 py-6 text-center shadow-[0_0_34px_rgba(172,236,0,0.2),inset_0_1px_18px_rgba(250,255,211,0.16)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/70 hover:bg-accent/18 hover:shadow-[0_0_38px_rgba(172,236,0,0.28),inset_0_1px_18px_rgba(250,255,211,0.22)]"
                        >
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(250,255,211,0.14),transparent_45%,rgba(172,236,0,0.12))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <p className="relative z-10 text-lg300 text-text">{role}</p>
                        </div>
                    ))}
                </div>

                {/* Tools */}
                <div className="mx-auto mt-14 flex flex-wrap justify-center max-w-5xl gap-x-10 gap-y-8 ">
                    {tools.map((tool) => (
                        <div
                            key={tool.name}
                            className="group relative flex h-20 w-50 items-center justify-center gap-4 overflow-hidden rounded-lg border border-accent/30 bg-white/12 px-6 text-text shadow-[0_0_24px_rgba(172,236,0,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-white/14 hover:shadow-[0_0_30px_rgba(172,236,0,0.18)]"
                        >
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(172,236,0,0.12),transparent_45%,rgba(255,255,255,0.08))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <span className="relative z-10 text-3xl text-accent transition-transform duration-300 group-hover:scale-110">
                                {tool.icon}
                            </span>

                            <span className="relative z-10 text-lg300">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
