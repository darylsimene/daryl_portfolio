import type { ReactNode } from "react";

type PrimaryButtonProps = {
    href?: string;
    children: ReactNode;
    icon?: ReactNode;
    className?: string;
    target?: "_blank" | "_self";
    onClick?: () => void;
};

export default function PrimaryButton({ href, onClick, children, icon, className = "", target = "_self" }: PrimaryButtonProps) {
    const buttonClass = `cursor-pointer group relative inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-full border border-accent bg-accent px-6 text-base font-light text-bg shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/70 hover:bg-accent hover:text-bg hover:shadow-[0_0_28px_rgba(172,236,0,0.32),inset_0_1px_14px_rgba(250,255,211,0.28),inset_0_-8px_18px_rgba(0,24,46,0.18)] ${className}`;

    const content = (
        <>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(250,255,211,0.55)_0%,rgba(172,236,0,0.78)_45%,rgba(128,190,0,0.72)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {icon && (
                <span className="relative z-10 text-bg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    {icon}
                </span>
            )}

            <span className="relative z-10 text-bg">{children}</span>
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
