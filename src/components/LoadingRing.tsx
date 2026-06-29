type LoadingRingProps = {
    size?: "sm" | "md" | "lg";
    className?: string;
};

const sizes = {
    sm: "size-6 border-2",
    md: "size-10 border-2",
    lg: "size-16 border-3",
};

export default function LoadingRing({ size = "md", className = "" }: LoadingRingProps) {
    return (
        <div
            className={`animate-spin rounded-full border-accent/20 border-t-accent shadow-[0_0_18px_rgba(172,236,0,0.45)] ${sizes[size]} ${className}`}
            aria-label="Loading"
        />
    );
}
