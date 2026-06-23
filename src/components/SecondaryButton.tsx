import type { ReactNode } from "react";

type SecondaryButtonProps = {
    href?: string;
    onClick?: () => void;
    children: ReactNode;
    icon?: ReactNode;
    className?: string;
    target?: "_blank" | "_self";
};

export default function SecondaryButton({ href, onClick, children, icon, className = "", target = "_self" }: SecondaryButtonProps) {
    const buttonClass = `cursor-pointer group relative inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-full border border-accent bg-transparent px-6 text-md300 text-accent transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/15 hover:text-accent hover:shadow-[0_0_28px_rgba(172,236,0,0.45),inset_0_1px_18px_rgba(172,236,0,0.22)] md:text-lg300 ${className}`;

    const content = (
        <>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(172,236,0,0.28),rgba(172,236,0,0.06),rgba(255,255,255,0.08))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-white/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {icon && <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">{icon}</span>}

            <span className="relative z-10">{children}</span>
        </>
    );

    if (!href) {
        return (
            <button type="button" onClick={onClick} className={buttonClass}>
                {content}
            </button>
        );
    }

    return (
        <a href={href} target={target} rel={target === "_blank" ? "noreferrer" : undefined} className={buttonClass}>
            {content}
        </a>
    );
}
