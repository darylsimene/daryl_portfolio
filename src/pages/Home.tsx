import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import TechStack from "../sections/TechStack";
import PortfolioPreview from "../sections/PortfolioPreview";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <div className="relative isolate overflow-hidden bg-bg">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    {/* soft glow base */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(172,236,0,0.09),transparent_28%),radial-gradient(circle_at_78%_42%,rgba(1,63,246,0.13),transparent_34%),radial-gradient(circle_at_45%_85%,rgba(172,236,0,0.06),transparent_32%)]" />

                    {/* smooth dark wash */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,24,46,1)_0%,rgba(6,36,63,0.72)_42%,rgba(0,24,46,1)_100%)]" />

                    {/* grain only */}
                    <div className="grain-texture absolute inset-0 opacity-25" />

                    {/* vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.36)_100%)]" />
                </div>

                <PortfolioPreview />
                <TechStack />
            </div>
            <Contact />
        </>
    );
}
