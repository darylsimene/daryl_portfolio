import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const isHome = location.pathname === "/";
    const isPortfolio = location.pathname === "/portfolio";

    const scrollToSection = (sectionId: string) => {
        if (location.pathname !== "/") {
            navigate("/");

            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 100);

            return;
        }

        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <nav className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-10 md:px-12 lg:px-30 lg:py-12">
            <Link
                to="/"
                className="font-heading text-xl font-extrabold tracking-wide text-accent no-underline"
                onClick={() => {
                    setTimeout(() => {
                        document.getElementById("home")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }, 50);
                }}
            >
                daryl simene
            </Link>

            <div className="flex items-center gap-8 md:gap-14 lg:gap-18">
                <button
                    type="button"
                    onClick={() => scrollToSection("home")}
                    className={`cursor-pointer bg-transparent transition duration-300 hover:text-accent hover:drop-shadow-[0_0_10px_#acec00] ${
                        isHome ? "text-accent drop-shadow-[0_0_10px_#acec00]" : "text-text"
                    }`}
                >
                    Home
                </button>

                <Link
                    to="/portfolio"
                    className={`transition duration-300 hover:text-accent ${
                        isPortfolio ? "text-accent drop-shadow-[0_0_10px_#acec00]" : "text-text"
                    }`}
                >
                    Portfolio
                </Link>

                <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="cursor-pointer bg-transparent text-text transition duration-300 hover:text-accent"
                >
                    Contact
                </button>
            </div>
        </nav>
    );
}
