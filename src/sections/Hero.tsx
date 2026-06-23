import profileImg from "../assets/heroPhoto.jpeg";

import { Phone, ArrowUpRight } from "lucide-react";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function Hero() {
    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    return (
        <section id="home" className="relative isolate min-h-screen overflow-hidden bg-bg px-6 py-10 text-text md:px-12 lg:px-30 lg:py-12">
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* moving glow colors */}
                <div className="hero-glow absolute left-[-15%] top-[12%] h-105 w-105 rounded-full bg-accent/20 blur-[120px]" />
                <div className="hero-glow-delayed absolute right-[-10%] top-[25%] h-115 w-115 rounded-full bg-secondary/20 blur-[130px]" />

                {/* static radial wash */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(172,236,0,0.08),transparent_32%),radial-gradient(circle_at_75%_45%,rgba(1,63,246,0.14),transparent_35%)]" />

                {/* static texture */}
                <div className="hero-texture absolute inset-0 opacity-[0.14]" />

                {/* static grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(246,247,237,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(246,247,237,0.025)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />
            </div>

            <div className="grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-14 pt-20 lg:grid-cols-[1fr_0.9fr] lg:gap-24 lg:pt-0">
                <div className="max-w-170">
                    <p className="mb-3 text-xl300 leading-[1.4] md:text-2xl">Hi, I’m Daryl!</p>

                    <h2 className="text-accent md:text-[64px] md:leading-[70.4px]">
                        A{" "}
                        <span className="[text-shadow:0_0_38px_rgba(172,236,0,0.42),0_0_70px_rgba(1,63,246,0.28)]">
                            Design <br />
                            Engineer
                        </span>
                    </h2>

                    <p className="mt-7 max-w-160 text-xl300 leading-6 md:text-lg300 md:leading-6">
                        I bridge the gap between design systems and production code. I craft beautiful, high-performance user interfaces and
                        scalable frontend architecture—turning complex design languages into pixel-perfect, interactive reality.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-5">
                        <SecondaryButton onClick={() => scrollToSection("contact")} icon={<Phone className="h-5 w-5" strokeWidth={1.5} />}>
                            Reach Me
                        </SecondaryButton>

                        <PrimaryButton href="/portfolio" icon={<ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />}>
                            View my work
                        </PrimaryButton>
                    </div>
                </div>

                <div className="relative flex justify-start lg:justify-center">
                    {/* glow behind card */}
                    <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
                    <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/3 -translate-y-1/3 rounded-full bg-secondary/20 blur-3xl" />

                    {/* outer glass frame */}
                    <div className="relative w-full max-w-xl overflow-hidden rounded-[3rem] border border-white/15 bg-white/10 p-3 shadow-[0_0_40px_rgba(172,236,0,0.18),0_0_80px_rgba(1,63,246,0.16)] backdrop-blur-xl">
                        <div className="overflow-hidden rounded-[2.25rem] bg-surface">
                            <img
                                src={profileImg}
                                alt="Daryl Simene"
                                className="aspect-9/10 scale-125 w-full object-cover object-[center_100%]"
                            />
                        </div>

                        {/* glass shine */}
                        <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,transparent_35%,rgba(172,236,0,0.08)_100%)]" />

                        {/* bottom fade */}
                        <div className="pointer-events-none absolute inset-x-3 bottom-3 h-24 rounded-b-[2.25rem] bg-linear-to-t from-bg/80 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}
