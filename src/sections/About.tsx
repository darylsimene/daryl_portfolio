import { Monitor, ArrowUpRight, ChevronsRight } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="relative isolate overflow-visible bg-surface-alt px-6 pb-28 pt-32 text-text md:px-12 lg:px-[120px]">
            {/* Static gradient + texture background */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                {/* dark subtle hue gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(172,236,0,0.08),transparent_32%),radial-gradient(circle_at_82%_30%,rgba(1,63,246,0.12),transparent_36%),radial-gradient(circle_at_50%_100%,rgba(172,236,0,0.05),transparent_38%)]" />

                {/* soft diagonal wash */}
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,36,63,0.95)_0%,rgba(2,31,58,0.72)_38%,rgba(0,24,46,0.95)_100%)]" />

                {/* subtle vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]" />

                {/* static dotted texture */}
                <div className="about-noise absolute inset-0 opacity-25" />

                {/* faint grid texture */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(246,247,237,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(246,247,237,0.025)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />
            </div>

            {/* Slanted banner */}
            <div className="absolute left-0 top-0 z-20 w-full -translate-y-1/2 overflow-x-clip overflow-y-visible py-12">
                <div className="-mx-12 -rotate-2 bg-accent py-4 text-bg shadow-[0_0_35px_rgba(172,236,0,0.35)]">
                    <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
                        <BannerItems />
                        <BannerItems />
                    </div>
                </div>
            </div>

            <div className="relative z-20 mx-auto max-w-6xl">
                <div className="text-center">
                    <h2 className="text-text-h">About Me</h2>

                    <div className="mx-auto mt-8 h-px w-44 bg-text-muted/40" />

                    <p className="mx-auto mt-8 max-w-3xl text-center text-lg300 leading-7 text-text/80">
                        I sit at the intersection of <span className="text-lg500 text-text">intentional design</span> and{" "}
                        <span className="text-lg500 text-text">production-ready code</span>. Having spent years as an experienced frontend
                        web developer, I deeply understand the technical realities, constraints, and architecture behind building for the
                        web. Now, as a <span className="text-lg500 text-text">Design Engineer</span>, my primary focus is user interface
                        design and structural architecture but I always design with the developer in mind.
                    </p>
                </div>

                <div className="mt-24 grid gap-20 md:grid-cols-3">
                    <AboutCard
                        icon={<Monitor className="h-8 w-8" strokeWidth={1.5} />}
                        title="Code Informed Design"
                        description="Creating layouts, constraints, and structural variables in Figma that translate 1:1 into clean React component code."
                    />

                    <AboutCard
                        icon={<ArrowUpRight className="h-8 w-8" strokeWidth={1.5} />}
                        title="Systemized Scaling"
                        description="Architecting robust design systems and shared UI libraries that eliminate fragmentation across enterprise products."
                    />

                    <AboutCard
                        icon={<ChevronsRight className="h-8 w-8" strokeWidth={1.5} />}
                        title="Rapid Iteration"
                        description="Utilizing advanced AI-driven workflows and tools like Replit to turn wireframes into interactive, testable MVPs at high velocity."
                    />
                </div>
            </div>
        </section>
    );
}

function BannerItems() {
    return (
        <>
            <span className="font-heading text-2xl font-extrabold tracking-wide md:text-4xl">Frontend Dev</span>
            <span className="text-3xl text-secondary md:text-4xl">✦</span>
            <span className="font-heading text-2xl font-extrabold tracking-wide md:text-4xl">UI Designer</span>
            <span className="text-3xl text-secondary md:text-4xl">✦</span>
            <span className="font-heading text-2xl font-extrabold tracking-wide md:text-4xl">Web Developer</span>
            <span className="text-3xl text-secondary md:text-4xl">✦</span>
            <span className="font-heading text-2xl font-extrabold tracking-wide md:text-4xl">AI Engineer</span>
            <span className="text-3xl text-secondary md:text-4xl">✦</span>
        </>
    );
}

type AboutCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

function AboutCard({ icon, title, description }: AboutCardProps) {
    return (
        <article className="group relative overflow-hidden border border-white/10 bg-white/3 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/6 hover:shadow-[0_0_32px_rgba(172,236,0,0.22),0_0_70px_rgba(1,63,246,0.12)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(172,236,0,0.18),transparent_35%),radial-gradient(circle_at_90%_100%,rgba(1,63,246,0.16),transparent_38%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-white/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 mb-6 text-text-h transition duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_14px_rgba(172,236,0,0.55)]">
                {icon}
            </div>

            <h3 className="relative z-10 max-w-xs text-heading text-xl text-accent">{title}</h3>

            <p className="relative z-10 mt-5 max-w-sm text-md300 leading-7 text-text">{description}</p>
        </article>
    );
}
